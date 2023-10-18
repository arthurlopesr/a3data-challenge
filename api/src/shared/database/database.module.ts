import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SurgicalOrdersRepository } from './repositories/surgical-orders.repositories';

@Global()
@Module({
  providers: [PrismaService, SurgicalOrdersRepository],
  exports: [SurgicalOrdersRepository],
})
export class DatabaseModule {}
