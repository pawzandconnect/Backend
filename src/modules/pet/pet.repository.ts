import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.petProfile.create({ data });
  }

  async findAll() {}

  async findById(id) {}

  async update(id, data) {}

  async delete(id) {}
}
