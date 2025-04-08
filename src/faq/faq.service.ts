import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { Faq } from './entities/faq.entity';
import { json } from 'stream/consumers';

@Injectable()
export class FaqService {
    async findAll(filters: any) {
        filters = JSON.parse(JSON.stringify(filters));
        try {
            const faqs = await dataSource.getRepository(Faq)
                .createQueryBuilder('faq')
                .select('faq')
                .leftJoinAndSelect("faq.user", "users")
                .where('faq.archived=false')
                .andWhere(
                    Object.prototype.hasOwnProperty.call(filters, 'keyword') && filters.keyword != '' ?
                        "faq.question ILIKE :keyword" : "1=1",
                    { keyword: `%${filters.keyword ? filters.keyword.toLowerCase() : ''}%` }
                )
                .orderBy('faq.order')
                .getManyAndCount()
                ;
            
            return {
                status: true,
                data: faqs[0],
                total: faqs[1]
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
        // console.log('creating faq', form);
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let faq = null;
                    if (form.pk) {
                        faq = await Faq.findOne({
                            where: {
                                pk: form.pk
                            }
                        });
                    }
                    else {
                        faq = new Faq();
                    }

                    const lastOrder = await dataSource.getRepository(Faq)
                        .createQueryBuilder('faq')
                        .orderBy('"order"', "DESC")
                        .getOne();

                    faq.question = form.question;
                    faq.answer = form.answer;
                    faq.user_pk = user.pk;
                    faq.order = form.pk ? faq.order : (lastOrder ? lastOrder.order + 1 : 1);
                    const _faq = await EntityManager.save(faq);

                    // LOGS
                    const log = new Log();
                    log.model = 'article';
                    log.model_pk = faq.pk;
                    log.details = JSON.stringify({
                        title: form.title,
                        details: form.description,
                        icon: form.icon,
                        background: form.background
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: faq };
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
    async update(body: any, user: any) {
        const queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const fields = body.faq;
                    const filters = { 'pk': body.pk };
                    const res = await EntityManager.update(Faq, filters, fields);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaints';
                    log.model_pk = body.pk;
                    log.details = JSON.stringify(body.faq);
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: res };
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
