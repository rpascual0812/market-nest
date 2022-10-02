import { Injectable } from '@nestjs/common';
import { CreateProductDocumentDto } from './dto/create-product-document.dto';
import { UpdateProductDocumentDto } from './dto/update-product-document.dto';

@Injectable()
export class ProductDocumentsService {
  create(createProductDocumentDto: CreateProductDocumentDto) {
    return 'This action adds a new productDocument';
  }

  findAll() {
    return `This action returns all productDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productDocument`;
  }

  update(id: number, updateProductDocumentDto: UpdateProductDocumentDto) {
    return `This action updates a #${id} productDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} productDocument`;
  }
}
