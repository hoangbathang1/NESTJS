import {
  BadRequestException,
  Body,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Account } from 'src/module/account/entity/account.entity';
import { InsertResult, Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { async } from 'rxjs';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private AccountReponsitory: Repository<Account>,
    private jwtService: JwtService,
  ) {}
  getAllAccount(): Promise<Account[]> {
    return this.AccountReponsitory.find();
  }

  registeraccount(account: Account): Promise<InsertResult> {
    return this.AccountReponsitory.insert(account);
  }
  validateAccount(account: Account): Promise<Account | null> {
    return this.AccountReponsitory.findOne({
      where: {
        email: account.email,
        password: account.password,
      },
    });
  }

  findbyid(id: number) {
    return this.AccountReponsitory.findOne({
      where: {
        id,
      },
    });
  }
  login(account: Account) {
    return this.jwtService.sign({
      account,
    });
  }
  async auth(token: string): Promise<Account> {
    try {
      const data = await this.jwtService.verifyAsync(token);
      if (!data) {
        throw new BadRequestException('không tồn tại người dùng');
      }

      return data.account;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
