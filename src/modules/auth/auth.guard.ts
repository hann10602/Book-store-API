import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { TokenPayloadSDO } from './dtos/Auth.dto';

type RequestProps = {
  user: TokenPayloadSDO;
};

@Injectable()
export class CheckRoleGuard implements CanActivate {
  constructor(private readonly requiredRoles: string[]) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { user }: RequestProps = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    if (!user) {
      res.redirect('/login');
      return false;
    }

    const userRole = user.role || undefined;

    const hasRequiredRole = this.requiredRoles.some(
      (role) => userRole === role,
    );

    if (!hasRequiredRole) {
      res.status(403).json({ message: 'You are not permitted' });
    }

    return hasRequiredRole;
  }
}
