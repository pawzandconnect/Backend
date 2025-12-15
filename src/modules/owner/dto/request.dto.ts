import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateOwnerProfileDto {
  @ApiProperty({
    example: 'Buddy James',
    description: 'The name of the pet owner',
    required: false,
  })
  @IsString()
  display_name: string;

  @ApiProperty({
    example: 'Golden Retriever',
    description: 'The breed of the pet',
  })
  @IsString()
  location: string;

  @ApiProperty({
    example: 'I own a dog.',
    description: 'A brief biography of the pet owner',
  })
  @IsString()
  bio: string;

  @ApiProperty({
    example: 'I own a dog.',
    description: 'A brief biography of the pet owner',
  })
  looking_for: string[];

  @ApiProperty({
    example: ['Park', 'Vet Clinic'],
    description: 'A brief biography of the pet owner',
  })
  preferred_locations: string[];

  @ApiProperty({
    example: '5',
    description: 'Distance owner is willing to travel in km (kilometers)',
  })
  travel_radius: number;

  // Retrieve these from geolocation API
  @ApiPropertyOptional({
    example: '22.12345',
    description: 'Longitude of the pet owner',
  })
  longitude: string;

  @ApiPropertyOptional({
    example: '37.12345',
    description: 'Latitude of the pet owner',
  })
  latitude: string;

  @ApiPropertyOptional({
    example: 'Enugu',
    description: 'City',
  })
  city: string;

  @ApiPropertyOptional({
    example: 'Enugu',
    description: 'State',
  })
  state: string;

  @ApiPropertyOptional({
    example: '192220',
    description: 'Zipcode',
  })
  zip_code: string;

  @ApiPropertyOptional({
    description: 'Country',
  })
  country: string;
}
