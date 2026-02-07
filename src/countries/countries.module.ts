import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from 'src/cities/entities/city.entity';
import { Area } from 'src/areas/entities/area.entity';

@Module({
    imports: [TypeOrmModule.forFeature([City, Area])],
    controllers: [CountriesController],
    providers: [CountriesService]
})
export class CountriesModule { }
