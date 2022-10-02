import { Module } from '@nestjs/common';
import { SlidersService } from './sliders.service';
import { SlidersController } from './sliders.controller';
import { SliderDocumentsModule } from './slider-documents/slider-documents.module';

@Module({
  controllers: [SlidersController],
  providers: [SlidersService],
  imports: [SliderDocumentsModule]
})
export class SlidersModule {}
