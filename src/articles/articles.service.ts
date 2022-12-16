import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
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
                .where('articles.archived=false')
                .andWhere(
                    filters.hasOwnProperty('keyword') ?
                        "articles.title ILIKE :keyword" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                .leftJoinAndSelect("articles.user", "users")
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

    @UsePipes(ValidationPipe)
    async save(form: any, user: any) {
        console.log('creating article', form);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let article = null;
                    if (form.pk) {
                        article = await Article.findOne({
                            pk: form.pk
                        });
                    }
                    else {
                        article = new Article();
                    }

                    article.title = form.title;
                    article.description = form.description;
                    article.url = form.url;
                    article.user_pk = user.pk;
                    const _article = await EntityManager.save(article);

                    if (form.image.hasOwnProperty('pk')) {
                        await EntityManager.update(ArticleDocument, { pk: form.image.pk }, { document_pk: form.image.document.pk });
                    }
                    else {
                        let articleDocument = new ArticleDocument();
                        articleDocument.user_pk = user.pk;
                        articleDocument.article_pk = _article.pk;
                        articleDocument.type = 'background';
                        articleDocument.document_pk = form.image.document.pk;
                        await EntityManager.save(articleDocument);
                    }

                    // LOGS
                    const log = new Log();
                    log.model = 'article';
                    log.model_pk = article.pk;
                    log.details = JSON.stringify({
                        title: form.title,
                        details: form.description,
                        icon: form.icon,
                        background: form.background
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: article };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    @UsePipes(ValidationPipe)
    async delete(pk: any, user: any) {
        console.log('deleting banner', pk);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    await EntityManager.update(Article, { pk }, { archived: true });

                    const slider = await Article.findOne({
                        pk
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'slider';
                    log.model_pk = slider.pk;
                    log.details = JSON.stringify({
                        title: slider.title,
                        description: slider.description,
                        archived: true
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: slider };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }
}
