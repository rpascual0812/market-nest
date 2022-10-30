import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
    async findAll(filters: any) {
        try {
            const users = await getRepository(City)
                .createQueryBuilder('cities')
                .select('cities')
                .leftJoinAndSelect("cities.country", "countries")
                .leftJoinAndSelect("cities.province", "provinces")
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
