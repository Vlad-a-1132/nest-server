"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRAMsService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../../internal/crud-service");
let ProductRAMsService = class ProductRAMsService extends crud_service_1.CRUDService {
    constructor(productRAMsModel) {
        super(productRAMsModel);
        this.productRAMsModel = productRAMsModel;
    }
};
ProductRAMsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('ProductRAMs')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ProductRAMsService);
exports.ProductRAMsService = ProductRAMsService;
//# sourceMappingURL=product-rams.service.js.map