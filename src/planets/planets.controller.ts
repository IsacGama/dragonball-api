import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { Prisma } from '@prisma/client';

@Controller('planets')
export class PlanetsController {
  constructor(private planetsService: PlanetsService) {}

  @Get()
  async getAllPlanets(
    @Query('name') name?: string,
    @Query('isDestroyed') isDestroyed?: string,
    @Query('limit') limit?: string,
  ) {
    return this.planetsService.getAllPlanets({
      name,
      isDestroyed: isDestroyed ? isDestroyed === 'true' : undefined,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  async getPlanetById(@Param('id') id: string) {
    const planet = await this.planetsService.getPlanetById(Number(id));
    return planet;
  }

  @Post()
  async createPlanet(
    @Body()
    body: {
      nome: string;
      descricao: string;
      foto: string;
      isDestroyed: boolean;
    },
  ) {
    return this.planetsService.createPlanet(body);
  }

  @Patch(':id')
  async updatePlanet(
    @Param('id') id: string,
    @Body() data: Prisma.PlanetaUpdateInput,
  ) {
    return this.planetsService.updatePlanet(Number(id), data);
  }

  @Delete(':id')
  async deletePlanet(@Query('id') id: string) {
    return this.planetsService.deletePlanet(Number(id));
  }
}
