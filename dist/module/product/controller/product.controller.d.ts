import { Product } from '../entities/products.entity';
import { Productservice } from '../services/product.service';
interface Iid {
    id: number;
}
export declare class ProductController {
    private productservice;
    constructor(productservice: Productservice);
    showproduct(): Promise<Product[]>;
    addproduct(product: Product): Promise<import("typeorm").InsertResult>;
    deleteproduct(id: Iid): Promise<import("typeorm").DeleteResult>;
    editproduct(product: Product): Promise<import("typeorm").UpdateResult>;
}
export {};
