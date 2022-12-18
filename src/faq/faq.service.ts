import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';

import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Faq } from './entities/faq.entity';

@Injectable()
export class FaqService {
    create(createFaqDto: CreateFaqDto) {
        return 'This action adds a new faq';
    }

    async findAll(filters: any) {
        try {
            const faqs = await getRepository(Faq)
                .createQueryBuilder('faq')
                .select('faq')
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "faq.question = :keyword" : "1=1",
                    { keyword: `${filters.keyword}` }
                )
                .leftJoinAndSelect("faq.user", "users")
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
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let faq = null;
                    if (form.pk) {
                        faq = await Faq.findOne({
                            pk: form.pk
                        });
                    }
                    else {
                        faq = new Faq();
                    }

                    const lastOrder = await getRepository(Faq)
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
            // console.log('finally...');
        }
    }
}
