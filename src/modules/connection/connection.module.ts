import { Module } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { ConnectionController } from './connection.controller';
import { ConnectionRepository } from './connection.repository';

@Module({
  providers: [ConnectionService, ConnectionRepository],
  controllers: [ConnectionController],
})
export class ConnectionModule {}
