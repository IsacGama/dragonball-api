import { TransformationsService } from './transformations.service';
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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('transformations')
@Controller('transformations')
export class TransformationsController {
  constructor(private transformationsService: TransformationsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all transformations',
    description:
      'Retrieve a list of transformations with optional filters for name, characterId, and limit.',
  })
  async getAllTransformations(
    @Query('name') name?: string,
    @Query('characterId') characterId?: string,
    @Query('limit') limit?: string,
  ) {
    return this.transformationsService.getAllTransformations({
      name,
      characterId: characterId ? parseInt(characterId) : undefined,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get transformation by ID',
    description: 'Retrieve a transformation by its unique identifier.',
  })
  async getTransformationById(@Param('id') id: string) {
    const transformation =
      await this.transformationsService.getTransformationById(Number(id));
    return transformation;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new transformation',
    description:
      'Create a new transformation with the provided details including name, description, photo, and character ID.',
  })
  async createTransformation(
    @Body()
    body: {
      nome: string;
      descricao: string;
      foto: string;
      personagemId: number;
    },
  ) {
    return this.transformationsService.createTransformation(body);
  }
  @Patch(':id')
  @ApiOperation({
    summary: 'Update a transformation',
    description:
      'Update an existing transformation by its ID with the provided details.',
  })
  async updateTransformation(
    @Param('id') id: string,
    @Body() data: { nome?: string; descricao?: string; foto?: string },
  ) {
    return this.transformationsService.updateTransformation(Number(id), data);
  }
  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a transformation',
    description: 'Delete a transformation by its unique identifier.',
  })
  async deleteTransformation(@Param('id') id: string) {
    return this.transformationsService.deleteTransformation(Number(id));
  }
}
