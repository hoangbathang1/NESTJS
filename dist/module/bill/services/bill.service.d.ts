import { Account } from 'src/module/account/entity/account.entity';
import { AccountService } from 'src/module/account/services/account.service';
import { createbillpayload } from 'src/module/product/payloads/create-bill.payload';
import { Productservice } from 'src/module/product/services/product.service';
import { Repository } from 'typeorm';
import { bill } from '../entities/bill.entity';
export declare class billservice {
    private billrepository;
    private accountservice;
    private productservice;
    constructor(billrepository: Repository<bill>, accountservice: AccountService, productservice: Productservice);
    add(Bill: createbillpayload, account: Account): Promise<bill>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    update(Bill: createbillpayload, id: number): Promise<import("typeorm").UpdateResult>;
    find(): Promise<bill[]>;
    findbyidaccount(id: number): Promise<bill[]>;
}
