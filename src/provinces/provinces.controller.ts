import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('provinces')
export class ProvincesController {
    constructor(private readonly provincesService: ProvincesService) { }

    @Get()
    findAll(@Request() req: any) {
        return this.provincesService.findAll(req.query);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update')
    async update(@Request() req: any, @Body() body: any) {
        return await this.provincesService.update(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':code')
    async delete(@Param('code') code: number, @Request() req: any, @Body() body: any) {
        return await this.provincesService.delete(code, req.user);
    }
}
