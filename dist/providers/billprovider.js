"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billprovider = void 0;
const bill_entity_1 = require("../module/bill/entities/bill.entity");
exports.billprovider = [
    {
        provide: 'BILL_REPONSITORY',
        useFactory: (connection) => connection.getRepository(bill_entity_1.bill),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=billprovider.js.map