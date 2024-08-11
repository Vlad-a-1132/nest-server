"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSizeModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_size_schema_1 = require("./product-size.schema");
const product_size_service_1 = require("./product-size.service");
const product_size_controller_1 = require("./product-size.controller");
let ProductSizeModule = class ProductSizeModule {
};
ProductSizeModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ProductSize', schema: product_size_schema_1.ProductSizeSchema }
            ])
        ],
        providers: [product_size_service_1.ProductSizeService],
        controllers: [product_size_controller_1.ProductSizeController],
        exports: [product_size_service_1.ProductSizeService],
    })
], ProductSizeModule);
exports.ProductSizeModule = ProductSizeModule;
//# sourceMappingURL=product-size.module.js.map