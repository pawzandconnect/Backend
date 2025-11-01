import { Body, Controller, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetRequestDto } from './dto';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post('new')
  async createPetProfile(@Body() dto: CreatePetRequestDto) {
    return this.petService.createPetProfile(dto);
  }
}
