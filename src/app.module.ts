import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';
import { TransformationsModule } from './transformations/transformations.module';
import { SagasModule } from './sagas/sagas.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    CharactersModule,
    PlanetsModule,
    TransformationsModule,
    SagasModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
