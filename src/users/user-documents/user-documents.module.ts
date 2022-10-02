import { Module } from '@nestjs/common';
import { UserDocumentsService } from './user-documents.service';
import { UserDocumentsController } from './user-documents.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocument } from './entities/user-document.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([UserDocument]),
    ],
    controllers: [UserDocumentsController],
    providers: [UserDocumentsService],
    exports: [UserDocumentsService]
})
export class UserDocumentsModule { }
