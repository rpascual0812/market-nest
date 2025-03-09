import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UploadedFile, HttpStatus, UseGuards, UseInterceptors, ParseFilePipeBuilder } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { editFileName } from '../utilities/upload.utils';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Throttle } from '@nestjs/throttler';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) { }

    // @Post()
    // create(@Body() createDocumentDto: CreateDocumentDto) {
    //     return this.documentsService.create(createDocumentDto);
    // }

    @UseGuards(JwtAuthGuard)
    @Throttle({ default: { limit: 3, ttl: 60000 } })
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadedFile(
        @UploadedFile(
            new ParseFilePipeBuilder()
                .addFileTypeValidator({
                    fileType: /(mp4|jpe?g|gif|png|pdf|doc|docx|xls|xlsx|txt|zip|msword|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.openxmlformats-officedocument.spreadsheetml.sheet)$/,
                })
                .addMaxSizeValidator({ maxSize: 5000000 }) // 5MB
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                }),
        )
        file: Express.Multer.File
    ) {
        let fileName = '';
        editFileName(file, (name) => {
            fileName = name;
        });
        return await this.documentsService.uploadFile(fileName, file);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any) {
        return this.documentsService.findAll(req.query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.documentsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
        return this.documentsService.update(+id, updateDocumentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.documentsService.remove(+id);
    }
}
