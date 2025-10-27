import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GoogleSignInDto {
  @ApiProperty({ description: 'Google access token', example: 'eyj....' })
  @IsNotEmpty()
  @IsString()
  token: string;
}

export class RefreshAccessTokenDto {
  @ApiProperty({ description: 'Refresh token', example: 'eyj....' })
  @IsNotEmpty()
  @IsString()
  token: string;
}
