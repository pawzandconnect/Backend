import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { CommentOnCommunityPostDto, CreateCommunityPostDto, VoteOnCommunityPostDto } from './dto';
import { AuthTokenClaim } from '@common/typings';
import { CurrentUser } from '@common/decorators';

@ApiBearerAuth()
@ApiTags('Community Routes')
@Controller('communities')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post('posts/new')
  async handleCreateCommunityPost(
    @Body() body: CreateCommunityPostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.communityService.createPost(body, owner);
  }

  @Post('posts/:postId/comments')
  async handleCommentOnPost(
    @Param('postId') post_id: string,
    @Body()
    body: CommentOnCommunityPostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.communityService.comment({ post_id, content: body.content }, owner);
  }

  @Post('posts/:postId/votes')
  async handleVoteOnPost(
    @Param('postId') post_id: string,
    @Body() body: VoteOnCommunityPostDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.communityService.voteOnPost({ post_id, vote_value: body.vote_value }, owner);
  }
}
