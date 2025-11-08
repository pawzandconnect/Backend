export interface AuthTokenClaim {
  sub: string;
  email: string;
}

export interface SignAuthTokenClaim extends AuthTokenClaim {
  iss: string;
  azp: string;
  aud: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  id: string;
  email: string;
}
