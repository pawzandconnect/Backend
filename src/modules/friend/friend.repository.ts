import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { Friend, FriendRequestStatus } from '@prisma/client';
import { ExceptionFactory } from '@utils';

@Injectable()
export class FriendRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.friend.create({ data });
  }

  async findAll() {
    return this.prisma.friend.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id) {
    return this.prisma.friend.findUnique({
      where: { id },
    });
  }

  async update(id, data: Partial<Friend>) {
    return this.prisma.friend.update({ where: { id }, data });
  }

  async findFriendRequestById(id: string) {
    return this.prisma.friendRequest.findUnique({
      where: { id },
    });
  }

  async createFriendRequest(data) {
    return this.prisma.friendRequest.create({ data });
  }

  async storeFriendRequestReviewDecisionWithTx(data: {
    friend_req_id: string;
    shouldAcceptRequest: boolean;
    owner_id: string;
    friend_owner_id: string;
  }) {
    const { friend_req_id, shouldAcceptRequest, owner_id, friend_owner_id } = data;

    return this.prisma.$transaction(async (tx) => {
      if (shouldAcceptRequest) {
        try {
          await tx.friend.create({
            data: { owner_id, friend_owner_id },
          });
        } catch (e) {
          if (!ExceptionFactory.isUniqueViolation(e)) {
            throw e;
          }
        }
      }

      return tx.friendRequest.update({
        where: { id: friend_req_id },
        data: {
          status: shouldAcceptRequest ? FriendRequestStatus.accepted : FriendRequestStatus.rejected,
        },
      });
    });
  }

  async findFriendsConnection(data: { owner_id: string; friend_owner_id: string }) {
    const { friend_owner_id, owner_id } = data;
    return this.prisma.friend.findUnique({
      where: {
        owner_id_friend_owner_id: {
          owner_id,
          friend_owner_id,
        },
      },
    });
  }

  async findPendingFriendRequestBetween(params: { userA: string; userB: string }) {
    const { userA, userB } = params;

    return this.prisma.friendRequest.findFirst({
      where: {
        status: FriendRequestStatus.pending,
        OR: [
          {
            sender_owner_id: userA,
            receiver_owner_id: userB,
          },
          {
            sender_owner_id: userB,
            receiver_owner_id: userA,
          },
        ],
      },
    });
  }
}
