import { Injectable } from '@nestjs/common';
import { UpsertPetRequestDto } from './dto';
import { PetRepository } from './pet.repository';
import { ExceptionFactory, ExceptionHandler, Helpers } from '@utils';
import { AuthTokenClaim } from '@common/typings';
import { ProfileVisibility } from '@prisma/client';

@Injectable()
export class PetService {
  constructor(private readonly petRepo: PetRepository) {}

  async upsertPetProfile(dto: UpsertPetRequestDto, owner: AuthTokenClaim) {
    const { media, media_type, pet_id } = dto;
    if (media && media_type) {
      Helpers.deepValidateMedia(media, media_type);
    }

    // upsert
    const payload = {
      ...dto,
      owner_id: owner.sub,
      media: JSON.parse(JSON.stringify(dto.media)),
    };

    try {
      const writeResult = await this.petRepo.upsert(pet_id, payload as any);
      const label = pet_id ? 'updated' : 'created';
      return { message: `Pet profile ${label}`, data: writeResult };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async toggleProfileVisibility(petId: string) {
    if (!petId) {
      throw ExceptionFactory.badRequest('Pet ID is required.');
    }

    try {
      const petProfile = await this.petRepo.findById(petId);
      if (!petProfile) {
        throw ExceptionFactory.notFound('Pet profile not found.');
      }

      const visibility =
        petProfile.visibility === ProfileVisibility.private
          ? ProfileVisibility.public
          : ProfileVisibility.private;

      const updatedProfile = await this.petRepo.update(petId, {
        visibility,
      });

      return { message: 'Pet profile visibility updated', data: updatedProfile };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
  async toggleCanAdopt(petId: string) {
    if (!petId) {
      throw ExceptionFactory.badRequest('Pet ID is required.');
    }

    try {
      const petProfile = await this.petRepo.findById(petId);
      if (!petProfile) {
        throw ExceptionFactory.notFound('Pet profile not found.');
      }

      const updatedProfile = await this.petRepo.update(petId, {
        available_for_adoption: !petProfile.available_for_adoption,
      });

      return { message: 'Pet profile adoption status updated', data: updatedProfile };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async getPetProfileById(petId: string) {
    if (!petId) {
      throw ExceptionFactory.badRequest('Pet ID is required.');
    }

    try {
      const petProfile = await this.petRepo.findById(petId);
      if (!petProfile) {
        throw ExceptionFactory.notFound('Pet profile not found.');
      }

      return { message: 'Pet profile retrieved', data: petProfile };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async getPetPosts(dto) {
    // If petId isn't in filter, set fallback as owner's pet if any or delete filter from request payload
    try {
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async getPetConnections(dto) {
    // If petId isn't in filter, set fallback as owner's pet if any or delete filter from request payload
    try {
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async getPetFriends(dto) {
    // If petId isn't in filter, set fallback as owner's pet if any or delete filter from request payload
    // I should probably create a small helper function for that
    try {
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
}
