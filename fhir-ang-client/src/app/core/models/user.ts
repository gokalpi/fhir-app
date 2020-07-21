import { Role } from '../enums';

export class User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Role;
  token?: string;
  refreshTokens: string[];
}
