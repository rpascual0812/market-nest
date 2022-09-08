import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInquiryDto } from './dto/create-inquiry.dto';
import { UpdateInquiryDto } from './dto/update-inquiry.dto';
import { Inquiry } from './entities/inquiry.entity';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InquiriesService {
    constructor(
        @InjectRepository(Inquiry)
        private validationRepository: Repository<Inquiry>,
    ) { }

    create(data: any) {
        const obj: any = {
            uuid: uuidv4(),
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }

        const newInquiry = this.validationRepository.create(obj);
        return this.validationRepository.save(newInquiry);
    }

    findAll() {
        return `This action returns all inquiries`;
    }

    findOne(id: number) {
        return `This action returns a #${id} inquiry`;
    }

    update(id: number, updateInquiryDto: UpdateInquiryDto) {
        return `This action updates a #${id} inquiry`;
    }

    remove(id: number) {
        return `This action removes a #${id} inquiry`;
    }
}
