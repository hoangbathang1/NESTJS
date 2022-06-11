"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bill = void 0;
const account_entity_1 = require("../../account/entity/account.entity");
const products_entity_1 = require("../../product/entities/products.entity");
const typeorm_1 = require("typeorm");
let bill = class bill {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], bill.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], bill.prototype, "datebuy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], bill.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], bill.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => products_entity_1.Product, (product) => product.bills),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", products_entity_1.Product)
], bill.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_entity_1.Account, (account) => account.bills),
    (0, typeorm_1.JoinColumn)({
        name: 'account_id',
    }),
    __metadata("design:type", account_entity_1.Account)
], bill.prototype, "account", void 0);
bill = __decorate([
    (0, typeorm_1.Entity)()
], bill);
exports.bill = bill;
//# sourceMappingURL=bill.entity.js.map