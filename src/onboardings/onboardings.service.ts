import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Brackets, getConnection, getRepository, Repository } from 'typeorm';
import { OnboardingDocument } from './entities/onboarding-document.entity';
import { Onboarding } from './entities/onboarding.entity';

@Injectable()
export class OnboardingsService {
    constructor(
        @InjectRepository(Onboarding)
        private onboardingRepository: Repository<Onboarding>,
    ) { }

    async findAll(data: any, filters: any) {
        try {
            const onboardings = await getRepository(Onboarding)
                .createQueryBuilder('onboardings')
                .select('onboardings')
                .leftJoinAndMapOne(
                    'onboardings.onboarding_document',
                    OnboardingDocument,
                    'onboarding_documents',
                    'onboardings.pk=onboarding_documents.onboarding_pk'
                )
                .leftJoinAndMapOne(
                    'onboarding_documents.document',
                    Document,
                    'documents',
                    'onboarding_documents.document_pk=documents.pk',
                )
                .where('onboardings.archived=false')
                .andWhere(filters.hasOwnProperty('keyword') ? new Brackets(qb => {
                    qb.where("onboardings.title ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("onboardings.description ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')
                .leftJoinAndSelect("onboardings.user", "users")
                .skip(filters.skip)
                .take(filters.take)
                .orderBy('onboardings.queue', 'ASC')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: onboardings[0],
                total: onboardings[1]
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
        console.log('creating/updating onboarding', form);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let onboarding = null;
                    let onboardingObj = null;
                    if (form.pk) {
                        const filters = { 'pk': form.pk };
                        onboardingObj = await EntityManager.update(Onboarding, filters, { title: form.title, description: form.description });
                    }
                    else {
                        const queue = await getRepository(Onboarding)
                            .createQueryBuilder('onboarding')
                            .select('onboarding')
                            .orderBy('queue', 'DESC')
                            .getOne()
                            ;

                        onboarding = new Onboarding();
                        onboarding.title = form.title;
                        onboarding.description = form.description;
                        onboarding.user_pk = user.pk;
                        onboarding.queue = queue ? queue['queue'] + 1 : 1;
                        onboardingObj = await EntityManager.save(onboarding);
                    }

                    if (form.image) {
                        if (form.image.hasOwnProperty('pk')) {
                            await EntityManager.update(OnboardingDocument, { pk: form.image.pk }, { document_pk: form.image.document.pk });
                        }
                        else {
                            let onboardingDocument = new OnboardingDocument();
                            onboardingDocument.user_pk = user.pk;
                            onboardingDocument.onboarding_pk = onboardingObj.pk;
                            onboardingDocument.type = 'background';
                            onboardingDocument.document_pk = form.image.document.pk;
                            await EntityManager.save(onboardingDocument);
                        }
                    }

                    // LOGS
                    const log = new Log();
                    log.model = 'onboarding';
                    log.model_pk = form.pk ? form.pk : onboarding.pk;
                    log.details = JSON.stringify({
                        title: form.title,
                        details: form.description,
                        icon: form.icon,
                        background: form.background
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: onboarding };
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
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    await EntityManager.update(Onboarding, { pk }, { archived: true });

                    const onboarding = await Onboarding.findOne({
                        pk
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'onboarding';
                    log.model_pk = onboarding.pk;
                    log.details = JSON.stringify({
                        title: onboarding.title,
                        description: onboarding.description,
                        archived: true
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: onboarding };
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
