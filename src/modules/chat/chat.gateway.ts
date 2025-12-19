import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'chats',
})
export class ChatGateway {
  @WebSocketServer()
  nsp: Namespace;

  @SubscribeMessage('send.convo')
  handleEvent(@MessageBody() body: unknown, @ConnectedSocket() client: Socket) {
    console.log(client.id);
    console.log('Sent data', body);
    // this.nsp.emit('received.convo', body);
    client.emit('received.convo', body);

    return body;
  }
}
