"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRAMsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_rams_schema_1 = require("./product-rams.schema");
const product_rams_service_1 = require("./product-rams.service");
const product_rams_controller_1 = require("./product-rams.controller");
let ProductRAMsModule = class ProductRAMsModule {
};
ProductRAMsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ProductRAMs', schema: product_rams_schema_1.ProductRAMsSchema },
            ])
        ],
        providers: [product_rams_service_1.ProductRAMsService],
        exports: [product_rams_service_1.ProductRAMsService],
        controllers: [product_rams_controller_1.ProductRamsController]
    })
], ProductRAMsModule);
exports.ProductRAMsModule = ProductRAMsModule;
//# sourceMappingURL=product-rams.module.js.map