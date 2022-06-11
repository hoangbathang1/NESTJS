"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProvider = void 0;
const products_entity_1 = require("../module/product/entities/products.entity");
exports.ProductProvider = [
    {
        provide: 'PRODUCT_REPONSITORY',
        useFactory: (connection) => connection.getRepository(products_entity_1.Product),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=product.provider.js.map