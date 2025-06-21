import { TransformationsService } from './transformations.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
