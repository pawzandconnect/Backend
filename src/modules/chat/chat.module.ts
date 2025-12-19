import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ChatRepository } from './chat.repository';
import { ChatGateway } from './chat.gateway';

@Module({
  providers: [ChatService, ChatRepository, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}
