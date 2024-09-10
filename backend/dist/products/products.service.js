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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    create(createProductDto) {
        const product = {
            name: createProductDto.name,
            price: createProductDto.price,
            category: createProductDto.category,
            rating: createProductDto.rating,
        };
        return this.productModel.create(product);
    }
    async findAll() {
        return this.productModel.findAll();
    }
    findOne(id) {
        return this.productModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const product = await this.findOne(id);
        await product.destroy();
    }
    async update(id, updateProductDto) {
        const product = await this.findOne(id);
        const productUpdated = {
            name: updateProductDto.name,
            price: updateProductDto.price,
            category: updateProductDto.category,
            rating: updateProductDto.rating,
        };
        await product.update(productUpdated);
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(product_entity_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductsService);
//# sourceMappingURL=products.service.js.map