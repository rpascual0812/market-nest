import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utilities/upload.utils';
import { response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //     return this.usersService.create(createUserDto);
    // }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any) {
        const users = this.usersService.findAll(req.user, req.query);
        if ((await users).data) {
            return users;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async find(@Request() req: any) {
        const res = await this.usersService.find(req.user);
        // console.log(res);
        return res;
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
