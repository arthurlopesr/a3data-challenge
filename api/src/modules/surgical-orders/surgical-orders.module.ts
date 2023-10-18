import { Module } from '@nestjs/common';
import { SurgicalOrdersController } from './surgical-orders.controller';
import { SurgicalOrdersService } from './surgical-orders.service';

@Module({
  controllers: [SurgicalOrdersController],
  providers: [SurgicalOrdersService],
})
export class SurgicalOrdersModule {}
