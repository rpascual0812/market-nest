import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Document } from './entities/document.entity';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { generatePath } from 'src/utilities/generate-s3-path.utils';

@Injectable()
export class DocumentsService {
    private readonly s3client = new S3Client({
        region: this.configService.getOrThrow('AWS_S3_REGION')
    });

    constructor(
        @InjectRepository(Document)
        private documentRepository: Repository<Document>,
        private readonly configService: ConfigService
    ) { }

    async create(fileName: string, file: any) {
        const obj = {
            original_name: file.originalname,
            filename: fileName,
            path: process.env.UPLOAD_DIR + '/' + fileName,
            mime_type: file.mimetype,
            size: file.size,
        }

        const newDocument = this.documentRepository.create(obj);
        const document = await this.documentRepository.save(newDocument);
        generatePath(document.path, (path: string) => {
            document.path = path;
        });
        return document;
    }

    async uploadFile(fileName: any, file: any) {
        const result = await this.s3client.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: process.env.UPLOAD_DIR + '/' + fileName,
                Body: file.buffer,
                ACL: 'public-read'
            })
        );

        if (result && result.$metadata && result.$metadata.httpStatusCode == 200) {
            return await this.create(fileName, file);
        }
        else {
            throw new InternalServerErrorException();
        }
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
