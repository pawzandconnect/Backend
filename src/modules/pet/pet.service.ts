import { Injectable } from '@nestjs/common';
import { CreatePetRequestDto } from './dto';
import { PetRepository } from './pet.repository';
import { PetMediaType } from '../../../generated/prisma/enums';
import { MAX_PHOTOS, MAX_SIZE_MB, MAX_VIDEO_SIZE_MB } from '@common/constants';
import { ExceptionFactory, ExceptionHandler } from '@utils';
import { FileMeta } from '@common/typings';

@Injectable()
export class PetService {
  constructor(private readonly petRepo: PetRepository) {}

  async createPetProfile(dto: CreatePetRequestDto) {
    const { media, media_type } = dto;
    this.validateMedia(media, media_type);

    const payload = {
      ...dto,
      media: JSON.parse(JSON.stringify(dto.media)),
    };

    try {
      const writeResult = await this.petRepo.create(payload);
      return { message: 'Pet profile created', data: writeResult };
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

      const updatedProfile = await this.petRepo.update(petId, {
        visibility: !petProfile.visibility,
      });

      return { message: 'Pet profile visibility updated', data: updatedProfile };
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

  // Private
  private validateMedia(media: FileMeta[], mediaType: PetMediaType) {
    if (mediaType === PetMediaType.image) {
      const isValidImgMedia = media.filter((item) => !item.mimeType.startsWith('image/'));
      if (isValidImgMedia.length > 0) {
        throw ExceptionFactory.badRequest('All media files must be images.');
      }

      if (media.length === 0) {
        throw ExceptionFactory.badRequest('At least one photo is required to create pet profile.');
      }

      if (media.length > MAX_PHOTOS) {
        throw ExceptionFactory.badRequest('Cannot upload more than 5 photos.');
      }

      const oversizedPhotos = media.filter((item) => item.size > MAX_SIZE_MB);
      if (oversizedPhotos.length > 0) {
        throw ExceptionFactory.badRequest(`Each photo must be less than ${MAX_SIZE_MB}MB in size.`);
      }
    } else if (mediaType === PetMediaType.video) {
      const isValidVideoMedia = media.filter((item) => !item.mimeType.startsWith('video/'));
      if (isValidVideoMedia.length > 0) {
        throw ExceptionFactory.badRequest('All media files must be videos.');
      }
      if (media.length === 0) {
        throw ExceptionFactory.badRequest('A video is required to create pet profile.');
      }

      if (media.length > 1) {
        throw ExceptionFactory.badRequest('Only one video can be uploaded.');
      }

      // Expecting only one video
      const video = media[0];
      if (video.size > MAX_VIDEO_SIZE_MB) {
        throw ExceptionFactory.badRequest(`Video size cannot exceed ${MAX_VIDEO_SIZE_MB}MB.`);
      }
    } else {
      throw ExceptionFactory.badRequest('Invalid media type.');
    }
  }
}
