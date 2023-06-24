import { Injectable } from '@nestjs/common';
import { IUsersRepository } from './interfaces';
import { UserNotFoundException } from './exceptions';
import { IHashing } from '../auth/external-services/hashing/hashing.interface';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly repository: IUsersRepository,
    private readonly hashing: IHashing,
  ) {}

  async findOneById(id: string) {
    const user = await this.repository.findOneById(id);

    if (!user) throw new UserNotFoundException();

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.repository.findOneByEmail(email);

    if (!user) throw new UserNotFoundException();

    return user;
  }

  async create(dto: CreateDto) {
    const hash = await this.hashing.hash(dto.password);

    const user = await this.repository.create({
      ...dto,
      hash,
    });

    return user;
  }

  async createUserIfNotExists(dto: CreateDto) {
    const userExists = await this.repository.findOneByEmail(dto.email);

    if (userExists) return;

    await this.create(dto);
  }
}
