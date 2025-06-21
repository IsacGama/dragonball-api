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
import { CharactersService } from './characters.service';
import { Prisma } from '@prisma/client';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  async getAllCharacters(
    @Query('name') name?: string,
    @Query('genero') genero?: string,
    @Query('raca') raca?: string,
    @Query('afiliacao') afiliacao?: string,
    @Query('limit') limit?: string,
  ) {
    return this.charactersService.getAllCharacters({
      name,
      genero,
      raca,
      afiliacao,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  async getCharacterById(@Param('id') id: string) {
    const character = await this.charactersService.getCharacterById(Number(id));
    return character;
  }

  @Post()
  async createCharacter(
    @Body()
    body: {
      nome: string;
      idade: number;
      ki?: string;
      maxKi?: string;
      raca: string;
      genero: string;
      descricao: string;
      foto: string;
      afiliacao: string;
      sagaId: number;
      planetaId: number;
    },
  ) {
    return this.charactersService.createCharacter(body);
  }

  @Patch(':id')
  async updateCharacter(
    @Param('id') id: string,
    @Body() data: Prisma.CharacterUpdateInput,
  ) {
    return this.charactersService.updateCharacter(Number(id), data);
  }

  @Delete(':id')
  async deleteCharacter(@Param('id') id: string) {
    return this.charactersService.deleteCharacter(Number(id));
  }
}
