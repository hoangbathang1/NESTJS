import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AccountController } from 'src/module/account/controller/account.controller';

import { DatabaseModule } from 'src/database/database.module';
import { AccountProvider } from 'src/providers/account.provider';
import { AccountService } from 'src/module/account/services/account.service';
import { ProductProvider } from 'src/providers/product.provider';
import { Productservice } from './services/product.service';
import { ProductController } from './controller/product.controller';

@Module({
  imports: [
    DatabaseModule,
    RouterModule.register([
      {
        path: 'product',
        module: ProductModule,
      },
    ]),
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [ProductController],
  providers: [...ProductProvider, Productservice],
})
export class ProductModule {}
