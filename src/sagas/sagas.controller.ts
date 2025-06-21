import { SagasService } from './sagas.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('sagas')
export class SagasController {
  constructor(private sagasService: SagasService) {}

  @Get()
  async getAllSagas(
    @Query('name') name?: string,
    @Query('personagens') personagens?: string,
    @Query('limit') limit?: string,
  ) {
    return this.sagasService.getAllSagas({
      name,
      personagens,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  async getSagaById(@Query('id') id: string) {
    const saga = await this.sagasService.getSagaById(Number(id));
    return saga;
  }
}
