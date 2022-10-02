import { Injectable } from '@nestjs/common';
import { CreateSliderDocumentDto } from './dto/create-slider-document.dto';
import { UpdateSliderDocumentDto } from './dto/update-slider-document.dto';

@Injectable()
export class SliderDocumentsService {
  create(createSliderDocumentDto: CreateSliderDocumentDto) {
    return 'This action adds a new sliderDocument';
  }

  findAll() {
    return `This action returns all sliderDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sliderDocument`;
  }

  update(id: number, updateSliderDocumentDto: UpdateSliderDocumentDto) {
    return `This action updates a #${id} sliderDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} sliderDocument`;
  }
}
