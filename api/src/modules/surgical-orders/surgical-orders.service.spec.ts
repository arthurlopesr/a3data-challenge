import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalOrdersService } from './surgical-orders.service';

describe('SurgicalOrdersService', () => {
  let service: SurgicalOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurgicalOrdersService],
    }).compile();

    service = module.get<SurgicalOrdersService>(SurgicalOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
