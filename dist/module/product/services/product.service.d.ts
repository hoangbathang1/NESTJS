import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities/products.entity';
interface Iid {
    id: number;
}
export declare class Productservice {
    private productreponsive;
    constructor(productreponsive: Repository<Product>);
    addproduct(product: Product): Promise<InsertResult>;
    editproduct(product: Product): Promise<UpdateResult>;
    deleteproduct(id: Iid): Promise<import("typeorm").DeleteResult>;
    showproduct(): Promise<Product[]>;
    findbyid(id: number): Promise<Product>;
}
export {};
