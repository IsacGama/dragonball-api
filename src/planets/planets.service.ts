import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanetsService {
  constructor(private prismaService: PrismaService) {}
  async getAllPlanets(filters: {
    name?: string;
    isDestroyed: boolean;
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
}
