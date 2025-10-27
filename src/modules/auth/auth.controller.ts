import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GoogleSignInDto, RefreshAccessTokenDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google')
  @ApiOperation({ summary: 'Google OAuth login' })
  async handleGoogleSignon(@Body() dto: GoogleSignInDto) {
    return this.authService.googleSignIn(dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh access token' })
  async handleTokenRefresh(@Body() dto: RefreshAccessTokenDto) {
    return this.authService.refreshAccessToken(dto);
  }
}
