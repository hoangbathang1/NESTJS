import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Account } from 'src/module/account/entity/account.entity';
import { AccountService } from 'src/module/account/services/account.service';
import { createbillpayload } from 'src/module/product/payloads/create-bill.payload';
import { Productservice } from 'src/module/product/services/product.service';
import { Repository } from 'typeorm';
import { bill } from '../entities/bill.entity';

@Injectable()
export class billservice {
  constructor(
    @Inject('BILL_REPONSITORY') private billrepository: Repository<bill>,
    private accountservice: AccountService,
    private productservice: Productservice,
  ) {}
  async add(Bill: createbillpayload, account: Account) {
    try {
      const product = await this.productservice.findbyid(Bill.product_id);
      if (account && product) {
        const newbill = new bill();
        newbill.product = product;
        newbill.account = account;
        newbill.datebuy = Bill.datebuy;
        return this.billrepository.save(newbill);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async delete(id: number) {
    return await this.billrepository.delete({
      id,
    });
  }

  async update(Bill: createbillpayload, id: number) {
    try {
      const account = await this.accountservice.findbyid(Bill.account_id);
      const product = await this.productservice.findbyid(Bill.product_id);
      if (account && product) {
        const newbill = new bill();
        newbill.product = product;
        newbill.account = account;
        newbill.datebuy = Bill.datebuy;
        return await this.billrepository.update(id, newbill);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async find() {
    return await this.billrepository.find();
  }
  async findbyidaccount(id: number) {
    return await this.billrepository.find({
      relations: {
        account: true,
      },
      where: {
        account: {
          id,
        },
      },
    });
  }
}
