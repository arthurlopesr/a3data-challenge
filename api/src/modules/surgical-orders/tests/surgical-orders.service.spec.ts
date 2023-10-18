import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalOrdersRepository } from '../../../shared/database/repositories/surgical-orders.repositories';
import { SurgicalOrdersService } from '../surgical-orders.service';
import { mockSurgicalOrdersService } from './mocks/surgical-orders.mock';

describe('SurgicalOrdersService', () => {
  let service: SurgicalOrdersService;
  let surgicalOrdersRepository: SurgicalOrdersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurgicalOrdersService,
        {
          provide: SurgicalOrdersRepository,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockSurgicalOrdersService),
            update: jest.fn().mockResolvedValue(mockSurgicalOrdersService),
            delete: jest.fn().mockResolvedValue(mockSurgicalOrdersService),
          },
        },
      ],
    }).compile();

    service = module.get<SurgicalOrdersService>(SurgicalOrdersService);
    surgicalOrdersRepository = module.get<SurgicalOrdersRepository>(
      SurgicalOrdersRepository,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(surgicalOrdersRepository).toBeDefined();
  });

  it('should return surgial order in findAllOrderSurgery', async () => {
    const order = await service.findAllOrderSurgery();
    expect(order).toEqual(mockSurgicalOrdersService);
  });
});
