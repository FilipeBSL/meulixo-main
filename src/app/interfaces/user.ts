export interface User {
  email: string;
  senha: string;
  profile: 'ADMINISTRATOR' | 'COMMON';
}
