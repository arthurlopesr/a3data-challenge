import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalOrdersController } from './surgical-orders.controller';
import { SurgicalOrdersService } from './surgical-orders.service';

describe('SurgicalOrdersController', () => {
  let controller: SurgicalOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurgicalOrdersController],
      providers: [SurgicalOrdersService],
    }).compile();

    controller = module.get<SurgicalOrdersController>(SurgicalOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
