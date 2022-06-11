import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from '../entities/products.entity';
import { Productservice } from '../services/product.service';
interface Iid {
  id: number;
}
@Controller()
export class ProductController {
  constructor(private productservice: Productservice) {}
  @Get()
  showproduct(): Promise<Product[]> {
    return this.productservice.showproduct();
  }
  @Post('/add')
  addproduct(@Body() product: Product) {
    return this.productservice.addproduct(product);
  }
  @Post('/delete')
  deleteproduct(@Body() id: Iid) {
    return this.productservice.deleteproduct(id);
  }
  @Post('/edit')
  editproduct(@Body() product: Product) {
    return this.productservice.editproduct(product);
  }
}
