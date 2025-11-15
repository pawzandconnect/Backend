import { ApiProperty } from '@nestjs/swagger';
import {
  PetEnergyLevel,
  PetGender,
  PetMediaType,
  PetSize,
  PetSpecies,
  ProfileVisibility,
} from '@prisma/client';
import { FileMeta } from '@common/typings';

export class CreatePetRequestDto {
  @ApiProperty({
    example: 'Buddy',
    description: 'The name of the pet',
  })
  name: string;

  @ApiProperty({
    example: 'Golden Retriever',
    description: 'The breed of the pet',
  })
  breed: string;

  @ApiProperty({
    example: 3,
    description: 'The age of the pet in years',
  })
  age: number;

  @ApiProperty({
    example: 'A friendly and energetic dog who loves to play fetch.',
    description: 'A brief biography of the pet',
  })
  bio: string;

  @ApiProperty({
    example: [
      { url: 'http://example.com/image1.jpg', mimetype: 'image/webp', size: 102400 },
      { url: 'http://example.com/video1.mp4', mimetype: 'video/mp4', size: 102400, duration: 5.0 },
    ],
    description: 'An array of media items related to the pet',
  })
  media: Array<FileMeta>;

  @ApiProperty({
    example: PetMediaType.image,
    description: 'The type of media being uploaded',
  })
  media_type: PetMediaType;

  @ApiProperty({
    example: PetSpecies.dog,
    description: 'The species of the pet',
  })
  species: PetSpecies;

  @ApiProperty({
    example: PetGender.male,
    description: 'The gender of the pet',
  })
  gender: PetGender;

  @ApiProperty({
    example: PetSize.medium,
    description: 'The size of the pet',
  })
  size: PetSize;

  @ApiProperty({
    example: ProfileVisibility.public,
    description: 'The visibility of the pet profile',
  })
  visibility: ProfileVisibility;

  // Optional properties
  @ApiProperty({
    example: PetEnergyLevel.high,
    description: 'The energy level of the pet',
    required: false,
  })
  energy_level?: PetEnergyLevel;

  @ApiProperty({
    example: 'up to date',
    description: 'The vaccination status of the pet',
    required: false,
  })
  vaccination_status?: string;

  @ApiProperty({
    example: 'neutered',
    description: 'The neutered status of the pet',
    required: false,
  })
  neutered_status?: string;

  @ApiProperty({
    example: ['friendly', 'playful'],
    description: 'Temperament tags for the pet',
    required: false,
  })
  temperament_tags?: string[];

  @ApiProperty({
    example: false,
    description: 'Indicates if the pet is available for adoption',
    required: false,
  })
  available_for_adoption?: boolean;
}
