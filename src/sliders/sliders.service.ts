import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/documents/entities/document.entity';
import { getRepository, Repository } from 'typeorm';
import { SliderDocument } from './entities/slider-document.entity';
import { Slider } from './entities/slider.entity';

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
}
