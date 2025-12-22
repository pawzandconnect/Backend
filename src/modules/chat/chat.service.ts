import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chat.repository';
import { ExceptionFactory } from '@utils';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepo: ChatRepository) {}

  async createConversation() {}

  async addParticipantToConversation() {}

  async createMessage() {}

  async fetchMessageHistory() {}

  async fetchUserAcceptedConversations(dto: { user_id: string }) {
    if (!dto?.user_id) {
      throw ExceptionFactory.badRequest('Pass the ID of the user');
    }

    return await this.chatRepo.getAcceptedConversations({ user_id: dto.user_id });
  }
}
