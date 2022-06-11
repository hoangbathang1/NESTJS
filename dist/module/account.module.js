"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccountModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const account_controller_1 = require("./account/controller/account.controller");
const database_module_1 = require("../database/database.module");
const account_provider_1 = require("../providers/account.provider");
const account_service_1 = require("./account/services/account.service");
let AccountModule = AccountModule_1 = class AccountModule {
};
AccountModule = AccountModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            core_1.RouterModule.register([
                {
                    path: 'account',
                    module: AccountModule_1,
                },
            ]),
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [account_controller_1.AccountController],
        providers: [...account_provider_1.AccountProvider, account_service_1.AccountService],
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map