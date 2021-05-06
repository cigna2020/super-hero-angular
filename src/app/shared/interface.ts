export interface User {
  name?: string;
  returnSecureToken?: boolean;
  email: string;
  password: string;
}

export interface AuthResponse {
  idToken: string;
  expiresIn: string;
}
