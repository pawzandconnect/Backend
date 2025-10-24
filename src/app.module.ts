import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './global.module';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import appConfigs from './configs/app.configs';
import redisConfig from './configs/redis.config';
import { RedisModule } from '@shared';
import { FileModule } from './modules/file/file.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import smtpConfig from './configs/smtp.config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfigs, redisConfig, smtpConfig],
      ignoreEnvFile: true,
    }),
    GlobalModule,
    EventEmitterModule.forRoot(),
    MailerModule.forRootAsync({
      inject: [smtpConfig.KEY],
      useFactory: (config: ConfigType<typeof smtpConfig>) => ({
        transport: config.url,
        defaults: {
          from: `"${config.label}" <${config.from}>`,
        },
        template: {
          dir: path.join(__dirname, 'shared', 'mail', 'templates'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
            partials: {
              dir: path.join(__dirname, 'shared', 'mail', 'templates', 'partials'),
            },
          },
        },
        preview: false,
      }),
    }),
    RedisModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
