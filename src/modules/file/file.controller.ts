import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileService } from './file.service';

@Controller('files')
@ApiTags('Files')
export class FileController {
  constructor(private file: FileService) {}

  @Post('/upload')
  @ApiOperation({ summary: 'File upload' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
      required: ['file'],
    },
  })
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.file.upload(file);
  }

  @Post('multi-uploads')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
      required: ['files'],
    },
  })
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.file.multiUploads(files);
  }
}
