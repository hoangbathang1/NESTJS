import { Account } from "src/entity/account.entity";
import { AccountService } from "src/services/account.service";
import { Request, Response } from "express";
export declare class AccountController {
    private AccountService;
    constructor(AccountService: AccountService);
    getAllAccount(): Promise<Account[]>;
    registerAccount(account: Account): Promise<import("typeorm").InsertResult>;
    login(account: Account, response: Response): Promise<void>;
    atuthenAccount(request: Request, response: Response): Promise<Account>;
}
