import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Country } from 'src/countries/entities/country.entity';
import { ProductDocument } from './entities/product-document.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Product, ProductDocument, Country, User]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService, UsersService]
})
export class ProductsModule { }
