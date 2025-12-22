import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { PetProfile } from '@prisma/client';

@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaConfig) {}

  async create(data: PetProfile) {
    return this.prisma.petProfile.create({ data });
  }

  async findAll() {
    return this.prisma.petProfile.findMany({ orderBy: { created_at: 'desc' } });
  }

  async findById(id: string) {
    return this.prisma.petProfile.findUnique({
      where: { id },
      select: {
        age: true,
        name: true,
        available_for_adoption: true,
        bio: true,
        breed: true,
        gender: true,
        temperament_tags: true,
        energy_level: true,
        size: true,
        neutered_status: true,
        vaccination_status: true,
        visibility: true,
        species: true,
        display_picture: true,
        owner: {
          select: {
            bio: true,
            city: true,
            country: true,
            state: true,
            looking_for: true,
            travel_radius: true,
            preferred_meetup_locations: true,
            display_picture: true,
            display_name: true,
          },
        },
      },
    });
  }

  async update(id: string, data: Partial<PetProfile>) {
    return this.prisma.petProfile.update({ where: { id }, data });
  }

  // async delete(id) {}

  async upsert(id, data: PetProfile) {
    const petID = id ?? 'random';
    return this.prisma.petProfile.upsert({
      where: { id: petID },
      update: data,
      create: data,
    });
  }
}
