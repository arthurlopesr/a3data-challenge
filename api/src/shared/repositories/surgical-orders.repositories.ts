import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class SurgicalOrdersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SurgicalRequestsCreateArgs) {
    return this.prismaService.surgicalRequests.create(createDto);
  }

  findFirst(findFirstDto: Prisma.SurgicalRequestsFindFirstArgs) {
    return this.prismaService.surgicalRequests.findFirst(findFirstDto);
  }
}
