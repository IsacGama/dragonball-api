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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('planets')
@Controller('planets')
export class PlanetsController {
  constructor(private planetsService: PlanetsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all planets',
    description:
      'Retrieve a list of planets with optional filters for name, isDestroyed status, and limit.',
  })
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
  @ApiOperation({
    summary: 'Get planet by ID',
    description: 'Retrieve a planet by its unique identifier.',
  })
  async getPlanetById(@Param('id') id: string) {
    const planet = await this.planetsService.getPlanetById(Number(id));
    return planet;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new planet',
    description:
      'Create a new planet with the provided details including name, description, photo, and destruction status.',
  })
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
  @ApiOperation({
    summary: 'Update a planet',
    description:
      'Update an existing planet by its ID with the provided details.',
  })
  async updatePlanet(
    @Param('id') id: string,
    @Body() data: Prisma.PlanetaUpdateInput,
  ) {
    return this.planetsService.updatePlanet(Number(id), data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a planet',
    description: 'Delete a planet by its unique identifier.',
  })
  async deletePlanet(@Query('id') id: string) {
    return this.planetsService.deletePlanet(Number(id));
  }
}
