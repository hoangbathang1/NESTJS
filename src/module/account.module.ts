import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AccountController } from 'src/module/account/controller/account.controller';

import { DatabaseModule } from 'src/database/database.module';
import { AccountProvider } from 'src/providers/account.provider';
import { AccountService } from 'src/module/account/services/account.service';

@Module({
  imports: [
    DatabaseModule,
    RouterModule.register([
      {
        path: 'account',
        module: AccountModule,
      },
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AccountController],
  providers: [...AccountProvider, AccountService],
})
export class AccountModule {}
