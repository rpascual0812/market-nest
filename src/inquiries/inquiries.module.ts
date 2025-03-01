import { Module } from '@nestjs/common';
import { InquiriesService } from './inquiries.service';
import { InquiriesController } from './inquiries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inquiry } from './entities/inquiry.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Inquiry]),
    ],
    controllers: [InquiriesController],
    providers: [InquiriesService],
    exports: [InquiriesService]
})
export class InquiriesModule { }
