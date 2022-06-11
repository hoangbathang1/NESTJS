import { Account } from "src/entity/account.entity";
import { InsertResult, Repository } from "typeorm";
import { JwtService } from '@nestjs/jwt';
export declare class AccountService {
    private AccountReponsitory;
    private jwtService;
    constructor(AccountReponsitory: Repository<Account>, jwtService: JwtService);
    getAllAccount(): Promise<Account[]>;
    registeraccount(account: Account): Promise<InsertResult>;
    validateAccount(account: Account): Promise<Account | null>;
    login(account: Account): string;
    auth(token: string): Promise<Account>;
}
