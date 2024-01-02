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

export interface UserInfoResponse {
  code: number;
  message: string;
  data: {
    name: string;
    studentId: string;
    term: string;
  };
}
