import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { getRepository, Repository } from 'typeorm';
import { ArticleDocument } from './entities/article-document.entity';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) { }

    async findAll(data: any, filters: any) {
        try {
            const articles = await getRepository(Article)
                .createQueryBuilder('articles')
                .select('articles')
                .leftJoinAndMapOne(
                    'articles.article_document',
                    ArticleDocument,
                    'article_documents',
                    'articles.pk=article_documents.article_pk'
                )
                .leftJoinAndMapOne(
                    'article_documents.document',
                    Document,
                    'documents',
                    'article_documents.document_pk=documents.pk',
                )
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

            return {
                status: true,
                data: articles[0],
                total: articles[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }
}
