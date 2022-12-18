import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ConfigurationService } from './configuration.service';

@Controller('configuration')
export class ConfigurationController {
    constructor(private readonly configurationService: ConfigurationService) { }

    // @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Request() req: any, @Body() body: any) {
        return this.configurationService.findAll(req.query);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.configurationService.save(body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
