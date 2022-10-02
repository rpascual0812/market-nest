import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SliderDocumentsService } from './slider-documents.service';
import { CreateSliderDocumentDto } from './dto/create-slider-document.dto';
import { UpdateSliderDocumentDto } from './dto/update-slider-document.dto';

@Controller('slider-documents')
export class SliderDocumentsController {
  constructor(private readonly sliderDocumentsService: SliderDocumentsService) {}

  @Post()
  create(@Body() createSliderDocumentDto: CreateSliderDocumentDto) {
    return this.sliderDocumentsService.create(createSliderDocumentDto);
  }

  @Get()
  findAll() {
    return this.sliderDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sliderDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSliderDocumentDto: UpdateSliderDocumentDto) {
    return this.sliderDocumentsService.update(+id, updateSliderDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sliderDocumentsService.remove(+id);
  }
}
