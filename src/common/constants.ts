export enum PlatformEvents {
  send_email = 'email.send',
}

// File constraint
// Photos : 5MB each, max 5 photos
// Video: 20MB max
const MAX_PHOTOS = 5;
const MAX_SIZE_MB = 5 * 1024 * 1024; // 5MB in bytes
const MAX_VIDEO_SIZE_MB = 20 * 1024 * 1024; // 20MB in bytes
export { MAX_PHOTOS, MAX_SIZE_MB, MAX_VIDEO_SIZE_MB };
