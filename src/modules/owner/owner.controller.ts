import { Body, Controller, Delete, Get, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OwnerService } from './owner.service';
import { CurrentUser } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';
import { UpdateOwnerProfileDto } from './dto';

@ApiBearerAuth()
@ApiTags('Owners')
@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('profile')
  async getOwnerProfile(@CurrentUser() owner: AuthTokenClaim) {
    return this.ownerService.getOwnerProfile(owner.sub);
  }

  @Patch('profile')
  async updateOwnerProfile(
    @CurrentUser() owner: AuthTokenClaim,
    @Body() dto: UpdateOwnerProfileDto,
  ) {
    return this.ownerService.updateProfile(dto, owner.sub);
  }

  @Patch('toggle-visibility')
  async toggleProfileVisibility(@CurrentUser() owner: AuthTokenClaim) {
    return this.ownerService.toggleProfileVisibility(owner.sub);
  }

  @Patch('deactivate')
  async deactivateAccount(@CurrentUser() owner: AuthTokenClaim) {
    return this.ownerService.deactivateAccount(owner.sub);
  }

  @Delete('trash')
  async deleteAccount(@CurrentUser() owner: AuthTokenClaim) {
    return this.ownerService.deleteAccount(owner.sub);
  }
}
