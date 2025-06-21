import { Module } from '@nestjs/common';
import { SagasController } from './sagas.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SagasService } from './sagas.service';

@Module({
  controllers: [SagasController],
  providers: [SagasService, PrismaService],
})
export class SagasModule {}
