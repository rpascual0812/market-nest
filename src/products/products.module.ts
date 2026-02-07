import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Country } from 'src/countries/entities/country.entity';
import { ProductDocument } from './entities/product-document.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { Category } from 'src/categories/entities/category.entity';
import { UserCart } from 'src/users/entities/user-cart.entity';
import { ProductRating } from './entities/product-ratings.entity';
import { ProductInterested } from './entities/product-interested.entity';
import { ProductSeen } from './entities/product-seen.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, ProductDocument, Country, User, UserDocument, Category, UserCart, ProductRating, ProductInterested, ProductSeen]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService, UsersService]
})
export class ProductsModule { }
