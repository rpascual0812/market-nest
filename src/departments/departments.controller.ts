import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: any, @Request() req: any, @Response() res: any) {
        const data = await this.departmentsService.create(req.user, body, null);
        return res.status(data.hasOwnProperty('pk') ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(data);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':pk')
    async update(@Param('pk') pk: number, @Body() body: any, @Request() req: any, @Response() res: any) {
        const data = await this.departmentsService.store(req.user, body, pk);
        return res.status(data.hasOwnProperty('pk') ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        return await this.departmentsService.findAll(req.user, req.query);
    }

    @UseGuards(JwtAuthGuard)
    @Get('select')
    async findSelect(@Body() body: any, @Request() req: any) {
        return await this.departmentsService.findSelect(req.user);
    }
}
