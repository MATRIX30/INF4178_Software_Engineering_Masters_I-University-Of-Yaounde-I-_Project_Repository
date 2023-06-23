import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalsModule } from './hospitals/hospitals.module';
import { HospitalTypesModule } from './hospital-types/hospital-types.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisClientOptions } from 'redis';
import { AhpModule } from './ahp/ahp.module';
import * as redisStore from 'cache-manager-redis-store';
import { EfficiencyTypesModule } from './efficiences/efficiences.module';
// for uploading file globally
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync<RedisClientOptions>({
      isGlobal: true,

      useFactory: (configService: ConfigService): any => {
        return {
          store: redisStore,
          url: configService.getOrThrow('REDIS_URL'),
        };
      },

      imports: [ConfigModule],
      inject: [ConfigService],
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'quick-care',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: false,
    }),
    MulterModule.register({
      dest: './images',
    }),
    HospitalsModule,
    HospitalTypesModule,
    AuthModule,
    UsersModule,
    EfficiencyTypesModule,
    AhpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
