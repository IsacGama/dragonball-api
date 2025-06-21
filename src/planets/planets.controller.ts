import { Controller, Get, Query } from '@nestjs/common';
import { PlanetsService } from './planets.service';

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
  async getPlanetById(@Query('id') id: string) {
    const planet = await this.planetsService.getPlanetById(Number(id));
    return planet;
  }
}
