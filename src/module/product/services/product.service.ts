import { Inject, Injectable } from '@nestjs/common';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities/products.entity';
interface Iid {
  id: number;
}
@Injectable()
export class Productservice {
  constructor(
    @Inject('PRODUCT_REPONSITORY')
    private productreponsive: Repository<Product>,
  ) {}
  addproduct(product: Product): Promise<InsertResult> {
    return this.productreponsive.insert(product);
  }
  editproduct(product: Product): Promise<UpdateResult> {
    return this.productreponsive.update(product.id, product);
  }
  deleteproduct(id: Iid) {
    return this.productreponsive.delete({
      id: id.id,
    });
  }
  showproduct(): Promise<Product[]> {
    return this.productreponsive.find();
  }
  findbyid(id: number) {
    return this.productreponsive.findOne({
      where: {
        id,
      },
    });
  }
}
