import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateSurgicalOrderDto } from './dto/create-surgical-order.dto';
import { UpdateSurgicalOrderDto } from './dto/update-surgical-order.dto';
import { SurgicalOrdersService } from './surgical-orders.service';

@Controller('surgical-orders')
export class SurgicalOrdersController {
  constructor(private readonly surgicalOrdersService: SurgicalOrdersService) {}

  @Post()
  createOrderSurgery(@Body() createSurgicalOrderDto: CreateSurgicalOrderDto) {
    return this.surgicalOrdersService.createOrderSurgery(
      createSurgicalOrderDto,
    );
  }

  @Get()
  findAllOrderSurgery() {
    return this.surgicalOrdersService.findAllOrderSurgery();
  }

  @Get(':id')
  previewOrderSurgery(@Param('id') id: string) {
    return this.surgicalOrdersService.previewOrderSurgery(+id);
  }

  @Patch(':id')
  updateOrderSurgery(
    @Param('id') id: string,
    @Body() updateSurgicalOrderDto: UpdateSurgicalOrderDto,
  ) {
    return this.surgicalOrdersService.updateOrderSurgery(
      +id,
      updateSurgicalOrderDto,
    );
  }

  @Delete(':id')
  removeOrderSurgery(@Param('id') id: string) {
    return this.surgicalOrdersService.removeOrderSurgery(+id);
  }
}
