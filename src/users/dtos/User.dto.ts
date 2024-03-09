import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class SearchUsersSDI {
  @IsOptional()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  username: string;
}

export class SearchUsersSDO {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsBoolean()
  status: string;

  @IsString()
  role: string;
}

export class SelfUserSDO {
  @IsString()
  id: string;

  @IsString()
  username: string;

  @IsString()
  role: string;
}

export class CreateUserSDI {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class LoginUserSDI {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export class UpdateUserSDI {
  @IsBoolean()
  status: boolean;

  @IsString()
  role: string;
}

export class UpdateUserPasswordSDI {
  @IsString()
  oldPassword: string;

  @IsString()
  newPassword: string;
}
