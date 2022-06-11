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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.billcontroller = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../account/decorators/current-user.decorator");
const account_entity_1 = require("../../account/entity/account.entity");
const auth_guard_1 = require("../../account/guards/auth.guard");
const create_bill_payload_1 = require("../../product/payloads/create-bill.payload");
const bill_service_1 = require("../services/bill.service");
let billcontroller = class billcontroller {
    constructor(billservice) {
        this.billservice = billservice;
    }
    async addbill(account, body) {
        return await this.billservice.add(body, account);
    }
    async deletebill(id) {
        return await this.billservice.delete(id);
    }
    async editbill(body, id) {
        return await this.billservice.update(body, id);
    }
    async findall(id) {
        return await this.billservice.findbyidaccount(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.Current_User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account,
        create_bill_payload_1.createbillpayload]),
    __metadata("design:returntype", Promise)
], billcontroller.prototype, "addbill", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], billcontroller.prototype, "deletebill", null);
__decorate([
    (0, common_1.Put)('/edit/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bill_payload_1.createbillpayload, Number]),
    __metadata("design:returntype", Promise)
], billcontroller.prototype, "editbill", null);
__decorate([
    (0, common_1.Get)('/get/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], billcontroller.prototype, "findall", null);
billcontroller = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [bill_service_1.billservice])
], billcontroller);
exports.billcontroller = billcontroller;
//# sourceMappingURL=bill.controller.js.map