import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ConnectionService } from './connection.service';
import { ReviewConnectionRequestDto, SendConnectionRequestDto } from './dto';
import { CurrentUser } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';

@ApiBearerAuth()
@ApiTags('Connection Routes')
@Controller('connections')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Post('requests/new')
  async handleSendConnectionRequest(
    @Body() body: SendConnectionRequestDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.connectionService.sendRequest(body, owner);
  }

  @Patch('requests/:requestId/review')
  async handleReviewConnectionRequest(
    @Param('requestId') connection_req_id: string,
    @Body() body: ReviewConnectionRequestDto,
    @CurrentUser() owner: AuthTokenClaim,
  ) {
    return this.connectionService.reviewRequest(
      { connection_req_id, decision: body.decision },
      owner,
    );
  }
}
