import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.petProfile.create({ data });
  }

  async findAll() {}

  async findById(id) {
    return this.prisma.petProfile.findUnique({ where: { id } });
  }

  async update(id, data) {
    return this.prisma.petProfile.update({ where: { id }, data });
  }

  async delete(id) {}
}
