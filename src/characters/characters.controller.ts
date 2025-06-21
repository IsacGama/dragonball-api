import { Controller, Get, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';

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
  async getCharacterById(id: number) {
    const character = await this.charactersService.getCharacterById(id);
    return character;
  }
}
