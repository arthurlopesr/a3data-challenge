import { PartialType } from '@nestjs/mapped-types';
import { CreateSurgicalOrderDto } from './create-surgical-order.dto';

export class UpdateSurgicalOrderDto extends PartialType(
  CreateSurgicalOrderDto,
) {}
