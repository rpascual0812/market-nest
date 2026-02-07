import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ArticleDocument } from './entities/article-document.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Article, ArticleDocument]),
    ],
    controllers: [ArticlesController],
    providers: [ArticlesService]
})
export class ArticlesModule { }
