import { Test, TestingModule } from '@nestjs/testing';
import { GarbageCollectorService } from './garbage-collector.service';

describe('GarbageCollectorService', () => {
  let service: GarbageCollectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GarbageCollectorService],
    }).compile();

    service = module.get<GarbageCollectorService>(GarbageCollectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
