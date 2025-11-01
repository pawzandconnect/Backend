import { Injectable } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import * as ffmpeg from 'fluent-ffmpeg';
import { Readable } from 'stream';
import { ExceptionFactory, FileEntity } from '@utils';
import { FileMeta } from '@common/typings';

@Injectable()
export class FileService {
  constructor(
    private readonly fileEntity: FileEntity,
    private readonly prisma: PrismaConfig,
  ) {}

  async upload(file: Express.Multer.File, user?) {
    try {
      this.validateFileType(file.mimetype);
      const isVideoFile = this.isVideo(file.mimetype);
      const uploadResult = await this.fileEntity.fileUpload(file);
      const persitFilePayload = {
        key: uploadResult.Key,
        type: file.mimetype,
        url: uploadResult.Location,
        ...(user && { userId: user.id }),
      };
      // Persit file record
      await this.saveFileRecord(persitFilePayload);

      const data: FileMeta = {
        url: uploadResult.Location,
        mimeType: file.mimetype,
        size: file.size,
        ...(isVideoFile && { duration: await this.getVideoDuration(file.buffer) }),
      };

      return {
        message: 'File uploaded',
        data,
      };
    } catch (e) {
      throw e;
    }
  }

  async multiUploads(files: Express.Multer.File[], user?) {
    try {
      const mapUploadResult = await Promise.all(
        files.map(async (file) => {
          this.validateFileType(file.mimetype);
          const isVideoFile = this.isVideo(file.mimetype);
          const uploadResult = await this.fileEntity.fileUpload(file);
          const persitFilePayload = {
            key: uploadResult.key,
            type: file.mimetype,
            url: uploadResult.Location,
            ...(user && { userId: user.id }),
          };
          // Persit file record
          await this.saveFileRecord(persitFilePayload);

          const data: FileMeta = {
            url: uploadResult.Location,
            mimeType: file.mimetype,
            size: file.size,
            ...(isVideoFile && { duration: await this.getVideoDuration(file.buffer) }),
          };

          return data;
        }),
      );

      return { message: 'Files uploaded', data: mapUploadResult };
    } catch (e) {
      throw e;
    }
  }

  private async saveFileRecord(data: {
    key: string;
    extension?: string;
    type?: string;
    userId?: string;
  }) {
    try {
      const fileRecord = await this.prisma.file.create({
        data: {
          key: data.key,
          ...(data?.extension && { extension: data.extension }),
          ...(data?.type && { type: data.type }),
          ...(data?.userId && { userId: data.userId }),
        },
      });
      return fileRecord;
    } catch (e) {
      throw e;
    }
  }

  private validateFileType(mimetype: string) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'video/mp4'];
    if (!allowedTypes.includes(mimetype)) {
      throw ExceptionFactory.badRequest('Invalid file type');
    }
  }

  private async getVideoDuration(fileBuffer: Buffer): Promise<number> {
    return new Promise((resolve, reject) => {
      const stream = Readable.from(fileBuffer);
      ffmpeg(stream).ffprobe((err, metadata) => {
        if (err) {
          return reject(err);
        }
        const duration = metadata.format.duration; // In seconds
        resolve(duration);
      });
    });
  }

  private isVideo(mimetype: string): boolean {
    return mimetype === 'video/mp4';
  }
}
