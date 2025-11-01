import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetRequestDto } from './dto';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('new')
  async createPetProfile(@Body() dto: CreatePetRequestDto) {
    return this.petService.createPetProfile(dto);
  }

  @Get(':petId')
  async getPetProfileById(@Param('petId') petId: string) {
    return this.petService.getPetProfileById(petId);
  }

  @Patch(':petId/toggle-visibility')
  async toggleProfileVisibility(@Body('petId') petId: string) {
    return this.petService.toggleProfileVisibility(petId);
  }
}
