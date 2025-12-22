import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { ExceptionFactory } from '@utils';
import { JwtService } from '@nestjs/jwt';
import { Logger } from '@nestjs/common';
import { RedisService } from '@shared';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chats',
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger = new Logger(ChatGateway.name);
  constructor(
    private readonly jwtService: JwtService,
    private readonly redisService: RedisService,
    private readonly chatService: ChatService,
  ) {}
  @WebSocketServer()
  nsp: Namespace;

  afterInit(server: Namespace) {
    server.use(this.authMiddleware);
  }

  async handleConnection(socket: Socket) {
    const userId = socket.data.user.sub;

    this.logger.log(`User ${userId} connected with socket ${socket.id}`);

    // Redis mapping
    await this.redisService.sadd(`user:${userId}:sockets`, socket.id);

    // Join all conversations
    const conversations = await this.chatService.fetchUserAcceptedConversations(userId);
    conversations.forEach((c) => socket.join(c.conversation_id));
  }

  async handleDisconnect(socket: Socket) {
    // cleanup
    const userId = socket.data.user?.sub;
    if (!userId) return;

    this.logger.log(`User ${userId} disconnected (${socket.id})`);

    await this.redisService.srem(`user:${userId}:sockets`, socket.id);
  }

  @SubscribeMessage('send.convo')
  handleEvent(@MessageBody() body: unknown, @ConnectedSocket() socket: Socket) {
    const senderId = socket.data.user.sub;

    console.log('Sent data', body);
    // this.nsp.emit('received.convo', body);
    socket.emit('received.convo', body);

    // ack
    return { ok: true };
  }

  private authMiddleware = async (socket: Socket, next: (err?: Error) => void) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(ExceptionFactory.unauthorized());
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token);

      // Attach user to socket
      socket.data.user = decoded;

      return next();
    } catch (e) {
      this.logger.error('Socket is unauthorized', e);
      return next(ExceptionFactory.unauthorized());
    }
  };
}
