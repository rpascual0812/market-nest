import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OnboardingsService } from './onboardings.service';

@Controller('onboardings')
export class OnboardingsController {
    constructor(private readonly onboardingsService: OnboardingsService) { }

    @Get()
    async findAll(@Request() req: any) {
        const data = await this.onboardingsService.findAll(req.user, req.query);
        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.onboardingsService.save(body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':pk')
    async delete(@Param('pk') pk, @Request() req: any, @Body() body: any) {
        const data = await this.onboardingsService.delete(pk, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
