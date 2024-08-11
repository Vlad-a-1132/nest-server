"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWeightModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_weight_schema_1 = require("./product-weight.schema");
const product_weight_service_1 = require("./product-weight.service");
const product_weight_controller_1 = require("./product-weight.controller");
let ProductWeightModule = class ProductWeightModule {
};
ProductWeightModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ProductWeight', schema: product_weight_schema_1.ProductWeightSchema }
            ])
        ],
        providers: [product_weight_service_1.ProductWeightService],
        exports: [product_weight_service_1.ProductWeightService],
        controllers: [product_weight_controller_1.ProductWeightController]
    })
], ProductWeightModule);
exports.ProductWeightModule = ProductWeightModule;
//# sourceMappingURL=product-weight.module.js.map