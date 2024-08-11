"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSizeService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
let ProductSizeService = class ProductSizeService extends crud_service_1.CRUDService {
    constructor(productSizeModel) {
        super(productSizeModel);
        this.productSizeModel = productSizeModel;
    }
};
ProductSizeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('ProductSize')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ProductSizeService);
exports.ProductSizeService = ProductSizeService;
//# sourceMappingURL=product-size.service.js.map