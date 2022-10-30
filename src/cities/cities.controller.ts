import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService) { }

    @Get()
    findAll(@Request() req: any) {
        return this.citiesService.findAll(req.query);
    }
}
