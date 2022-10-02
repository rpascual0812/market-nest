import { Test, TestingModule } from '@nestjs/testing';
import { UserDocumentsController } from './user-documents.controller';
import { UserDocumentsService } from './user-documents.service';

describe('UserDocumentsController', () => {
  let controller: UserDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDocumentsController],
      providers: [UserDocumentsService],
    }).compile();

    controller = module.get<UserDocumentsController>(UserDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
