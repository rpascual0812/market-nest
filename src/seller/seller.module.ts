import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { SellerDocument } from './entities/seller-document.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Seller, Product, User, UserDocument, SellerDocument]),
    ],
    controllers: [SellerController],
    providers: [SellerService, ProductsService, UsersService]
})
export class SellerModule { }
