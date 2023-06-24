import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/decorators';
import { UserSessionData } from 'src/auth/types';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  async findMe(@CurrentUser() user: UserSessionData) {
    const me = await this.userService.findOneByEmail(user.email);

    delete me.hash;

    return me;
  }
}
