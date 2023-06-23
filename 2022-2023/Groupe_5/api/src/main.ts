import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as session from 'express-session';
import { createClient } from 'redis';
import * as connectRedis from 'connect-redis';

import { ConfigService } from '@nestjs/config';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const logger = new Logger();

  app.enableCors({ origin: 'http://localhost:5173', credentials: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const RedisStore = connectRedis(session);
  const redisClient = createClient({
    url: configService.get('REDIS_URL'),
    legacyMode: true,
  });

  app.use(
    session({
      secret: '12345',
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({
        client: redisClient,
      }),
    }),
  );

  await redisClient
    .connect()
    .then(() => logger.debug('redis connected.'))
    .catch((err) => {
      logger.error('REDIS', err.message);

      throw err;
    });

  const config = new DocumentBuilder()
    .setTitle('Quick-care API')
    .setDescription('The care API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Get user repository
  const userService = app.get(UsersService);

  await app.listen(3333, async () => {
    await userService.createUserIfNotExists({
      email: 'dilane3@gmail.com',
      name: 'Dilane Kombou',
      password: '123456',
      avatar: 'https://avatars.githubusercontent.com/u/47280579?v=4',
    });

    // Log the creation user message
    logger.debug('User created');
  });
}
bootstrap();
