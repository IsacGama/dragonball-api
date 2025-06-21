import { Module } from '@nestjs/common';
import { TransformationsController } from './transformations.controller';
import { TransformationsService } from './transformations.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TransformationsController],
  providers: [TransformationsService, PrismaService],
})
export class TransformationsModule {}
