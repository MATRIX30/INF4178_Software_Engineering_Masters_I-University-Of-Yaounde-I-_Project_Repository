import { Injectable } from '@nestjs/common';
import { IUsersRepository } from '../interfaces';
import { User } from '../models';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from '../dto/create.dto';

@Injectable()
export class TypeOrmUsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async findOneById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async create(user: CreateDto): Promise<User> {
    const createdUser = await this.repository.save(user);

    return createdUser;
  }
}
