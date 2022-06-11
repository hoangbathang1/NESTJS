"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountProvider = void 0;
const account_entity_1 = require("../module/account/entity/account.entity");
exports.AccountProvider = [
    {
        provide: 'ACCOUNT_REPOSITORY',
        useFactory: (connection) => connection.getRepository(account_entity_1.Account),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=account.provider.js.map