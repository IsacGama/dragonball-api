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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('characters')
@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all characters',
    description:
      'Retrieve a list of characters with optional filters for name, gender, race, affiliation, and limit.',
  })
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
  @ApiOperation({
    summary: 'Get character by ID',
    description: 'Retrieve a character by its unique identifier.',
  })
  async getCharacterById(@Param('id') id: string) {
    const character = await this.charactersService.getCharacterById(Number(id));
    return character;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new character',
    description:
      'Create a new character with the provided details including name, age, ki, maxki, race, gender, description, photo, affiliation, saga ID, and planet ID.',
  })
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
  @ApiOperation({
    summary: 'Update character by ID',
    description:
      'Update an existing character with the provided details. Only fields that are included in the request body will be updated.',
  })
  async updateCharacter(
    @Param('id') id: string,
    @Body() data: Prisma.CharacterUpdateInput,
  ) {
    return this.charactersService.updateCharacter(Number(id), data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete character by ID',
    description: 'Delete a character using its unique identifier.',
  })
  async deleteCharacter(@Param('id') id: string) {
    return this.charactersService.deleteCharacter(Number(id));
  }
}
