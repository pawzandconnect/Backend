import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { RequestDecision } from '@common/typings';

export class SendConnectionRequestDto {
  @ApiProperty({
    description: 'ID value of who you want to connect to',
    example: 'id9903883jjssuusunh',
  })
  @IsNotEmpty()
  @IsString()
  receiver_id: string;
}

export class ReviewConnectionRequestDto {
  @ApiProperty({
    enum: RequestDecision,
    example: RequestDecision.accept,
    description: 'Choose whether to accept or reject request',
  })
  @IsNotEmpty()
  @IsEnum(RequestDecision)
  decision: RequestDecision;
  connection_req_id: string;
}
