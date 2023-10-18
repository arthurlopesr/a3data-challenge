import { Module } from '@nestjs/common';
import { SurgicalOrdersModule } from './modules/surgical-orders/surgical-orders.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [SurgicalOrdersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
