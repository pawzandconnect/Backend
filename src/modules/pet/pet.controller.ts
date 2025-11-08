import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetRequestDto } from './dto';
import { CurrentUser, Public } from '@common/decorators';
import { AuthTokenClaim } from '@common/typings';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('new')
  async createPetProfile(@Body() dto: CreatePetRequestDto, @CurrentUser() owner: AuthTokenClaim) {
    return this.petService.createPetProfile(dto, owner);
  }

  @Get(':petId')
  async getPetProfileById(@Param('petId') petId: string) {
    return this.petService.getPetProfileById(petId);
  }

  @Patch(':petId/toggle-visibility')
  async toggleProfileVisibility(@Body('petId') petId: string) {
    return this.petService.toggleProfileVisibility(petId);
  }

  @Public()
  @Get()
  async getAllPets() {
    return this.petService.getAllPets();
  }
}
