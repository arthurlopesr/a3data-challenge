import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { SurgicalOrdersRepository } from 'src/shared/repositories/surgical-orders.repositories';
import { SurgicalOrdersController } from './surgical-orders.controller';
import { SurgicalOrdersService } from './surgical-orders.service';

@Module({
  controllers: [SurgicalOrdersController],
  providers: [SurgicalOrdersService, SurgicalOrdersRepository, PrismaService],
})
export class SurgicalOrdersModule {}
