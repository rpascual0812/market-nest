import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utilities/upload.utils';
// import { response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }

    @Get(':pk')
    async findOne(@Request() req: any) {
        const user = await this.usersService.findOne(req.params);
        const userAddresses = await this.usersService.getUserAddresses([user['pk']], req.query);
        const sellerAddresses = user ? await this.usersService.getSellerAddresses([user['seller']['pk']], req.query) : [];
        const userFollowing = await this.usersService.getUserFollowing([user['pk']], req.query);
        const userFollower = await this.usersService.getUserFollower([user['pk']], req.query);

        user['user_addresses'] = [];
        // Append user addresses
        if (userAddresses) {
            userAddresses[0].forEach(address => {
                if (user['pk'] == address.user_pk) {
                    user['user_addresses'].push(address);
                }
            });
        }

        user['seller_addresses'] = [];
        // Append user addresses
        if (sellerAddresses[0]) {
            sellerAddresses[0].forEach(address => {
                if (user['seller']['pk'] == address.seller_pk) {
                    user['seller_addresses'].push(address);
                }
            });
        }

        user['following_count'] = userFollowing ? userFollowing[1] : 0;
        user['following'] = [];
        if (userFollowing) {
            userFollowing[0].forEach(following => {
                if (user['pk'] == following.created_by) {
                    user['following'].push(following);
                }
            });
        }

        user['follower_count'] = userFollower ? userFollower[1] : 0;
        user['follower'] = [];
        if (userFollower) {
            userFollower[0].forEach(follower => {
                if (user['pk'] == follower.user_pk) {
                    user['follower'].push(follower);
                }
            });
        }

        if (user) {
            return user;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any) {
        const users = await this.usersService.findAll(req.user, req.query);
        if (users.data) {
            return users;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async find(@Request() req: any) {
        console.log(req.user);
        // no need to fetch another as fetching is always happening in jwt.strategy
        return req.user;
        // const res = await this.usersService.find(req.user);
        // console.log(res);
        // return res;
    }

    @UseGuards(JwtAuthGuard)
    @Post('photo')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: (req, file, callback) => {
                    callback(null, process.env.UPLOAD_DIR + '/profile');
                },
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async create(@UploadedFile() file: Express.Multer.File, @Request() req: any, @Response() res: any) {
        const result = await this.usersService.uploadPhoto(req.user, file);
        // console.log("🚀 ~ file: users.controller.ts ~ line 46 ~ UsersController ~ create ~ result", result.affected)

        return res.status(result.affected == 1 ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: result.affected == 1 ? true : false,
            file: file,
        });
    }

    @UseGuards(JwtAuthGuard)
    @Get('last')
    async getLast(@Request() req: any) {
        console.log('getting last user', req.user);
        return await this.usersService.findLast(req.user);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.usersService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //     return this.usersService.update(+id, updateUserDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.usersService.remove(+id);
    // }
}
