import { registerAs } from '@nestjs/config';
import { env } from './env';

export default registerAs('app', () => ({
  port: env.PORT,
  name: env.APP_NAME,
  description: env.APP_DESC,
  rateLimit: {
    ttl: env.RATE_LIMIT_TTL,
    limit: env.RATE_LIMIT_MAX,
  },
}));
