import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvincesService {

    async findAll(filters: any) {
        try {
            const users = await getRepository(Province)
                .createQueryBuilder('provinces')
                .select('provinces')
                .leftJoinAndSelect("provinces.country", "countries")
                .skip(filters.skip)
                .take(filters.take)
                .orderBy('provinces.name')
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
