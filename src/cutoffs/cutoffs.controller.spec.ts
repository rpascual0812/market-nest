import { Test, TestingModule } from '@nestjs/testing';
import { CutoffsController } from './cutoffs.controller';
import { CutoffsService } from './cutoffs.service';

describe('CutoffsController', () => {
  let controller: CutoffsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutoffsController],
      providers: [CutoffsService],
    }).compile();

    controller = module.get<CutoffsController>(CutoffsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
