import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvincesService {

    async findAll(filters: any) {
        try {
            const users = await getRepository(Province)
                .createQueryBuilder('provinces')
                .select(['provinces.pk', 'provinces.name'])
                // .leftJoinAndSelect("provinces.country", "countries")
                .skip(filters.skip)
                .take(filters.take)
                .where('active=true')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: users[0],
                total: users[1]
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
