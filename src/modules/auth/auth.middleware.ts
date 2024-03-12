import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { jwtConstants } from './constants/Auth.const';

@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: () => void) {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer' || !token) {
      res.status(401).json({ message: 'Token is missing' });
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService
        .verifyAsync(token, {
          secret: jwtConstants.secret,
        })
        .catch(() => {
          res.status(401).json({ message: 'Token expired' });
          throw new UnauthorizedException();
        });

      req['user'] = payload;
    } catch {
      res.status(401).json({ message: 'Invalid token' });
      throw new UnauthorizedException();
    }

    next();
  }
}
