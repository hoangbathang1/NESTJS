import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AccountController } from 'src/module/account/controller/account.controller';

import { DatabaseModule } from 'src/database/database.module';

import { billprovider } from 'src/providers/billprovider';
import { billcontroller } from './controller/bill.controller';
import { billservice } from './services/bill.service';
import { AccountService } from '../account/services/account.service';
import { Productservice } from '../product/services/product.service';
import { AccountProvider } from 'src/providers/account.provider';
import { ProductProvider } from 'src/providers/product.provider';

@Module({
  imports: [
    DatabaseModule,
    RouterModule.register([
      {
        path: 'bill',
        module: BillModule,
      },
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [billcontroller],
  providers: [
    ...billprovider,
    billservice,
    ...AccountProvider,
    AccountService,
    ...ProductProvider,
    Productservice,
  ],
})
export class BillModule {}
