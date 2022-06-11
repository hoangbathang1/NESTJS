import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Account } from 'src/module/account/entity/account.entity';
import * as bcrypt from 'bcrypt';

import { AccountService } from 'src/module/account/services/account.service';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { authguard } from '../guards/auth.guard';

@ApiTags('auth')
@Controller()
export class AccountController {
  constructor(private AccountService: AccountService) {}
  @UseGuards(authguard)
  @Get()
  getAllAccount(): Promise<Account[]> {
    return this.AccountService.getAllAccount();
  }

  @Post('/register')
  async registerAccount(@Body() account: Account) {
    const password = await bcrypt.hashSync(account.password, 12);
    account.password = password;
    return this.AccountService.registeraccount(account);
  }

  @Post('/login')
  async login(
    @Body() account: Account,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.AccountService.validateAccount(account);

    if (!user) {
      throw new BadRequestException('không tồn tại người dùng');
    }

    if (user) {
      const jwt = await this.AccountService.login(user);
      response.cookie('token', jwt);
      response.json({
        access_token: jwt,
      });
    }
  }
}
