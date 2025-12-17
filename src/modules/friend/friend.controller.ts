import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FriendService } from './friend.service';
import { ReviewFriendRequestDto, SendFriendRequestDto } from './dto';
import { CurrentUser } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';

@ApiBearerAuth()
@ApiTags('Friends Routes')
@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post('requests/new')
  async handleSendFriendRequest(
    @Body() body: SendFriendRequestDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.friendService.sendRequest(body, owner);
  }

  @Patch('requests/:requestId/review')
  async handleReviewFriendRequest(
    @Param('requestId') friend_req_id: string,
    @Body() body: ReviewFriendRequestDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.friendService.reviewRequest({ friend_req_id, decision: body.decision }, owner);
  }
}
