import { Account } from 'src/module/account/entity/account.entity';
import { Product } from 'src/module/product/entities/products.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class bill {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  datebuy: string;
  @Column()
  account_id: number;
  @Column()
  product_id: number;
  @ManyToOne(() => Product, (product) => product.bills)
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @ManyToOne(() => Account, (account) => account.bills)
  @JoinColumn({
    name: 'account_id',
  })
  account!: Account;
}
