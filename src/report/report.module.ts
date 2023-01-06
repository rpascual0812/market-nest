import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/orders/entities/order.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Order]),
    ],
    controllers: [ReportController],
    providers: [ReportService]
})
export class ReportModule { }
