import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models';
import { IUsersRepository } from './interfaces';
import { TypeOrmUsersRepository } from './repositories';
import { IHashing } from '../auth/external-services/hashing/hashing.interface';
import { ArgonHashing } from 'src/auth/external-services/hashing';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    {
      provide: IHashing,
      useClass: ArgonHashing,
    },
    {
      provide: IUsersRepository,
      useClass: TypeOrmUsersRepository,
    },
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
