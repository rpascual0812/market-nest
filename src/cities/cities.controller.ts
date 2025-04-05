import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService) { }

    @Get()
    findAll(@Request() req: any) {
        const query = JSON.parse(JSON.stringify(req.query));
        return this.citiesService.findAll(query);
    }
}
