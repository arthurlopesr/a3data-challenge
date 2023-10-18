import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
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

  @Put(':code')
  updateOrderSurgery(
    @Param('code', ParseUUIDPipe) code: string,
    @Body() updateSurgicalOrderDto: UpdateSurgicalOrderDto,
  ) {
    return this.surgicalOrdersService.updateOrderSurgery(
      code,
      updateSurgicalOrderDto,
    );
  }

  @Delete(':code')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeOrderSurgery(@Param('code', ParseUUIDPipe) code: string) {
    return this.surgicalOrdersService.removeOrderSurgery(code);
  }
}
