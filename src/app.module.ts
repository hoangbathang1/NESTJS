import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './module/account.module';
import { BillModule } from './module/bill/bill.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [AccountModule, ProductModule, BillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
