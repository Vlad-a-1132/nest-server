"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRamsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_rams_service_1 = require("./product-rams.service");
const product_rams_schema_1 = require("./product-rams.schema");
let ProductRamsController = class ProductRamsController {
    constructor(productRAMsService) {
        this.productRAMsService = productRAMsService;
    }
    async getProductRAMs(response) {
        const execRes = await this.productRAMsService.getAllDocuments();
        response.status(200).json(execRes);
    }
    async getProductRAMsById(id, response) {
        const execRes = await this.productRAMsService.getDocumentById(id);
        response.status(200).send(execRes);
    }
    async createProductRAMs(data, response) {
        const execRes = await this.productRAMsService.createDocument(data);
        response.status(200).json(execRes);
    }
    async removeProductRAMsById(id, response) {
        const execRes = await this.productRAMsService.removeDocumentById(id);
        response.status(200).json(execRes);
    }
    async updateProductRAMsById(id, data, response) {
        const execRes = await this.productRAMsService.updateDocumentById(id, data);
        response.status(200).json(execRes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRamsController.prototype, "getProductRAMs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRamsController.prototype, "getProductRAMsById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_rams_schema_1.ProductRAMsEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRamsController.prototype, "createProductRAMs", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRamsController.prototype, "removeProductRAMsById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRamsController.prototype, "updateProductRAMsById", null);
ProductRamsController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [product_rams_service_1.ProductRAMsService])
], ProductRamsController);
exports.ProductRamsController = ProductRamsController;
//# sourceMappingURL=product-rams.controller.js.map