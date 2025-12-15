import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FileMeta } from '@common/typings';
import { IsEnum, IsString } from 'class-validator';
import { ReactionType } from '@prisma/client';

export class CreatePostDto {
  @ApiProperty({
    example: "What're you up to?",
    description: 'Content of the post',
  })
  @IsString()
  content: string;
  @ApiPropertyOptional({
    example: [
      { url: 'http://example.com/image1.jpg', mimetype: 'image/webp', size: 102400 },
      { url: 'http://example.com/video1.mp4', mimetype: 'video/mp4', size: 102400, duration: 5.0 },
    ],
    description: 'An array of media items related to the pet',
    required: false,
  })
  media: Array<FileMeta>;
}

export class CommentOnPostDto {
  @ApiProperty({
    example: "What're you up to?",
    description: 'Content of the post',
  })
  @IsString()
  content: string;
  post_id: string;
}

export class ReplyCommentDto {
  @ApiProperty({
    example: "What're you up to?",
    description: 'Content of the post',
  })
  @IsString()
  content: string;
  comment_id: string;
}

export class ReactToPostDto {
  @ApiProperty({
    enum: ReactionType,
    example: ReactionType.fire,
  })
  @IsEnum(ReactionType)
  type: ReactionType;
  post_id: string;
}

export class ReactToCommentDto {
  @ApiProperty({
    enum: ReactionType,
    example: ReactionType.fire,
  })
  @IsEnum(ReactionType)
  type: ReactionType;
  comment_id?: string;
  comment_reply_id?: string;
}

export class LikePostDto {
  post_id: string;
}

export class LikeCommentDto {
  comment_id: string;
}

export class LikeCommentReplyDto {
  comment_reply_id: string;
}
