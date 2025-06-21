import { SagasService } from './sagas.service';
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

  @Post()
  async createSaga(
    @Body()
    body: {
      nome: string;
      descricao: string;
    },
  ) {
    return this.sagasService.createSaga(body);
  }

  @Patch(':id')
  async updateSaga(
    @Param('id') id: string,
    @Body() data: { nome?: string; descricao?: string },
  ) {
    return this.sagasService.updateSaga(Number(id), data);
  }

  @Delete(':id')
  async deleteSaga(@Query('id') id: string) {
    return this.sagasService.deleteSaga(Number(id));
  }
}
