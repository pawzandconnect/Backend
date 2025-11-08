import { Injectable } from '@nestjs/common';
import { ExceptionFactory, ExceptionHandler } from '@utils';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepo: OwnerRepository) {}

  async getOwnerProfile(ownerId: string) {
    if (!ownerId) {
      throw ExceptionFactory.badRequest('Owner ID is required.');
    }

    try {
      const owner = await this.ownerRepo.findById(ownerId);
      if (!owner) {
        throw ExceptionFactory.notFound('Owner not found.');
      }

      return { message: 'Onwer information retrieved', data: owner };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async toggleProfileVisibility(ownerId: string) {
    if (!ownerId) {
      throw ExceptionFactory.badRequest('Owner ID is required.');
    }

    try {
      const owner = await this.ownerRepo.findById(ownerId);
      if (!owner) {
        throw ExceptionFactory.notFound('Owner not found.');
      }

      const updatedOwner = await this.ownerRepo.update(ownerId, {
        visibility: !owner.visibility,
      });

      return { message: 'Owner visibility updated', data: updatedOwner };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
}
