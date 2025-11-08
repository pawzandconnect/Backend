import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OwnerService } from './owner.service';
import { CurrentUser } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';

@ApiBearerAuth()
@ApiTags('Owners')
@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('profile')
  async getOwnerProfile(@CurrentUser() user: AuthTokenClaim) {
    return this.ownerService.getOwnerProfile(user.email);
  }

  // @Patch('profile')
  // async updateOwnerProfile(@CurrentUser() user: AuthTokenClaim, @Body() dto) {
  //   // return this.ownerService.updateOwnerProfile();
  // }

  // @Patch('preferences')
  // async updateOwnerPreferences(@CurrentUser() user: AuthTokenClaim, @Body() dto) {
  //   // return this.ownerService.updateOwnerPreferences();
  // }

  @Patch('toggle-visibility')
  async toggleProfileVisibility(@CurrentUser() user: AuthTokenClaim) {
    return this.ownerService.toggleProfileVisibility(user.sub);
  }
}
