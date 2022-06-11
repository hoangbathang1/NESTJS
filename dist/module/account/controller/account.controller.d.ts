import { Account } from 'src/module/account/entity/account.entity';
import { AccountService } from 'src/module/account/services/account.service';
import { Response } from 'express';
export declare class AccountController {
    private AccountService;
    constructor(AccountService: AccountService);
    getAllAccount(): Promise<Account[]>;
    registerAccount(account: Account): Promise<import("typeorm").InsertResult>;
    login(account: Account, response: Response): Promise<void>;
}
