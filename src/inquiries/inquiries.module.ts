import { Module } from '@nestjs/common';
import { InquiriesService } from './inquiries.service';
import { InquiriesController } from './inquiries.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inquiry } from './entities/inquiry.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Inquiry]),
    ],
    controllers: [InquiriesController],
    providers: [InquiriesService],
    exports: [InquiriesService]
})
export class InquiriesModule { }
