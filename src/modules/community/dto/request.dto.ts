import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { FileMeta } from '../../../common/typings';
import { VoteValue } from '@prisma/client';

export class CreateCommunityPostDto {
  @ApiProperty({
    description: 'Post Title',
    example: 'Reptile 101: Caring the safe way!',
  })
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty({
    description: 'Content of the post',
    example: "What're you up to?",
  })
  @IsNotEmpty()
  @IsString()
  content: string;
  @ApiPropertyOptional({
    description: 'An array of media items related to the pet',
    example: [
      { url: 'http://example.com/image1.jpg', mimetype: 'image/webp', size: 102400 },
      { url: 'http://example.com/video1.mp4', mimetype: 'video/mp4', size: 102400, duration: 5.0 },
    ],
    required: false,
  })
  @IsArray()
  media: Array<FileMeta>;
  @ApiPropertyOptional({
    description: 'Post Tags',
    example: ['Dogs', 'Playful', 'Care Tips'],
    required: false,
  })
  @IsArray()
  tags: string;
}

export class CommentOnCommunityPostDto {
  @ApiProperty({
    example: "What're you up to?",
    description: 'Content of the post',
  })
  @IsString()
  content: string;
  post_id: string;
}

export class VoteOnCommunityPostDto {
  @ApiProperty({
    enum: VoteValue,
    example: VoteValue.up,
    description: 'Vote decision',
  })
  @IsEnum(VoteValue)
  vote_value: VoteValue;
  post_id: string;
}
