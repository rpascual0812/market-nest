import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utilities/upload.utils';
import e from 'express';
import { AccountsService } from 'src/accounts/accounts.service';
// import { response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private readonly accountsService: AccountsService) { }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }
    // @UseGuards(JwtAuthGuard)
    @Post('update')
    async update(@Request() req: any, @Body() body: any) {
        return await this.usersService.update(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        return await this.usersService.update(body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async find(@Request() req: any) {
        return await this.usersService.find(req.user);
    }

    @Get(':pk')
    async findOne(@Request() req: any) {
        const user = await this.usersService.findOne(req.params);
        const userAddresses = await this.usersService.getUserAddresses([user['pk']], req.query);
        const sellerAddresses = user && user['seller'] ? await this.usersService.getSellerAddresses([user['seller']['pk']], req.query) : [];
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
        // console.log(req.user, req.query);
        const users = await this.usersService.findAll(req.user, req.query);
        if (users.data) {
            return users;
        }

        throw new InternalServerErrorException();
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
        // console.log('getting last user', req.user);
        return await this.usersService.findLast(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('follow')
    async follow(@Request() req: any, @Body() body: any) {
        // console.log(body);
        if (body.follow == 'follow') {
            return await this.usersService.follow(req.user, body);
        }
        else {
            return await this.usersService.unfollow(req.user, body);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('followedByUser')
    async followedByUser(@Request() req: any, @Body() body: any) {
        // console.log(req.user.pk, body.user_pk);
        return await this.usersService.followedByUser([req.user.pk], [body.user_pk]);
    }

    @Get(':pk/followings')
    async fetchFollowings(@Request() req: any, @Body() body: any) {
        const followings = await this.usersService.getUserFollowing([req.params.pk], req.query);
        const account = await this.accountsService.findOne(req.query.account_pk);
        const userPks = followings[0].map(({ user }) => user.pk);

        let isAlsoFollowed: any = [];
        if (account) {
            isAlsoFollowed = await this.usersService.followedByUser([account.user.pk], userPks);
        }

        followings[0].forEach(following => {
            following['isAlsoFollowed'] = {};
            isAlsoFollowed.forEach(also => {
                if (also.user_pk == following.user_pk) {
                    following['isAlsoFollowed'] = also;
                }
            });
        });

        if (followings[1] > 0) {
            return {
                status: true,
                data: followings[0],
                total: followings[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }

        // console.log(account, followings);
    }

    @Get(':pk/followers')
    async fetchFollowers(@Request() req: any, @Body() body: any) {
        const followers = await this.usersService.getUserFollower([req.params.pk], req.query);
        const account = await this.accountsService.findOne(req.query.account_pk);
        const createdByPks = followers[0].map(({ createdBy }) => createdBy.pk);

        let isAlsoFollowed: any = [];
        if (account) {
            isAlsoFollowed = await this.usersService.followedByUser(createdByPks, [account.user.pk]);
        }

        followers[0].forEach(follower => {
            follower['isAlsoFollowed'] = {};
            isAlsoFollowed.forEach(also => {
                if (also.created_by == follower.created_by) {
                    follower['isAlsoFollowed'] = also;
                }
            });
        });

        if (followers[1] > 0) {
            return {
                status: true,
                data: followers[0],
                total: followers[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async delete(@Request() req: any) {
        return await this.usersService.delete(req.user);
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
