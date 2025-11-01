import { Injectable } from '@nestjs/common';
import { CreatePetRequestDto } from './dto';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetService {
  constructor(private readonly petRepo: PetRepository) {}

  async createPetProfile(dto: CreatePetRequestDto) {
    // Logic to create a pet profile
    // if (dto.photos.length > MAX_PHOTOS) {
    //   throw new Error(`Cannot upload more than ${MAX_PHOTOS} photos.`);
    // }
    // if (dto.video && dto.video.size > MAX_VIDEO_SIZE_MB) {
    //   throw new Error(`Video size cannot exceed 20MB.`);
    // }
    return { data: dto };
  }
}
