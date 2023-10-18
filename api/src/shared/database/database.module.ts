import { Global, Module } from '@nestjs/common';
import { SurgicalOrdersRepository } from '../repositories/surgical-orders.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService, SurgicalOrdersRepository],
  exports: [SurgicalOrdersRepository],
})
export class DatabaseModule {}
