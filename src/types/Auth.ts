export interface AuthResponse {
  code: number;
  message: string;
  data: {
    accessToken: {
      token: string;
      expiredIn: number;
    };
    refreshToken: {
      token: string;
      expiredIn: number;
    };
  };
}
