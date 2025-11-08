import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { OwnerRepository } from './owner.repository';

@Module({
  providers: [OwnerService, OwnerRepository],
  controllers: [OwnerController],
})
export class OwnerModule {}
