import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransformationsService {
  constructor(private prismaService: PrismaService) {}

  async getAllTransformations(filters: {
    name?: string;
    characterId?: number;
    limit?: number;
  }) {
    const { name, characterId, limit } = filters;
    return await this.prismaService.transformation.findMany({
      where: {
        nome: name ? { contains: name, mode: 'insensitive' } : undefined,
        personagemId: characterId !== undefined ? characterId : undefined,
      },
      take: limit ?? 10,
      include: {
        personagem: true,
      },
    });
  }

  async getTransformationById(id: number) {
    return this.prismaService.transformation.findUnique({
      where: { id },
      include: {
        personagem: true,
      },
    });
  }
}
