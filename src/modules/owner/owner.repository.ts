import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';

@Injectable()
export class OwnerRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async findById(ownerId: string) {
    return this.prisma.owner.findUnique({ where: { id: ownerId } });
  }

  async update(ownerId: string, updateData: any) {
    return this.prisma.owner.update({
      where: { id: ownerId },
      data: updateData,
    });
  }
}
