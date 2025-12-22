import { Global, Module } from '@nestjs/common';
import { FileEntity } from '@utils';
import { FileConfig, PrismaConfig } from '@configs';
import { S3Entity } from './utils/file/s3.file';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from './shared';

@Global()
@Module({
  providers: [PrismaConfig, S3Entity, FileConfig, JwtService, RedisService, FileEntity],
  exports: [PrismaConfig, FileEntity, JwtService, RedisService],
})
export class GlobalModule {}
