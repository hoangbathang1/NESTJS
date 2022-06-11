import { bill } from 'src/module/bill/entities/bill.entity';
export declare class Product {
    id: number;
    name: string;
    price: number;
    soluong: number;
    bills: bill[];
}
