import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Seller, Product]),
    ],
    controllers: [SellerController],
    providers: [SellerService, ProductsService]
})
export class SellerModule { }
