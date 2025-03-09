import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { Document } from './entities/document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports: [
        ThrottlerModule.forRoot([{
            ttl: 60000, // you can only use the same request 100 times within 60 seconds
            limit: 200,
        }]),
        TypeOrmModule.forFeature([Document]),
        ConfigModule.forRoot({ isGlobal: true })
    ],
    providers: [
        DocumentsService,
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ],
    controllers: [DocumentsController],
    exports: [DocumentsService]
})
export class DocumentsModule { }
