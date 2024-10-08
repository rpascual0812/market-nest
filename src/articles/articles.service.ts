import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Brackets, getConnection, getRepository, Repository } from 'typeorm';
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
                // .andWhere(
                //     filters.hasOwnProperty('keyword') ?
                //         "articles.title ILIKE :keyword" :
                //         '1=1', { keyword: `%${filters.keyword}%` }
                // )
                .andWhere(filters.hasOwnProperty('keyword') ? new Brackets(qb => {
                    qb.where("articles.title ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("articles.url ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("articles.description ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')
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
        // console.log('creating/updating article', form);
        const queryRunner = getConnection().createQueryRunner();
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
                        article = new Article();
                        article.title = form.title;
                        article.description = form.description;
                        article.url = form.url;
                        article.user_pk = user.pk;
                        articleObj = await EntityManager.save(article);
                    }

                    if (form.image) {
                        if (form.image.hasOwnProperty('pk')) {
                            await EntityManager.update(ArticleDocument, { pk: form.image.pk }, { document_pk: form.image.document.pk });
                        }
                        else {
                            let articleDocument = new ArticleDocument();
                            articleDocument.user_pk = user.pk;
                            articleDocument.article_pk = articleObj.pk;
                            articleDocument.type = 'background';
                            articleDocument.document_pk = form.image.document.pk;
                            await EntityManager.save(articleDocument);
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
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
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
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }
    }
}
