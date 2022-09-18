import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import { Measurement } from './entities/measurement.entity';

@Injectable()
export class MeasurementsService {
    constructor(
        @InjectRepository(Measurement)
        private measurementRepository: Repository<Measurement>,
    ) { }

    findAll() {
        return this.measurementRepository.find({ where: { archived: false } });
    }

    findOne(pk: number) {
        return this.measurementRepository.findOne({ where: { pk } });
    }

    update(id: number, updateMeasurementDto: UpdateMeasurementDto) {
        return `This action updates a #${id} measurement`;
    }

    remove(id: number) {
        return `This action removes a #${id} measurement`;
    }
}
