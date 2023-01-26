import { Body, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { SliderDocument } from './entities/slider-document.entity';
import { Slider } from './entities/slider.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SlidersService {
    constructor(
        @InjectRepository(Slider)
        private sliderRepository: Repository<Slider>,
    ) { }

    async findAll(data: any, filters: any) {
        try {
            const sliders = await getRepository(Slider)
                .createQueryBuilder('sliders')
                .select('sliders')
                .leftJoinAndMapMany(
                    'sliders.slider_document',
                    SliderDocument,
                    'slider_documents',
                    'sliders.pk=slider_documents.slider_pk'
                )
                .leftJoinAndMapOne(
                    'slider_documents.document',
                    Document,
                    'documents',
                    'slider_documents.document_pk=documents.pk',
                )
                .leftJoinAndSelect("sliders.user", "users")
                .where('sliders.archived=false')
                .andWhere(
                    filters.hasOwnProperty('keyword') ?
                        "sliders.title ILIKE :keyword" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                .skip(filters.skip)
                .take(filters.take)
                .orderBy('sliders.order', 'ASC')
                .addOrderBy('slider_documents.pk', 'ASC')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: sliders[0],
                total: sliders[1]
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
        console.log('creating banner', form);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let slider = null;
                    if (form.pk) {
                        slider = await Slider.findOne({
                            pk: form.pk
                        });
                    }
                    else {
                        slider = new Slider();
                    }

                    slider.type = 'home'; // default type of sliders for now.
                    slider.title = form.title;
                    slider.details = form.details;
                    slider.user_pk = user.pk;
                    const _slider = await EntityManager.save(slider);

                    if (form.icon) {
                        if (form.icon.hasOwnProperty('pk')) {
                            await EntityManager.update(SliderDocument, { pk: form.icon.pk }, { document_pk: form.icon.document.pk });
                        }
                        else {
                            let sliderDocument = new SliderDocument();
                            sliderDocument.user_pk = user.pk;
                            sliderDocument.slider_pk = _slider.pk;
                            sliderDocument.type = 'icon';
                            sliderDocument.document_pk = form.icon.document.pk;
                            await EntityManager.save(sliderDocument);
                        }
                    }

                    if (form.background) {
                        if (form.background.hasOwnProperty('pk')) {
                            await EntityManager.update(SliderDocument, { pk: form.background.pk }, { document_pk: form.background.document.pk });
                        }
                        else {
                            let sliderDocument = new SliderDocument();
                            sliderDocument.user_pk = user.pk;
                            sliderDocument.slider_pk = _slider.pk;
                            sliderDocument.type = 'background';
                            sliderDocument.document_pk = form.background.document.pk;
                            await EntityManager.save(sliderDocument);
                        }
                    }

                    // LOGS
                    const log = new Log();
                    log.model = 'slider';
                    log.model_pk = slider.pk;
                    log.details = JSON.stringify({
                        title: form.title,
                        details: form.details,
                        icon: form.icon,
                        background: form.background
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

    @UsePipes(ValidationPipe)
    async delete(pk: any, user: any) {
        console.log('deleting banner', pk);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    await EntityManager.update(Slider, { pk }, { archived: true });

                    const slider = await Slider.findOne({
                        pk
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'slider';
                    log.model_pk = slider.pk;
                    log.details = JSON.stringify({
                        title: slider.title,
                        details: slider.details,
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
