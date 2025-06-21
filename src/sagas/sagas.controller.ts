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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('sagas')
@Controller('sagas')
export class SagasController {
  constructor(private sagasService: SagasService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all sagas',
    description:
      'Retrieve a list of sagas with optional filters for name, personagens, and limit.',
  })
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
  @ApiOperation({
    summary: 'Get saga by ID',
    description: 'Retrieve a saga by its unique identifier.',
  })
  async getSagaById(@Param('id') id: string) {
    const saga = await this.sagasService.getSagaById(Number(id));
    return saga;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new saga',
    description:
      'Create a new saga with the provided details including name and description.',
  })
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
  @ApiOperation({
    summary: 'Update an existing saga',
    description:
      'Update an existing saga by its ID with the provided details including name and description.',
  })
  async updateSaga(
    @Param('id') id: string,
    @Body() data: { nome?: string; descricao?: string },
  ) {
    return this.sagasService.updateSaga(Number(id), data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a saga',
    description: 'Delete an existing saga by its ID.',
  })
  async deleteSaga(@Param('id') id: string) {
    return this.sagasService.deleteSaga(Number(id));
  }
}
