"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Current_User = void 0;
const common_1 = require("@nestjs/common");
exports.Current_User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=current-user.decorator.js.map