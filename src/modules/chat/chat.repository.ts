import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { Conversation, ConversationType, ParticipantStatus } from '@prisma/client';

@Injectable()
export class ChatRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data) {
    return this.prisma.conversation.create({ data });
  }

  async findAll() {
    return this.prisma.conversation.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id) {
    return this.prisma.conversation.findUnique({
      where: { id },
    });
  }

  async update(id, data: Partial<Conversation>) {
    return this.prisma.conversation.update({ where: { id }, data });
  }

  async getOrCreateConversation({
    pairing_key,
    sender_id,
    receiver_id,
  }: {
    pairing_key: string;
    sender_id: string;
    receiver_id: string;
  }) {
    try {
      return await this.prisma.conversation.create({
        data: {
          type: ConversationType.direct,
          pairing_key,
          participants: {
            createMany: {
              data: [
                {
                  owner_id: sender_id,
                  status: ParticipantStatus.accepted,
                  joined_at: new Date(),
                },
                {
                  owner_id: receiver_id,
                  status: ParticipantStatus.requested,
                },
              ],
            },
          },
        },
        select: {
          id: true,
        },
      });
    } catch {
      return this.prisma.conversation.findUnique({
        where: {
          type_pairing_key: {
            pairing_key,
            type: ConversationType.direct,
          },
        },
        select: { id: true },
      });
    }
  }

  async createMessageWithReceiptTx(data: {
    content: string;
    conversation_id: string;
    sender_id: string;
    receiver_id: string;
  }) {
    const { content, conversation_id, sender_id, receiver_id } = data;

    return this.prisma.$transaction(async (tx) => {
      const message = await tx.message.create({
        data: {
          content,
          conversation_id,
          sender_id,
        },
      });

      await tx.messageReceipt.create({
        data: {
          message_id: message.id,
          owner_id: receiver_id,
        },
      });

      return message;
    });
  }

  async updateMessageReceiptTimestamp(data: {
    message_id: string;
    user_id: string;
    type: 'read' | 'delivered';
  }) {
    const { message_id, user_id, type } = data;
    const update = type === 'delivered' ? { delivered_at: new Date() } : { read_at: new Date() };

    return this.prisma.messageReceipt.update({
      where: {
        message_id_owner_id: {
          message_id,
          owner_id: user_id,
        },
      },
      data: update,
    });
  }

  async acceptOrRejectConversationRequest(data: {
    conversation_id: string;
    user_id: string;
    status: ParticipantStatus;
  }) {
    const { conversation_id, status, user_id } = data;

    return this.prisma.conversationParticipant.update({
      where: {
        conversation_id_owner_id: {
          conversation_id,
          owner_id: user_id,
        },
      },
      data: {
        status,
      },
    });
  }

  async getAcceptedConversations(data: { user_id: string }) {
    return await this.prisma.conversationParticipant.findMany({
      where: { owner_id: data.user_id, status: ParticipantStatus.accepted },
      select: { conversation_id: true },
    });
  }
}
