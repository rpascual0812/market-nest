import { Module } from '@nestjs/common';
import { SlidersService } from './sliders.service';
import { SlidersController } from './sliders.controller';
import { SliderDocumentsModule } from './slider-documents/slider-documents.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Slider } from './entities/slider.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Slider]),
    ],
    controllers: [SlidersController],
    providers: [SlidersService],
})
export class SlidersModule { }
