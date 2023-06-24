import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserSession } from '../types';
import { IS_PUBLIC_ROUTE } from '../decorators';
import { Request } from 'express';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublicRoute = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_ROUTE,
      [context.getClass(), context.getHandler()],
    );

    if (isPublicRoute) return true;

    const request = context.switchToHttp().getRequest<Request>() as Request;

    const session = request.session as UserSession;

    console.log({ user: session.user });

    if (!session.user) throw new UnauthorizedException('Session not provided.');

    return true;
  }
}
