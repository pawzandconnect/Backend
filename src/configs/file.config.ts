import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3, S3ClientConfigType } from '@aws-sdk/client-s3';

@Injectable()
export class FileConfig implements OnModuleInit {
  private fileClient: S3ClientConfigType;
  private provider: string;
  private bucket: string;

  constructor(private config: ConfigService) {}

  onModuleInit() {
    this.setFileProviderConfig();
  }

  private setFileProviderConfig() {
    this.provider = this.config.get<string>('FILE_UPLOAD_PROVIDER');

    switch (this.provider) {
      case 'aws-s3':
        this.fileClient = new S3({
          credentials: {
            accessKeyId: this.config.get<string>('AWS_ACCESS_KEY'),
            secretAccessKey: this.config.get<string>('AWS_SECRET_KEY'),
          },
          forcePathStyle: false,
          region: this.config.get<string>('AWS_S3_REGION'),
        });
        this.bucket = this.config.get<string>('AWS_S3_BUCKET');
        break;

      case 'gcp':
        // Initialize GCP file client here
        break;

      case 'cloudinary':
        // Initialize Cloudinary file client here
        break;

      default:
        throw new Error('Invalid bucket provider');
    }
  }

  getFileClient() {
    return this.fileClient;
  }

  getProvider() {
    return this.provider;
  }

  getBucket() {
    return this.bucket;
  }
}
