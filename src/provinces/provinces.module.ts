import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { Province } from './entities/province.entity';
import { Country } from 'src/countries/entities/country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from 'src/users/entities/user-address.entity';
import { SellerAddress } from 'src/seller/entities/seller-address.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Country, Province, UserAddress, SellerAddress])],
    controllers: [ProvincesController],
    providers: [ProvincesService]
})
export class ProvincesModule { }
