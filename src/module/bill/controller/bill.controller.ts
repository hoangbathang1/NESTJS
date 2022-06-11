import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { Current_User } from 'src/module/account/decorators/current-user.decorator';
import { Account } from 'src/module/account/entity/account.entity';
import { authguard } from 'src/module/account/guards/auth.guard';
import { createbillpayload } from 'src/module/product/payloads/create-bill.payload';
import { billservice } from '../services/bill.service';

@Controller()
export class billcontroller {
  constructor(private billservice: billservice) {}
  @UseGuards(authguard)
  @Post()
  async addbill(
    @Current_User() account: Account,
    @Body() body: createbillpayload,
  ) {
    return await this.billservice.add(body, account);
  }
  @Delete('/delete/:id')
  async deletebill(@Param('id') id: number) {
    return await this.billservice.delete(id);
  }

  @Put('/edit/:id')
  async editbill(@Body() body: createbillpayload, @Param('id') id: number) {
    return await this.billservice.update(body, id);
  }
  @Get('/get/:id')
  async findall(@Param('id') id: number) {
    return await this.billservice.findbyidaccount(id);
  }
}
