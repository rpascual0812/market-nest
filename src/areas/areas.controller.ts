import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { AreasService } from './areas.service';

@Controller('areas')
export class AreasController {
    constructor(private readonly areasService: AreasService) { }

    @Get()
    findAll(@Request() req: any) {
        return this.areasService.findAll(req.query);
    }
}
