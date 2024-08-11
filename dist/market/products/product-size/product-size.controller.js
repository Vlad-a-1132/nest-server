"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSizeController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_size_service_1 = require("./product-size.service");
const product_size_schema_1 = require("./product-size.schema");
let ProductSizeController = class ProductSizeController {
    constructor(productSizeService) {
        this.productSizeService = productSizeService;
    }
    async getProductSizes(response) {
        try {
            const execRes = await this.productSizeService.getAllDocuments();
            if (execRes) {
                response.status(200).json(execRes);
            }
            else {
                response.status(500).json({
                    success: false
                });
            }
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
    async getProductSizeById(id, response) {
        const execRes = await this.productSizeService.getDocumentById(id);
        response.status(200).send(execRes);
    }
    async createProductSize(data, response) {
        const execRes = await this.productSizeService.createDocument(data);
        response.status(200).json(execRes);
    }
    async removeProductSizeById(id, response) {
        const execRes = await this.productSizeService.removeDocumentById(id);
        response.status(200).json({
            message: 'Item deleted',
            success: true
        });
    }
    async updateProductSizeById(id, data, response) {
        const execRes = await this.productSizeService.updateDocumentById(id, data);
        response.status(200).send(execRes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSizeController.prototype, "getProductSizes", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSizeController.prototype, "getProductSizeById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_size_schema_1.ProductSizeEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSizeController.prototype, "createProductSize", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSizeController.prototype, "removeProductSizeById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSizeController.prototype, "updateProductSizeById", null);
ProductSizeController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [product_size_service_1.ProductSizeService])
], ProductSizeController);
exports.ProductSizeController = ProductSizeController;
//# sourceMappingURL=product-size.controller.js.map