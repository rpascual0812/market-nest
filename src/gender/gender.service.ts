import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
    async findAll(filters: any) {
        // console.log(filters);
        try {
            const genders = await getRepository(Gender)
                .createQueryBuilder('genders')
                .select('genders')
                .where('genders.archived=false')
                .orderBy('genders.name')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
            // console.log(genders);
            return {
                status: true,
                data: genders[0],
                total: genders[1]
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
