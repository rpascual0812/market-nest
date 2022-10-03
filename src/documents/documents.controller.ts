import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UploadedFile, HttpStatus, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { editFileName, imageFileFilter } from '../utilities/upload.utils';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Controller('documents')
export class DocumentsController {
    constructor(private readonly documentsService: DocumentsService) { }

    // @Post()
    // create(@Body() createDocumentDto: CreateDocumentDto) {
    //     return this.documentsService.create(createDocumentDto);
    // }

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: (req, file, callback) => {
                    callback(null, process.env.UPLOAD_DIR + '/documents');
                },
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),
    )
    async uploadedFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
        return await this.documentsService.create(file);
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
