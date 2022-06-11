import { Provider } from '@nestjs/common';
import { Account } from 'src/module/account/entity/account.entity';
import { Connection } from 'typeorm';

export const AccountProvider: Provider[] = [
  {
    provide: 'ACCOUNT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: ['DATABASE_CONNECTION'],
  },
];
