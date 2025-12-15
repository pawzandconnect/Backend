import { Injectable } from '@nestjs/common';
import { ExceptionFactory, ExceptionHandler } from '@utils';
import { OwnerRepository } from './owner.repository';
import { UpdateOwnerProfileDto } from './dto';
import { ActionTakenBy, ProfileVisibility } from '@prisma/client';

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
      const visibility =
        owner.visibility === ProfileVisibility.private
          ? ProfileVisibility.public
          : ProfileVisibility.private;

      const updatedOwner = await this.ownerRepo.update(ownerId, {
        visibility,
      });

      return { message: 'Owner visibility updated', data: updatedOwner };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async updateProfile(dto: UpdateOwnerProfileDto, ownerId: string) {
    if (!ownerId) {
      throw ExceptionFactory.badRequest('Owner ID is required.');
    }

    const {
      bio,
      display_name,
      location,
      looking_for,
      preferred_locations,
      travel_radius,
      latitude,
      longitude,
    } = dto;

    if (!display_name) {
      throw ExceptionFactory.badRequest('Provide a display name');
    }

    if (!travel_radius) {
      throw ExceptionFactory.badRequest('Select a travel radius');
    }

    if (!location) {
      throw ExceptionFactory.badRequest('Address is required');
    }

    if (!bio) {
      throw ExceptionFactory.badRequest("Bio is required, let's get to to know you");
    }

    if (!looking_for || looking_for.length === 0) {
      throw ExceptionFactory.badRequest(
        'Select the options to tell us what your pet is looking for',
      );
    }

    if (!preferred_locations || preferred_locations.length === 0) {
      throw ExceptionFactory.badRequest(
        'Select suitable locations you would prefer to met other pet owners',
      );
    }

    const finalPayload = {
      ...dto,
      preferred_meetup_locations: preferred_locations,
      ...(longitude && { longitude: parseFloat(longitude) }),
      ...(latitude && { latitude: parseFloat(latitude) }),
    };

    try {
      const updateWrite = await this.ownerRepo.update(ownerId, finalPayload);
      return { message: 'Owner profile updated', data: updateWrite };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
  async deactivateAccount(ownerId: string) {
    if (!ownerId) {
      throw ExceptionFactory.badRequest('Owner ID is required.');
    }

    try {
      const updateWrite = await this.ownerRepo.update(ownerId, {
        deactivated: true,
        deactivated_at: new Date(),
        deactivated_by: ActionTakenBy.user,
      });
      return { message: 'Owner profile updated', data: updateWrite };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async deleteAccount(ownerId: string) {
    if (!ownerId) {
      throw ExceptionFactory.badRequest('Owner ID is required.');
    }
    try {
      await this.ownerRepo.deleteRecordWithTx(ownerId, {
        deleted: true,
        deleted_at: new Date(),
        deleted_by: ActionTakenBy.user,
      });

      // TODO: Queue account delection worlflow
      return { message: 'Owner profile deleted', data: null };
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
}
