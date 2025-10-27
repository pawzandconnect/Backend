import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    HttpModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get('JWT_EXPIRY'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    // { provide: APP_GUARD, useClass: AuthGuard}
  ],
  controllers: [AuthController],
})
export class AuthModule {}
