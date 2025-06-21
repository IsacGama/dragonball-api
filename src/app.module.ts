import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';
import { TransformationsModule } from './transformations/transformations.module';
import { SagasService } from './sagas/sagas.service';
import { SagasController } from './sagas/sagas.controller';
import { SagasModule } from './sagas/sagas.module';

@Module({
  imports: [
    CharactersModule,
    PlanetsModule,
    TransformationsModule,
    SagasModule,
  ],
  controllers: [AppController, SagasController],
  providers: [AppService, SagasService],
})
export class AppModule {}
