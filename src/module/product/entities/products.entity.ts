import { bill } from 'src/module/bill/entities/bill.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;
  @Column()
  price: number;
  @Column()
  soluong: number;

  @OneToMany(() => bill, (bill) => bill.product, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'product_id' })
  // userRoles!: UserRole[];
  bills!: bill[];
}
