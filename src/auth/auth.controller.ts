import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAndRegisterSDI } from './dtos/Auth.dto';

@Controller('api/v1/auth')
@UsePipes(new ValidationPipe())
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Body() credential: LoginAndRegisterSDI) {
    return this.authService.login(credential);
  }

  @Post('register')
  register(@Body() credential: LoginAndRegisterSDI) {
    return this.authService.register(credential);
  }
}
