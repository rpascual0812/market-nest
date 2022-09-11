import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { DateTime } from "luxon";

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
    logout(@Request() req): any {
        return this.authService.logout(req.user);
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
        const { password, active, verified, last_login, login_attempts, date_created, archived, ...others } = account;

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

    @UseGuards(JwtAuthGuard)
    @Get('test')
    test(@Request() req): string {
        return req.user;
    }

    @Get('assets/images/uploads/:customDir/:imageName')
    invoke(@Request() req, @Response() res) {
        return res.sendFile(req.path, { root: './' });
    }
}
