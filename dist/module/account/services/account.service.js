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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let AccountService = class AccountService {
    constructor(AccountReponsitory, jwtService) {
        this.AccountReponsitory = AccountReponsitory;
        this.jwtService = jwtService;
    }
    getAllAccount() {
        return this.AccountReponsitory.find();
    }
    registeraccount(account) {
        return this.AccountReponsitory.insert(account);
    }
    validateAccount(account) {
        return this.AccountReponsitory.findOne({
            where: {
                email: account.email,
                password: account.password,
            },
        });
    }
    findbyid(id) {
        return this.AccountReponsitory.findOne({
            where: {
                id,
            },
        });
    }
    login(account) {
        return this.jwtService.sign({
            account,
        });
    }
    async auth(token) {
        try {
            const data = await this.jwtService.verifyAsync(token);
            if (!data) {
                throw new common_1.BadRequestException('kh??ng t???n t???i ng?????i d??ng');
            }
            return data.account;
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ACCOUNT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map