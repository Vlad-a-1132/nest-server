"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWeightController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_weight_service_1 = require("./product-weight.service");
const product_weight_schema_1 = require("./product-weight.schema");
let ProductWeightController = class ProductWeightController {
    constructor(productWeightSerivce) {
        this.productWeightSerivce = productWeightSerivce;
    }
    async getAllProductWeights(response) {
        const execRes = await this.productWeightSerivce.getAllDocuments();
        response.status(200).json(execRes);
    }
    async getProductWeightById(id, response) {
        const execRes = await this.productWeightSerivce.getDocumentById(id);
        response.status(200).json(execRes);
    }
    async createProductWeight(data, response) {
        const execRes = await this.productWeightSerivce.createDocument(data);
        response.status(200).json(execRes);
    }
    async deleteProductWeightById(id, response) {
        const execRes = await this.productWeightSerivce.removeDocumentById(id);
        response.status(200).json({
            message: 'Item deleted',
            success: false
        });
    }
    async updateProductWeight(id, data, response) {
        const execRes = await this.productWeightSerivce.updateDocumentById(id, data);
        response.status(200).send(execRes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductWeightController.prototype, "getAllProductWeights", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductWeightController.prototype, "getProductWeightById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_weight_schema_1.ProductWeightEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductWeightController.prototype, "createProductWeight", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductWeightController.prototype, "deleteProductWeightById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductWeightController.prototype, "updateProductWeight", null);
ProductWeightController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [product_weight_service_1.ProductWeightService])
], ProductWeightController);
exports.ProductWeightController = ProductWeightController;
//# sourceMappingURL=product-weight.controller.js.map