import { Test, TestingModule } from '@nestjs/testing';
import { SliderDocumentsController } from './slider-documents.controller';
import { SliderDocumentsService } from './slider-documents.service';

describe('SliderDocumentsController', () => {
  let controller: SliderDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SliderDocumentsController],
      providers: [SliderDocumentsService],
    }).compile();

    controller = module.get<SliderDocumentsController>(SliderDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
