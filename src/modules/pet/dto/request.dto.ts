import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  PetEnergyLevel,
  PetGender,
  PetMediaType,
  PetSize,
  PetSpecies,
  ProfileVisibility,
} from '@prisma/client';
import { FileMeta } from '@common/typings';
import { ListPaginationDto } from '@common/dtos';
import { IsEnum, IsString } from 'class-validator';

export class UpsertPetRequestDto {
  @ApiPropertyOptional({
    example: 'pet-12345',
    description: 'The unique identifier of the pet (for updates)',
    required: false,
  })
  @IsString()
  pet_id: string;

  @ApiPropertyOptional({
    example: 'Buddy',
    description: 'The name of the pet',
    required: false,
  })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: 'Golden Retriever',
    description: 'The breed of the pet',
    required: false,
  })
  @IsString()
  breed: string;

  @ApiPropertyOptional({
    example: 3,
    description: 'The age of the pet in years',
    required: false,
  })
  @IsString()
  age: number;

  @ApiPropertyOptional({
    example: 'A friendly and energetic dog who loves to play fetch.',
    description: 'A brief biography of the pet',
    required: false,
  })
  @IsString()
  bio: string;

  @ApiPropertyOptional({
    example: [
      { url: 'http://example.com/image1.jpg', mimetype: 'image/webp', size: 102400 },
      { url: 'http://example.com/video1.mp4', mimetype: 'video/mp4', size: 102400, duration: 5.0 },
    ],
    description: 'An array of media items related to the pet',
    required: false,
  })
  media: Array<FileMeta>;

  @ApiPropertyOptional({
    example: PetMediaType.image,
    description: 'The type of media being uploaded',
    enum: PetMediaType,
    required: false,
  })
  @IsEnum(PetMediaType)
  media_type: PetMediaType;

  @ApiPropertyOptional({
    example: PetSpecies.dog,
    description: 'The species of the pet',
    enum: PetSpecies,
    required: false,
  })
  @IsEnum(PetSpecies)
  species: PetSpecies;

  @ApiPropertyOptional({
    example: PetGender.male,
    description: 'The gender of the pet',
    enum: PetGender,
    required: false,
  })
  @IsEnum(PetGender)
  gender: PetGender;

  @ApiPropertyOptional({
    example: PetSize.medium,
    description: 'The size of the pet',
    enum: PetSize,
    required: false,
  })
  @IsEnum(PetSize)
  size: PetSize;

  @ApiPropertyOptional({
    example: ProfileVisibility.public,
    description: 'The visibility of the pet profile',
    required: false,
    enum: ProfileVisibility,
  })
  @IsEnum(ProfileVisibility)
  visibility: ProfileVisibility;

  // Optional properties
  @ApiPropertyOptional({
    example: PetEnergyLevel.high,
    description: 'The energy level of the pet',
    required: false,
    enum: PetEnergyLevel,
  })
  @IsEnum(PetEnergyLevel)
  energy_level?: PetEnergyLevel;

  @ApiPropertyOptional({
    example: 'up to date',
    description: 'The vaccination status of the pet',
    required: false,
  })
  vaccination_status?: string;

  @ApiPropertyOptional({
    example: 'neutered',
    description: 'The neutered status of the pet',
    required: false,
  })
  neutered_status?: string;

  @ApiPropertyOptional({
    example: ['friendly', 'playful'],
    description: 'Temperament tags for the pet',
    required: false,
  })
  temperament_tags?: string[];

  @ApiPropertyOptional({
    example: false,
    description: 'Indicates if the pet is available for adoption',
    required: false,
  })
  available_for_adoption?: boolean;
}

export class FetchLikedPets extends ListPaginationDto {}
