import { Injectable } from '@nestjs/common';
import { CreateSurgicalOrderDto } from './dto/create-surgical-order.dto';
import { UpdateSurgicalOrderDto } from './dto/update-surgical-order.dto';

@Injectable()
export class SurgicalOrdersService {
  createOrderSurgery(createSurgicalOrderDto: CreateSurgicalOrderDto) {
    return createSurgicalOrderDto;
  }

  findAllOrderSurgery() {
    return `This action returns all surgicalOrders`;
  }

  previewOrderSurgery(id: number) {
    return `This action returns a #${id} surgicalOrder`;
  }

  updateOrderSurgery(
    id: number,
    updateSurgicalOrderDto: UpdateSurgicalOrderDto,
  ) {
    return `This action updates a #${id} surgicalOrder`;
  }

  removeOrderSurgery(id: number) {
    return `This action removes a #${id} surgicalOrder`;
  }
}
