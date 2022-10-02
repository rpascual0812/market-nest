import { Module } from '@nestjs/common';
import { SliderDocumentsService } from './slider-documents.service';
import { SliderDocumentsController } from './slider-documents.controller';

@Module({
  controllers: [SliderDocumentsController],
  providers: [SliderDocumentsService]
})
export class SliderDocumentsModule {}
