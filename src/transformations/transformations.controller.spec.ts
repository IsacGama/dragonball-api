import { Test, TestingModule } from '@nestjs/testing';
import { TransformationsController } from './transformations.controller';

describe('TransformationsController', () => {
  let controller: TransformationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransformationsController],
    }).compile();

    controller = module.get<TransformationsController>(TransformationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
