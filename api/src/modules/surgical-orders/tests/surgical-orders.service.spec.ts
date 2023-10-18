import { ConflictException, NotFoundException } from '@nestjs/common';
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
            update: jest.fn().mockReturnValueOnce(mockSurgicalOrdersService),
            delete: jest.fn().mockResolvedValue(mockSurgicalOrdersService),
            findFirst: jest.fn().mockResolvedValue(mockSurgicalOrdersService),
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

  it('should throw ConflictException in createOrderSurgery', async () => {
    jest
      .spyOn(service, 'createOrderSurgery')
      .mockRejectedValue(
        new ConflictException('Essa sala já está reservada para essa data'),
      );

    await expect(
      service.createOrderSurgery(mockSurgicalOrdersService),
    ).rejects.toThrowError(ConflictException);
  });

  it('should throw NotFoundException in updateOrderSurgery', async () => {
    jest
      .spyOn(surgicalOrdersRepository, 'update')
      .mockRejectedValue(new NotFoundException('Order not found'));

    await expect(
      service.updateOrderSurgery(
        'nonExistentOrderId',
        mockSurgicalOrdersService,
      ),
    ).rejects.toThrowError(NotFoundException);
  });

  it('should throw NotFoundException in deleteOrderSurgery', async () => {
    jest
      .spyOn(surgicalOrdersRepository, 'delete')
      .mockRejectedValue(new NotFoundException('Order not found'));
    await expect(
      service.removeOrderSurgery('nonExistentOrderId'),
    ).rejects.toThrowError(NotFoundException);
  });
});
