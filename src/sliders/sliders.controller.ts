import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { SlidersService } from './sliders.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('sliders')
export class SlidersController {
    constructor(private readonly slidersService: SlidersService) { }

    // @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any) {
        const data = await this.slidersService.findAll(req.user, req.query);
        console.log('sliders', data);
        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
