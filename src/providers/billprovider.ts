import { Provider } from '@nestjs/common';
import { bill } from 'src/module/bill/entities/bill.entity';

import { Connection } from 'typeorm';

export const billprovider: Provider[] = [
  {
    provide: 'BILL_REPONSITORY',
    useFactory: (connection: Connection) => connection.getRepository(bill),
    inject: ['DATABASE_CONNECTION'],
  },
];
