import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    async findAll(@Request() req: any) {
        const data = await this.articlesService.findAll(req.user, req.query);
        // console.log('articles', data);
        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.articlesService.save(body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':pk')
    async delete(@Param('pk') pk, @Request() req: any, @Body() body: any) {
        const data = await this.articlesService.delete(pk, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
