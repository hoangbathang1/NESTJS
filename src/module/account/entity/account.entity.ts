import { bill } from 'src/module/bill/entities/bill.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  fullname: string;
  @Column()
  password: string;
  @OneToMany(() => bill, (bill) => bill.account, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'product_id' })
  // userRoles!: UserRole[];
  bills!: bill[];
}
