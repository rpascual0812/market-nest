import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UseInterceptors, UploadedFile, Response, HttpStatus, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArticlesService } from './articles.service';
import { generatePath } from 'src/utilities/generate-s3-path.utils';

@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }

    @Get()
    async findAll(@Request() req: any) {
        const articles = await this.articlesService.findAll(req.user, req.query);
        if (articles) {
            articles.data.map(article => {
                generatePath(article.article_document.document['path'], (path: string) => {
                    article.article_document.document['path'] = path;
                });
            });
            return articles;
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

    @UseGuards(JwtAuthGuard)
    @Post(':pk/sort')
    async sort(@Param('pk') pk: any, @Body() body: any) {
        const data = await this.articlesService.sort(pk, body.direction);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
