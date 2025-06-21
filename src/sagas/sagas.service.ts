import { Injectable } from '@nestjs/common';
import { Saga } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SagasService {
  constructor(private prismaService: PrismaService) {}

  async getAllSagas(filters: {
    name?: string;
    personagens?: string;
    limit?: number;
  }) {
    const { name, personagens, limit } = filters;

    return await this.prismaService.saga.findMany({
      where: {
        nome: name ? { contains: name, mode: 'insensitive' } : undefined,
        personagens: personagens
          ? {
              some: {
                nome: { contains: personagens, mode: 'insensitive' },
              },
            }
          : undefined,
      },
      take: limit ?? 10,
      include: {
        personagens: true,
      },
    });
  }

  async getSagaById(id: number) {
    return this.prismaService.saga.findUnique({
      where: { id },
      include: {
        personagens: true,
      },
    });
  }

  async createSaga(data: { nome: string; descricao: string }): Promise<Saga> {
    return await this.prismaService.saga.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
      },
    });
  }
}
