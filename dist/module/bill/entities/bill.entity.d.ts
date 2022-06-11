import { Account } from 'src/module/account/entity/account.entity';
import { Product } from 'src/module/product/entities/products.entity';
export declare class bill {
    id: number;
    datebuy: string;
    account_id: number;
    product_id: number;
    product: Product;
    account: Account;
}
