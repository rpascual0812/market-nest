import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Country } from 'src/countries/entities/country.entity';
import { ProductDocumentsModule } from './product-documents/product-documents.module';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Product, Country]),
        ProductDocumentsModule,
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule { }
