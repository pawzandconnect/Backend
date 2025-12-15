import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { Owner } from '@prisma/client';

@Injectable()
export class OwnerRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async findById(ownerId: string) {
    return this.prisma.owner.findUnique({ where: { id: ownerId } });
  }

  async update(ownerId: string, data: Partial<Owner>) {
    return this.prisma.owner.update({
      where: { id: ownerId },
      data,
    });
  }

  async deleteRecordWithTx(ownerId: string, data: Partial<Owner>) {
    await this.prisma.$transaction(async (tx) => {
      await tx.owner.update({
        where: { id: ownerId },
        data,
      });

      // Signal pet profile of deletion
      await tx.petProfile.update({
        where: { owner_id: ownerId },
        data: {
          owner_account_deleted: true,
        },
      });
    });
  }
}
