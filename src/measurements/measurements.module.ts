import { Module } from '@nestjs/common';
import { MeasurementsService } from './measurements.service';
import { MeasurementsController } from './measurements.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Measurement } from './entities/measurement.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Measurement]),
    ],
    controllers: [MeasurementsController],
    providers: [MeasurementsService]
})
export class MeasurementsModule {}
