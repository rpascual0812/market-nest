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
        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.slidersService.save(body, req.user);

        if (data) {
            const slider = await this.slidersService.find({ pk: data.data.pk });
            return slider;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':pk')
    async delete(@Param('pk') pk, @Request() req: any, @Body() body: any) {
        const data = await this.slidersService.delete(pk, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
