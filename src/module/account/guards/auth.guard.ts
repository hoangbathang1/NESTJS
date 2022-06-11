import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable()
export class authguard implements CanActivate {
  constructor(private readonly accountservice: AccountService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.cookies['token']) return false;
    const token = request.cookies['token'];
    const user = this.accountservice.auth(token);
    if (!user) {
      return false;
    }
    if (!request.user) request.user = user;
    if (!request.jwToken) request.jwToken = token;
    return true;
  }
}
