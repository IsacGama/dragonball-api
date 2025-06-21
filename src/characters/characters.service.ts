import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Character, Prisma } from '@prisma/client';

@Injectable()
export class CharactersService {
  constructor(private prismaService: PrismaService) {}
  async getAllCharacters(filters: {
    name?: string;
    genero?: string;
    raca?: string;
    afiliacao?: string;
    limit?: number;
  }) {
    const { name, genero, raca, afiliacao, limit } = filters;

    return await this.prismaService.character.findMany({
      where: {
        nome: name ? { contains: name, mode: 'insensitive' } : undefined,
        genero: genero ? { equals: genero, mode: 'insensitive' } : undefined,
        raca: raca ? { equals: raca, mode: 'insensitive' } : undefined,
        afiliacao: afiliacao
          ? { equals: afiliacao, mode: 'insensitive' }
          : undefined,
      },
      take: limit ?? 10,
      include: {
        saga: true,
        planeta: true,
        transformacoes: true,
      },
    });
  }

  async getCharacterById(id: number) {
    return this.prismaService.character.findUnique({
      where: { id },
    });
  }

  async createCharacter(data: {
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
  }): Promise<Character> {
    return await this.prismaService.character.create({
      data: {
        nome: data.nome,
        idade: data.idade,
        ki: data.ki,
        maxKi: data.maxKi,
        raca: data.raca,
        genero: data.genero,
        descricao: data.descricao,
        foto: data.foto,
        afiliacao: data.afiliacao,
        sagaId: data.sagaId,
        planetaId: data.planetaId,
      },
    });
  }
  async updateCharacter(id: number, data: Prisma.CharacterUpdateInput) {
    return await this.prismaService.character.update({
      where: { id },
      data,
    });
  }

  async deleteCharacter(id: number) {
    return await this.prismaService.character.delete({
      where: { id },
    });
  }
}
