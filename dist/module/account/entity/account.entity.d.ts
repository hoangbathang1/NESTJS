import { bill } from 'src/module/bill/entities/bill.entity';
export declare class Account {
    id: number;
    email: string;
    fullname: string;
    password: string;
    bills: bill[];
}
