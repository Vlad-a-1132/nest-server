"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWeightService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
let ProductWeightService = class ProductWeightService extends crud_service_1.CRUDService {
    constructor(productWeightModel) {
        super(productWeightModel);
        this.productWeightModel = productWeightModel;
    }
};
ProductWeightService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('ProductWeight')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ProductWeightService);
exports.ProductWeightService = ProductWeightService;
//# sourceMappingURL=product-weight.service.js.map