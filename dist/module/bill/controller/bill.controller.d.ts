import { Account } from 'src/module/account/entity/account.entity';
import { createbillpayload } from 'src/module/product/payloads/create-bill.payload';
import { billservice } from '../services/bill.service';
export declare class billcontroller {
    private billservice;
    constructor(billservice: billservice);
    addbill(account: Account, body: createbillpayload): Promise<import("../entities/bill.entity").bill>;
    deletebill(id: number): Promise<import("typeorm").DeleteResult>;
    editbill(body: createbillpayload, id: number): Promise<import("typeorm").UpdateResult>;
    findall(id: number): Promise<import("../entities/bill.entity").bill[]>;
}
