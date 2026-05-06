import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from '../documents/entities/document.entity';
import { Log } from '../logs/entities/log.entity';
import { Brackets, Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { ArticleDocument } from './entities/article-document.entity';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) { }

    async findAll(data: any, filters: any) {
        filters = JSON.parse(JSON.stringify(filters));
        try {
            const articles = await dataSource.getRepository(Article)
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
                // .andWhere(
                //     Object.prototype.hasOwnProperty.call(filters, 'keyword') ?
                //         "articles.title ILIKE :keyword" :
                //         '1=1', { keyword: `%${filters.keyword}%` }
                // )
                .andWhere(Object.prototype.hasOwnProperty.call(filters, 'keyword') ? new Brackets(qb => {
                    qb.where("articles.title ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("articles.url ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("articles.description ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')
                .leftJoinAndSelect("articles.user", "users")
                .skip(filters.skip)
                .take(filters.take)
                .orderBy('articles.sort_order', 'ASC')
                .addOrderBy('articles.pk', 'ASC')
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
        // console.log('creating/updating article', form);
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let article = null;
                    let articleObj = null;
                    if (form.pk) {
                        const filters = { 'pk': form.pk };
                        articleObj = await EntityManager.update(Article, filters, { title: form.title, description: form.description, url: form.url });
                    }
                    else {
                        // Get last sort order
                        const lastArticle = await EntityManager.findOne(Article, {
                            order: { sort_order: 'DESC' },
                            where: {
                                archived: false
                            }
                        });
                        const lastSortOrder = lastArticle ? lastArticle.sort_order : 0;

                        article = new Article();
                        article.title = form.title;
                        article.description = form.description;
                        article.url = form.url;
                        article.user_pk = user.pk;
                        article.sort_order = lastSortOrder + 1;
                        articleObj = await EntityManager.save(article);
                    }

                    if (form.image) {
                        if (Object.prototype.hasOwnProperty.call(form.image, 'pk')) {
                            await EntityManager.update(ArticleDocument, { pk: form.image.pk }, { document_pk: form.image.document.pk });
                        }
                        else {
                            if (form.image.document.pk) {
                                let articleDocument = new ArticleDocument();
                                articleDocument.user_pk = user.pk;
                                articleDocument.article_pk = articleObj.pk;
                                articleDocument.type = 'background';
                                articleDocument.document_pk = form.image.document.pk;
                                await EntityManager.save(articleDocument);
                            }
                        }
                    }

                    // LOGS
                    const log = new Log();
                    log.model = 'article';
                    log.model_pk = form.pk ? form.pk : article.pk;
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
            return { status: false, code: (err as any)?.code || 500 };
        } finally {
            await queryRunner.release();
        }
    }

    @UsePipes(ValidationPipe)
    async delete(pk: any, user: any) {
        console.log('deleting banner', pk);
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    await EntityManager.update(Article, { pk }, { archived: true });

                    const slider = await Article.findOne({
                        where: {
                            pk
                        }
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'article';
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
            return { status: false, code: (err as any)?.code || 500 };
        } finally {
            await queryRunner.release();
        }
    }

    @UsePipes(ValidationPipe)
    async sort(pk: number, direction: string) {
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const article = await EntityManager.findOne(Article, { where: { pk } });
                    switch (direction) {
                        case 'up':
                            const prevArticle = await EntityManager.findOne(Article, { where: { sort_order: article.sort_order - 1 } });
                            if (prevArticle) {
                                await EntityManager.update(Article, { pk: prevArticle.pk }, { sort_order: article.sort_order });
                            }
                            return await EntityManager.update(Article, { pk }, { sort_order: article.sort_order - 1 });
                        case 'down':
                            const nextArticle = await EntityManager.findOne(Article, { where: { sort_order: article.sort_order + 1 } });
                            if (nextArticle) {
                                await EntityManager.update(Article, { pk: nextArticle.pk }, { sort_order: article.sort_order });
                            }
                            return await EntityManager.update(Article, { pk }, { sort_order: article.sort_order + 1 });
                        default:
                            break;
                    }
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: (err as any)?.code || 500 };
        } finally {
            await queryRunner.release();
        }
    }
}
