import { FileMeta } from '@common/typings';
import { PetMediaType } from '@prisma/client';
import { ExceptionFactory } from './exception.util';
import {
  MAX_ALLOWED_VIDEOS,
  MAX_PHOTO_SIZE_MB,
  MAX_PHOTOS,
  MAX_VIDEO_SIZE_MB,
} from '@common/constants';

export class Helpers {
  // NOTE: To future dev, this validate the media based on a specific file type.
  static deepValidateMedia(media: FileMeta[], mediaType: PetMediaType) {
    if (media.length === 0) {
      throw ExceptionFactory.badRequest('At least one media file is required.');
    }

    if (mediaType === PetMediaType.image) {
      // Check all files are images
      const invalidFiles = media.filter((item) => !item.mimeType.startsWith('image/'));
      if (invalidFiles.length > 0) {
        throw ExceptionFactory.badRequest('All media files must be images.');
      }

      // Check photo count
      if (media.length > MAX_PHOTOS) {
        throw ExceptionFactory.badRequest(`Cannot upload more than ${MAX_PHOTOS} photos.`);
      }

      // Check photo sizes (convert MB to bytes)
      const maxPhotoBytes = MAX_PHOTO_SIZE_MB * 1024 * 1024;
      const oversizedPhotos = media.filter((item) => item.size > maxPhotoBytes);
      if (oversizedPhotos.length > 0) {
        throw ExceptionFactory.badRequest(
          `Each photo must be less than ${MAX_PHOTO_SIZE_MB}MB in size.`,
        );
      }
    } else if (mediaType === PetMediaType.video) {
      // Check all files are videos
      const invalidFiles = media.filter((item) => !item.mimeType.startsWith('video/'));
      if (invalidFiles.length > 0) {
        throw ExceptionFactory.badRequest('All media files must be videos.');
      }

      // Check video count
      if (media.length > MAX_ALLOWED_VIDEOS) {
        throw ExceptionFactory.badRequest(`Only ${MAX_ALLOWED_VIDEOS} video(s) can be uploaded.`);
      }

      // Check video sizes (convert MB to bytes)
      const maxVideoBytes = MAX_VIDEO_SIZE_MB * 1024 * 1024;
      const oversizedVideos = media.filter((video) => video.size > maxVideoBytes);
      if (oversizedVideos.length > 0) {
        throw ExceptionFactory.badRequest(`Video size cannot exceed ${MAX_VIDEO_SIZE_MB}MB.`);
      }
    } else {
      throw ExceptionFactory.badRequest('Invalid media type.');
    }
  }

  // NOTE: TO future dev, this auto detect file type and validate media
  static basicValidateMedia(media: FileMeta[]) {
    if (media.length === 0) {
      throw ExceptionFactory.badRequest('At least one photo/video is required to upload media.');
    }

    const videos = media.filter((item) => item.mimeType.startsWith('video/'));
    const photos = media.filter((item) => item.mimeType.startsWith('image/'));

    // Check for mixed media
    if (videos.length > 0 && photos.length > 0) {
      throw ExceptionFactory.badRequest('Cannot upload photos and videos together.');
    }

    if (videos.length > 0) {
      if (videos.length > MAX_ALLOWED_VIDEOS) {
        throw ExceptionFactory.badRequest(`Only ${MAX_ALLOWED_VIDEOS} video(s) can be uploaded.`);
      }

      // Check each video size (convert MB to bytes for comparison)
      const maxVideoBytes = MAX_VIDEO_SIZE_MB * 1024 * 1024;
      const oversizedVideos = videos.filter((video) => video.size > maxVideoBytes);

      if (oversizedVideos.length > 0) {
        throw ExceptionFactory.badRequest(`Video size cannot exceed ${MAX_VIDEO_SIZE_MB}MB.`);
      }
    } else if (photos.length > 0) {
      if (photos.length > MAX_PHOTOS) {
        throw ExceptionFactory.badRequest(`Cannot upload more than ${MAX_PHOTOS} photos.`);
      }

      // Check each photo size (convert MB to bytes for comparison)
      const maxPhotoBytes = MAX_PHOTO_SIZE_MB * 1024 * 1024;
      const oversizedPhotos = photos.filter((photo) => photo.size > maxPhotoBytes);

      if (oversizedPhotos.length > 0) {
        throw ExceptionFactory.badRequest(
          `Each photo must be less than ${MAX_PHOTO_SIZE_MB}MB in size.`,
        );
      }
    } else {
      throw ExceptionFactory.badRequest('Unsupported media type.');
    }
  }
}
