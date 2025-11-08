import { Injectable, Logger } from '@nestjs/common';
import { PrismaConfig } from '@configs';
import { GoogleSignInDto, RefreshAccessTokenDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ExceptionFactory, ExceptionHandler } from '@utils';
import { firstValueFrom, take } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AuthResponse, AuthTokenClaim, SignAuthTokenClaim } from '@common/typings';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name, { timestamp: true });
  constructor(
    private readonly prisma: PrismaConfig,
    private readonly jwtService: JwtService,
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  async googleSignIn(dto: GoogleSignInDto): Promise<AuthResponse> {
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

      const email = data.email.toLowerCase();
      const owner = await this.prisma.owner.findUnique({ where: { email } });

      // TODO: Send welcome email

      if (!owner) {
        const newOwner = await this.prisma.owner.create({
          data: {
            email,
            email_verified: data.email_verified,
          },
        });

        const claim = this.constructAuthTokenClaim({
          email: newOwner.email,
          sub: newOwner.id,
        });

        const tokens = await this.generateTokensFromAuthClaim(claim);
        return { ...tokens, email: newOwner.email, id: newOwner.id };
      } else {
        const claim = this.constructAuthTokenClaim({
          email: owner.email,
          sub: owner.id,
        });

        const tokens = await this.generateTokensFromAuthClaim(claim);
        return { ...tokens, email: owner.email, id: owner.id };
      }
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  async refreshAccessToken(dto: RefreshAccessTokenDto) {
    const { token } = dto;

    try {
      const decodedClaim = await this.jwtService.verify(token);

      const claim = this.constructAuthTokenClaim({
        email: decodedClaim.email,
        sub: decodedClaim.sub,
      });

      const owner = await this.getOwnerByEmail(decodedClaim.email);

      if (!owner) {
        throw ExceptionFactory.unauthorized('Invalid or expired refresh token provided');
      }

      return await this.generateTokensFromAuthClaim(claim);
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  private async generateTokensFromAuthClaim(claim) {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(claim),
      this.jwtService.signAsync(claim, {
        secret: this.config.get<string>('JWT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token, // Expires in 15 minutes
      refresh_token,
    };
  }

  private async getOwnerByEmail(email: string) {
    if (!email)
      throw ExceptionFactory.badRequest('Email is required to retrieve owner info by email');
    const trimmedEmail = email.trim();

    try {
      const owner = await this.prisma.owner.findUnique({ where: { email: trimmedEmail } });
      if (!owner) throw ExceptionFactory.notFound('Owner not found');
      return owner;
    } catch (e) {
      ExceptionHandler.handle(e);
    }
  }

  // TODO: Populate token claim further if needed
  private constructAuthTokenClaim(data: AuthTokenClaim): SignAuthTokenClaim {
    const { email, sub } = data;
    return {
      sub,
      email,
      aud: '',
      azp: '',
      iss: '',
    };
  }
}
