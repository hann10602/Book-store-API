import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginAndRegisterSDI, TokenPayloadSDO } from './dtos/Auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authDto: LoginAndRegisterSDI): Promise<{ access_token: string }> {
    const loginUser = await this.userService.getOneByUsername(authDto.username);

    if (!loginUser) throw new UnauthorizedException();

    const isPasswordMatched = await compare(
      authDto.password,
      loginUser.password,
    );

    if (!isPasswordMatched) throw new UnauthorizedException('Wrong password');

    const payload: TokenPayloadSDO = {
      username: authDto.username,
    };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async register(authDto: LoginAndRegisterSDI) {
    await this.userService.createUser({
      username: authDto.username,
      password: authDto.password,
    });

    return 'Success';
  }
}
