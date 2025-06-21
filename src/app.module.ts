import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { PlanetsModule } from './planets/planets.module';
import { TransformationsModule } from './transformations/transformations.module';

@Module({
  imports: [CharactersModule, PlanetsModule, TransformationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
