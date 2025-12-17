import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RequestDecision } from '@common/typings';

export class SendFriendRequestDto {
  @ApiProperty({
    description: 'ID value of who you want to become friends with to',
    example: 'id9903883jjssuusunh',
  })
  @IsNotEmpty()
  @IsString()
  receiver_id: string;
}

export class ReviewFriendRequestDto {
  @ApiProperty({
    enum: RequestDecision,
    example: RequestDecision.accept,
    description: 'Choose whether to accept or reject request',
  })
  @IsNotEmpty()
  @IsEnum(RequestDecision)
  decision: RequestDecision;

  friend_req_id: string;
}
