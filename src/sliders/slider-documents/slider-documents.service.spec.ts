import { Test, TestingModule } from '@nestjs/testing';
import { SliderDocumentsService } from './slider-documents.service';

describe('SliderDocumentsService', () => {
  let service: SliderDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliderDocumentsService],
    }).compile();

    service = module.get<SliderDocumentsService>(SliderDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
