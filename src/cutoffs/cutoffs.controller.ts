import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CutoffsService } from './cutoffs.service';
import { CreateCutoffDto } from './dto/create-cutoff.dto';
import { UpdateCutoffDto } from './dto/update-cutoff.dto';

@Controller('cutoffs')
export class CutoffsController {
    constructor(private readonly cutoffService: CutoffsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: any, @Request() req: any, @Response() res: any) {
        const cutoff = await this.cutoffService.store(req.user, body, null);
        return res.status(cutoff.hasOwnProperty('pk') ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(cutoff);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':pk')
    async update(@Param('pk') pk: number, @Body() body: any, @Request() req: any, @Response() res: any) {
        const data = await this.cutoffService.store(req.user, body, pk);
        return res.status(data.affected > 0 ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(data.raw);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        return await this.cutoffService.findAll(req.user);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        // return this.cutoffsService.findOne(+id);
    }



    @Delete(':id')
    remove(@Param('id') id: string) {
        // return this.cutoffsService.remove(+id);
    }
}
