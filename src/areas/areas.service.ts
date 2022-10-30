import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Area } from './entities/area.entity';

@Injectable()
export class AreasService {
    async findAll(filters: any) {
        try {
            const users = await getRepository(Area)
                .createQueryBuilder('areas')
                .select('areas')
                .leftJoinAndSelect("areas.country", "countries")
                .leftJoinAndSelect("areas.province", "provinces")
                .leftJoinAndSelect("areas.city", "cities")
                .skip(filters.skip)
                .take(filters.take)
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
