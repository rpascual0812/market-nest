import { Module } from '@nestjs/common';
import { SlidersService } from './sliders.service';
import { SlidersController } from './sliders.controller';
import { SliderDocumentsModule } from './slider-documents/slider-documents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';
import { SliderDocument } from './entities/slider-document.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Slider, SliderDocument]),
    ],
    controllers: [SlidersController],
    providers: [SlidersService],
})
export class SlidersModule { }
