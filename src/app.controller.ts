import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { DateTime } from "luxon";
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utilities/upload.utils';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Response() res: any, @Request() req) {
        const user = await this.authService.login(req.user);
        console.log(user);
        if (user) {
            return res.status(HttpStatus.OK).json({ status: 'success', user });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    logout(@Response() res: any, @Request() req): any {
        const result = this.authService.logout(req.user);
        if (result) {
            return res.status(HttpStatus.OK).json({ status: 'success' });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    // @UseGuards(JwtAuthGuard)
    @Post('forgot-password')
    async forgot(@Response() res: any, @Request() req, @Body() body): Promise<any> {
        const newForgot = await this.authService.forgotPassword(body);
        if (newForgot) {
            return res.status(HttpStatus.OK).json({ status: 'success' });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Post('reset-password')
    async reset(@Response() res: any, @Request() req, @Body() body): Promise<any> {
        const newReset = await this.authService.resetPassword(body);
        if (newReset) {
            return res.status(HttpStatus.OK).json({ status: 'success' });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Get('reset-token')
    async resetToken(@Response() res: any, @Request() req): Promise<any> {
        console.log(req.query.token);
        const account = await this.authService.resetToken(req.query.token);
        console.log(account);
        const { password, active, verified, login_attempts, date_created, archived, ...others } = account;

        if (account) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: others, server_time: DateTime.now() });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Post('register')
    async register(@Response() res: any, @Request() req, @Body() body): Promise<any> {
        console.log(body);
        // const newAccount = await this.authService.register(body);
        // if (newAccount) {
        //     return res.status(HttpStatus.OK).json({ status: 'success' });
        // }
        // return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './assets/images',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    upload(@UploadedFile() file: any, @Request() req, @Response() res: any): string {
        console.log('file', file);
        if (file) {
            return res.status(HttpStatus.OK).json(file.path);
        }
        else {
            return res.status(HttpStatus.NOT_FOUND).json('');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    test(@Request() req): string {
        return req.user;
    }

    @Get('assets/images/uploads/:customDir/:imageName')
    invoke(@Request() req, @Response() res) {
        return res.sendFile(req.path, { root: './' });
    }

    @Get('assets/images/:imageName')
    images(@Request() req, @Response() res) {
        return res.sendFile(req.path, { root: './' });
    }
}
