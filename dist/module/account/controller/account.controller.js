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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_entity_1 = require("../entity/account.entity");
const bcrypt = require("bcrypt");
const account_service_1 = require("../services/account.service");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guards/auth.guard");
let AccountController = class AccountController {
    constructor(AccountService) {
        this.AccountService = AccountService;
    }
    getAllAccount() {
        return this.AccountService.getAllAccount();
    }
    async registerAccount(account) {
        const password = await bcrypt.hashSync(account.password, 12);
        account.password = password;
        return this.AccountService.registeraccount(account);
    }
    async login(account, response) {
        const user = await this.AccountService.validateAccount(account);
        if (!user) {
            throw new common_1.BadRequestException('không tồn tại người dùng');
        }
        if (user) {
            const jwt = await this.AccountService.login(user);
            response.cookie('token', jwt);
            response.json({
                access_token: jwt,
            });
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.authguard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getAllAccount", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "registerAccount", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.Account, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "login", null);
AccountController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map