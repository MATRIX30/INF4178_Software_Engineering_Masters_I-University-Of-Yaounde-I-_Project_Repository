import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { ArgonHashing, IHashing } from './external-services/hashing';
import { APP_GUARD } from '@nestjs/core';
import { SessionGuard } from './guards';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: IHashing,
      useClass: ArgonHashing,
    },
    {
      provide: APP_GUARD,
      useClass: SessionGuard,
    },
  ],
})
export class AuthModule {}
