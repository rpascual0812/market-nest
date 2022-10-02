import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductDocumentsService } from './product-documents.service';
import { CreateProductDocumentDto } from './dto/create-product-document.dto';
import { UpdateProductDocumentDto } from './dto/update-product-document.dto';

@Controller('product-documents')
export class ProductDocumentsController {
  constructor(private readonly productDocumentsService: ProductDocumentsService) {}

  @Post()
  create(@Body() createProductDocumentDto: CreateProductDocumentDto) {
    return this.productDocumentsService.create(createProductDocumentDto);
  }

  @Get()
  findAll() {
    return this.productDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDocumentDto: UpdateProductDocumentDto) {
    return this.productDocumentsService.update(+id, updateProductDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productDocumentsService.remove(+id);
  }
}
