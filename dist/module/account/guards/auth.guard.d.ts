import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AccountService } from '../services/account.service';
export declare class authguard implements CanActivate {
    private readonly accountservice;
    constructor(accountservice: AccountService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
