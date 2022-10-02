import { PartialType } from '@nestjs/mapped-types';
import { CreateSliderDocumentDto } from './create-slider-document.dto';

export class UpdateSliderDocumentDto extends PartialType(CreateSliderDocumentDto) {}
