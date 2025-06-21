import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService, PrismaService],
})
export class PlanetsModule {}
