import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@db/client';

@Injectable()
export class PrismaConfig extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }
  async onModuleInit() {
    await this.$connect();
  }
}
