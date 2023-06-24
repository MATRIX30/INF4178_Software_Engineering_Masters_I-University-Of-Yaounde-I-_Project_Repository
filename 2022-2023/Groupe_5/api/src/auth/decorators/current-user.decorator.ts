import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { UserSession } from '../types';

export const CurrentUser = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    const session = request.session as UserSession;

    console.log({ user: session.user });

    return data ? session.user[data] : session.user;
  },
);
