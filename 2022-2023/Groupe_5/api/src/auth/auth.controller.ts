import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Session,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { UserSession, UserSessionData } from './types';
import { PublicRoute } from './decorators';
import { User } from 'src/users/models';

const AUTH = 'auth';
@Controller(AUTH)
@ApiTags(AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @PublicRoute()
  async login(@Session() session: UserSession, @Body() dto: LoginDto) {
    const {
      userSessionData: userSession,
      user,
    }: {
      userSessionData: UserSessionData;
      user: User;
    } = await this.authService.login(dto);

    this.serializeSession(session, userSession);

    return user;
  }

  private serializeSession(
    session: UserSession,
    userSessionData: UserSessionData,
  ) {
    session.user = {
      id: userSessionData.id,
      email: userSessionData.email,
    };
  }
}
