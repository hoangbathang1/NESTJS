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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const products_entity_1 = require("../entities/products.entity");
const product_service_1 = require("../services/product.service");
let ProductController = class ProductController {
    constructor(productservice) {
        this.productservice = productservice;
    }
    showproduct() {
        return this.productservice.showproduct();
    }
    addproduct(product) {
        return this.productservice.addproduct(product);
    }
    deleteproduct(id) {
        return this.productservice.deleteproduct(id);
    }
    editproduct(product) {
        return this.productservice.editproduct(product);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "showproduct", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addproduct", null);
__decorate([
    (0, common_1.Post)('/delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "deleteproduct", null);
__decorate([
    (0, common_1.Post)('/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "editproduct", null);
ProductController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [product_service_1.Productservice])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map