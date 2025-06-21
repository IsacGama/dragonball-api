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

@Controller('transformations')
export class TransformationsController {
  constructor(private transformationsService: TransformationsService) {}

  @Get()
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
  async getTransformationById(@Param('id') id: string) {
    const transformation =
      await this.transformationsService.getTransformationById(Number(id));
    return transformation;
  }

  @Post()
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
  async updateTransformation(
    @Param('id') id: string,
    @Body() data: { nome?: string; descricao?: string; foto?: string },
  ) {
    return this.transformationsService.updateTransformation(Number(id), data);
  }
  @Delete(':id')
  async deleteTransformation(@Param('id') id: string) {
    return this.transformationsService.deleteTransformation(Number(id));
  }
}
