import { ConflictException, Injectable } from '@nestjs/common';
import { SurgicalOrdersRepository } from 'src/shared/database/repositories/surgical-orders.repositories';
import { CreateSurgicalOrderDto } from './dto/create-surgical-order.dto';
import { UpdateSurgicalOrderDto } from './dto/update-surgical-order.dto';

@Injectable()
export class SurgicalOrdersService {
  constructor(private readonly surgicalOrdersRepo: SurgicalOrdersRepository) {}

  async createOrderSurgery(createSurgicalOrderDto: CreateSurgicalOrderDto) {
    const {
      doctor,
      hospital,
      medicalProcedure,
      observations,
      patient,
      surgeryDate,
      surgicalRoom,
    } = createSurgicalOrderDto;

    const roomTaken = await this.surgicalOrdersRepo.findFirst({
      where: {
        surgicalRoom,
        surgeryDate,
      },
    });

    if (roomTaken) {
      throw new ConflictException(
        'Essa sala já está reservada para essa data ',
      );
    }

    return this.surgicalOrdersRepo.create({
      data: {
        doctor,
        hospital,
        medicalProcedure,
        observations,
        patient,
        surgeryDate,
        surgicalRoom,
      },
    });
  }

  async findAllOrderSurgery() {
    return this.surgicalOrdersRepo.findAll();
  }

  async updateOrderSurgery(
    code: string,
    updateSurgicalOrderDto: UpdateSurgicalOrderDto,
  ) {
    const {
      doctor,
      hospital,
      medicalProcedure,
      observations,
      patient,
      surgeryDate,
      surgicalRoom,
    } = updateSurgicalOrderDto;

    return this.surgicalOrdersRepo.update({
      where: {
        code,
      },
      data: {
        doctor,
        hospital,
        medicalProcedure,
        observations,
        patient,
        surgeryDate,
        surgicalRoom,
      },
    });
  }

  removeOrderSurgery(id: string) {
    return `This action removes a #${id} surgicalOrder`;
  }
}
