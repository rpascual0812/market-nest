import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { DateTime } from "luxon";
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utilities/upload.utils';
import { DocumentsService } from './documents/documents.service';
import { Role } from './roles/entities/role.entity';

@Controller()
export class AppController {
    constructor(
        private readonly authService: AuthService,
        private readonly documentsService: DocumentsService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Response() res: any, @Request() req) {
        const role = await Role.findOne({
            name: req.body.role
        });

        let account = req.user;
        account.role_pk = role.pk;

        const user = await this.authService.login(account);
        // console.log(user);
        if (user) {
            return res.status(HttpStatus.OK).json({ status: 'success', user });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    logout(@Response() res: any, @Request() req): any {
        // console.log('logging out', req.user);
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
        // console.log(req.query.token);
        const account = await this.authService.resetToken(req.query.token);
        // console.log(account);
        const { password, active, verified, login_attempts, date_created, archived, ...others } = account;

        if (account) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: others, server_time: DateTime.now() });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Post('register')
    async register(@Response() res: any, @Request() req, @Body() body): Promise<any> {
        const newAccount = await this.authService.register(body);
        if (newAccount) {
            return res.status(HttpStatus.OK).json({ status: 'success' });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
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
    async upload(@UploadedFile() file: any, @Request() req, @Response() res: any): Promise<string> {
        const document = await this.documentsService.create(file);
        if (document) {
            // console.log(document);
            return res.status(HttpStatus.OK).json({ status: 'success', document });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
        // if (file) {
        //     return res.status(HttpStatus.OK).json(file.path);
        // }
        // else {
        //     return res.status(HttpStatus.NOT_FOUND).json('');
        // }
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

    @Get('assets/images/uploads/:customDir/:subDir/:imageName')
    product_images(@Request() req, @Response() res) {
        return res.sendFile(req.path, { root: './' });
    }

    @Get('assets/images/:imageName')
    images(@Request() req, @Response() res) {
        return res.sendFile(req.path, { root: './' });
    }
}
