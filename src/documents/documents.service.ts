import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';

@Injectable()
export class DocumentsService {

    constructor(
        @InjectRepository(Document)
        private documentRepository: Repository<Document>,
    ) { }

    create(file: any) {
        console.log(2, file);
        const obj = {
            original_name: file.originalname,
            filename: file.filename,
            path: file.path,
            mime_type: file.mimetype,
            size: file.size,
        }
        const newDocument = this.documentRepository.create(obj);
        return this.documentRepository.save(newDocument);
    }

    async findAll(pagination: any) {
        // return this.documentRepository.find();
        return await dataSource.getRepository(Document)
            .createQueryBuilder()
            .orderBy('pk', 'DESC')
            .skip(pagination.skip)
            .take(pagination.take)
            .getMany()
            ;

        // return await getRepository(Document)
        //     .createQueryBuilder()
        //     .orderBy('pk', 'DESC')
        //     .getMany()
        //     .skip(0)
        //     .take(10)
        //     ;
    }

    findOne(id: number) {
        return `This action returns a #${id} document`;
    }

    update(id: number, updateDocumentDto: UpdateDocumentDto) {
        return `This action updates a #${id} document`;
    }

    remove(id: number) {
        return `This action removes a #${id} document`;
    }
}
