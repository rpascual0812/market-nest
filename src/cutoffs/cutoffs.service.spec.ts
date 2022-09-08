import { Test, TestingModule } from '@nestjs/testing';
import { CutoffsService } from './cutoffs.service';

describe('CutoffsService', () => {
  let service: CutoffsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CutoffsService],
    }).compile();

    service = module.get<CutoffsService>(CutoffsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
