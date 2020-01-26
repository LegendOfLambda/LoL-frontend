export interface RegisterInfo {
  user: RegisterState;
}

export interface RegisterState {
  username: string;
  email: string;
  password1: string;
  password2: string;
}
