import { Provider } from '@nestjs/common';

import { Product } from 'src/module/product/entities/products.entity';
import { Connection } from 'typeorm';

export const ProductProvider: Provider[] = [
  {
    provide: 'PRODUCT_REPONSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['DATABASE_CONNECTION'],
  },
];
