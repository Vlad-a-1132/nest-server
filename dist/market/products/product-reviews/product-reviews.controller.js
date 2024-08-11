"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const product_reviews_service_1 = require("./product-reviews.service");
const product_reviews_schema_1 = require("./product-reviews.schema");
const ParseObjectIdPipe_pipe_1 = require("common/pipes/ParseObjectIdPipe.pipe");
let ProductReviewsController = class ProductReviewsController {
    constructor(productReviewsService) {
        this.productReviewsService = productReviewsService;
    }
    async getProductReviews(response) {
        const execRes = await this.productReviewsService.getAllDocuments();
        response.status(200).json(execRes);
    }
    async getReviewsCount(response) {
        const execRes = await this.productReviewsService.getDocumentsCount();
        response.status(200).json({
            productsReviews: execRes
        });
    }
    async getFiltredProductReviews(id, response) {
        const execRes = await this.productReviewsService.findOne({ productId: id });
        response.status(200).json([execRes]);
    }
    async getProductReviewsById(id, response) {
        const execRes = await this.productReviewsService.getDocumentById(id);
        response.status(200).send(execRes);
    }
    async createNewProductReview(data, response) {
        const execRes = await this.productReviewsService.createDocument(data);
        response.status(200).json(execRes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductReviewsController.prototype, "getProductReviews", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductReviewsController.prototype, "getReviewsCount", null);
tslib_1.__decorate([
    (0, common_1.Get)('/filtred'),
    tslib_1.__param(0, (0, common_1.Param)('productId')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductReviewsController.prototype, "getFiltredProductReviews", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductReviewsController.prototype, "getProductReviewsById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [product_reviews_schema_1.ProductReviewsEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductReviewsController.prototype, "createNewProductReview", null);
ProductReviewsController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [product_reviews_service_1.ProductReviewsService])
], ProductReviewsController);
exports.ProductReviewsController = ProductReviewsController;
//# sourceMappingURL=product-reviews.controller.js.map