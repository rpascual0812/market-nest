import { Test, TestingModule } from '@nestjs/testing';
import { CronEmailService } from './cron-email.service';

describe('CronEmailService', () => {
  let service: CronEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronEmailService],
    }).compile();

    service = module.get<CronEmailService>(CronEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
