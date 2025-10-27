import { Injectable, Logger } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { GoogleSignInDto, RefreshAccessTokenDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ExceptionFactory, ExceptionHandler } from '@utils';
import { firstValueFrom, take } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name, { timestamp: true });
  constructor(
    private readonly prisma: PrismaConfig,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async googleSignIn(dto: GoogleSignInDto) {
    const { token } = dto;

    if (!token || token.trim() === '') {
      throw ExceptionFactory.badRequest('Google auth token is required');
    }

    const config = {
      params: {
        id_token: token,
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      const { data, status } = await firstValueFrom(
        this.httpService.get('https://oauth2.googleapis.com/tokeninfo', config).pipe(take(1)),
      );

      if (status !== 200) {
        throw ExceptionFactory.unauthorized('Google token validation failed');
      }

      let user;

      if (!user) {
        // Create user and generate tokens
      } else {
        // Generate tokens
      }
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async refreshAccessToken(dto: RefreshAccessTokenDto) {
    const { token } = dto;

    try {
      const decodedClaim = await this.jwtService.verify(token);

      // Get user from database
      let user, claim;

      // if (!user || !user.isActive) {
      //   throw ExceptionFactory.unauthorized('Invalid refresh token');
      // }

      return this.generateTokensFromAuthClaim(claim);
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  // TODO: Type claim interface {sub, iss, aud} e.t.c
  // TODO: Refactor
  private async generateTokensFromAuthClaim(claim) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(claim),
      this.jwtService.signAsync(claim, {
        secret: this.config.get<string>('JWT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      accessToken, // Expires in 15 minutes
      refreshToken,
    };
  }
}
