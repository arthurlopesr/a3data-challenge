import { Module } from '@nestjs/common';
import { SurgicalOrdersModule } from './modules/surgical-orders/surgical-orders.module';

@Module({
  imports: [SurgicalOrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
