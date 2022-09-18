import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MeasurementsService } from './measurements.service';

@Controller('measurements')
export class MeasurementsController {
    constructor(private readonly measurementsService: MeasurementsService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any) {
        const data = this.measurementsService.findAll();
        if (await data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
