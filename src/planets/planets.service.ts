import { Injectable } from '@nestjs/common';
import { Planeta } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanetsService {
  constructor(private prismaService: PrismaService) {}
  async getAllPlanets(filters: {
    name?: string;
    isDestroyed?: boolean;
    limit?: number;
  }) {
    const { name, isDestroyed, limit } = filters;

    return await this.prismaService.planeta.findMany({
      where: {
        nome: name ? { contains: name, mode: 'insensitive' } : undefined,
        isDestroyed: isDestroyed !== undefined ? isDestroyed : undefined,
      },
      take: limit ?? 10,
      include: {
        personagens: true,
      },
    });
  }
  async getPlanetById(id: number) {
    return this.prismaService.planeta.findUnique({
      where: { id },
      include: {
        personagens: true,
      },
    });
  }

  async createPlanet(data: {
    nome: string;
    descricao: string;
    foto: string;
    isDestroyed: boolean;
  }): Promise<Planeta> {
    return await this.prismaService.planeta.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        foto: data.foto,
        isDestroyed: data.isDestroyed,
      },
    });
  }
  async updatePlanet(
    id: number,
    data: {
      nome?: string;
      descricao?: string;
      foto?: string;
      isDestroyed?: boolean;
    },
  ): Promise<Planeta> {
    return await this.prismaService.planeta.update({
      where: { id },
      data,
    });
  }

  async deletePlanet(id: number) {
    return await this.prismaService.planeta.delete({
      where: { id },
    });
  }
}
