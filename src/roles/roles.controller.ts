import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) { }

    @Get()
    findAll(@Request() req: any) {
        return this.rolesService.findAll(req.query);
    }
}
