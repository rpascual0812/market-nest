import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
    async findAll(filters: any) {
        // console.log(filters);
        try {
            const cities = await getRepository(City)
                .createQueryBuilder('cities')
                .select('cities')
                .leftJoinAndSelect("cities.country", "countries")
                .leftJoinAndSelect("cities.province", "provinces")
                .where('cities.archived=false')
                .andWhere(filters.hasOwnProperty('province_pk') && filters.province_pk != '0' ? "cities.province_pk = :province_pk" : '1=1', { province_pk: filters.province_pk })
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
            // console.log(cities);
            return {
                status: true,
                data: cities[0],
                total: cities[1]
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
