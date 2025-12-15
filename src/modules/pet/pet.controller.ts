import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { UpsertPetRequestDto } from './dto';
import { CurrentUser, Public } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Pets')
@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('new')
  async upsertPetProfile(@Body() dto: UpsertPetRequestDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.petService.upsertPetProfile(dto, owner);
  }

  // Owner based actions
  @Get('profile')
  async getPetProfileById(@CurrentUser() owner: AuthTokenClaim) {
    return this.petService.getPetProfileById(owner?.pet_id);
  }

  @Patch('toggle-visibility')
  async toggleProfileVisibility(@CurrentUser() owner: AuthTokenClaim) {
    return this.petService.toggleProfileVisibility(owner?.pet_id);
  }

  @Patch('toggle-can-adopt')
  async toggleCanAdopt(@CurrentUser() owner: AuthTokenClaim) {
    return this.petService.toggleCanAdopt(owner?.pet_id);
  }
}
