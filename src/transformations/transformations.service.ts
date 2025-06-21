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

  async createTransformation(data: {
    nome: string;
    descricao: string;
    foto: string;
    personagemId: number;
  }) {
    return await this.prismaService.transformation.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        foto: data.foto,
        personagemId: data.personagemId,
      },
    });
  }

  async updateTransformation(
    id: number,
    data: { nome?: string; descricao?: string; foto?: string },
  ) {
    return await this.prismaService.transformation.update({
      where: { id },
      data,
    });
  }

  async deleteTransformation(id: number) {
    return await this.prismaService.transformation.delete({
      where: { id },
    });
  }
}
