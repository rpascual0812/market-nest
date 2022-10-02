import { Module } from '@nestjs/common';
import { ProductDocumentsService } from './product-documents.service';
import { ProductDocumentsController } from './product-documents.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDocument } from './entities/product-document.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([ProductDocument]),
    ],
    controllers: [ProductDocumentsController],
    providers: [ProductDocumentsService],
    exports: [ProductDocumentsService]
})
export class ProductDocumentsModule { }
