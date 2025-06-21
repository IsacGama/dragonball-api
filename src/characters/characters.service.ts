import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
