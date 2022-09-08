import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { DatabaseModule } from 'src/database.module';
import { Document } from './entities/document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Document]),
    ],
    providers: [DocumentsService],
    controllers: [DocumentsController],
    exports: [DocumentsService]
})
export class DocumentsModule { }
