import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { Connection, ConnectionRequestStatus } from '@prisma/client';
import { ExceptionFactory } from '@utils';

@Injectable()
export class ConnectionRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.connection.create({ data });
  }

  async findAll() {
    return this.prisma.connection.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id) {
    return this.prisma.connection.findUnique({
      where: { id },
    });
  }

  async update(id, data: Partial<Connection>) {
    return this.prisma.connection.update({ where: { id }, data });
  }

  async findConnectionRequestById(id: string) {
    return this.prisma.connectionRequest.findUnique({
      where: { id },
    });
  }

  async createConnectionRequest(data) {
    return this.prisma.connectionRequest.create({ data });
  }

  async storeConnectionRequestReviewDecisionWithTx(data: {
    connection_req_id: string;
    shouldAcceptRequest: boolean;
    pet_id: string;
    connected_pet_id: string;
  }) {
    const { connection_req_id, shouldAcceptRequest, pet_id, connected_pet_id } = data;

    return this.prisma.$transaction(async (tx) => {
      if (shouldAcceptRequest) {
        try {
          await tx.connection.create({
            data: { pet_id, connected_pet_id },
          });
        } catch (e) {
          if (!ExceptionFactory.isUniqueViolation(e)) {
            throw e;
          }
        }
      }

      return tx.connectionRequest.update({
        where: { id: connection_req_id },
        data: {
          status: shouldAcceptRequest
            ? ConnectionRequestStatus.accepted
            : ConnectionRequestStatus.rejected,
        },
      });
    });
  }

  async findPetsConnection(data: { pet_id: string; connected_pet_id: string }) {
    const { connected_pet_id, pet_id } = data;
    return this.prisma.connection.findUnique({
      where: {
        pet_id_connected_pet_id: {
          pet_id,
          connected_pet_id,
        },
      },
    });
  }

  async findPendingConnectionRequestBetween(params: { petA: string; petB: string }) {
    const { petA, petB } = params;

    return this.prisma.connectionRequest.findFirst({
      where: {
        status: ConnectionRequestStatus.pending,
        OR: [
          {
            sender_pet_id: petA,
            receiver_pet_id: petB,
          },
          {
            sender_pet_id: petB,
            receiver_pet_id: petA,
          },
        ],
      },
    });
  }
}
