import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { CommunityRepository } from './community.repository';

@Module({
  providers: [CommunityService, CommunityRepository],
  controllers: [CommunityController],
})
export class CommunityModule {}
