import { IsString } from 'class-validator';

export class LoginAndRegisterSDI {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class TokenPayloadSDO {
  @IsString()
  username: string;

  @IsString()
  role: string;
}
