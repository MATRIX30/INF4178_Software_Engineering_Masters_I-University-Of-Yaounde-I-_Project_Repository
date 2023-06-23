import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto';
import { UsersService } from 'src/users/users.service';
import { IHashing } from './external-services/hashing';
import { InvalidCredentialsException } from './exceptions';
import { UserSessionData } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly hashing: IHashing,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userService.findOneByEmail(dto.email);

    const passwordIsCorrect = await this.hashing.compare(
      user.hash,
      dto.password,
    );

    if (!passwordIsCorrect) throw new InvalidCredentialsException();

    const userSessionData: UserSessionData = {
      id: user.id,
      email: user.email,
    };

    return { userSessionData: userSessionData, user: user };
  }
}
