import { Injectable, Logger } from '@nestjs/common';
import { PrismaConfig } from '../../configs';
import { ExceptionHandler } from '../../utils';

@Injectable()
export class FeedService {
  private readonly logger = new Logger(FeedService.name, { timestamp: true });
  constructor(private readonly prisma: PrismaConfig) {}

  async feed() {
    // Apply user perferences to filter to the best possible result with relevance
    // Apply right algo flow
    // Cache data properly
    try {
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }
}
