"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const ParseObjectIdPipe_pipe_1 = require("common/pipes/ParseObjectIdPipe.pipe");
const products_service_1 = require("./products.service");
const recently_viewd_schema_1 = require("./recently-viewd/recently-viewd.schema");
const ProductFilterParams_1 = require("./interfaces/ProductFilterParams");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getFiltredProducts(query, response) {
        const defaultedQuery = Object.assign(Object.assign({}, ProductFilterParams_1.defaultsProductFilterParams), query);
        const execRes = await this.productsService.getFiltredProducts(defaultedQuery);
        response.status(200).send(execRes);
    }
    async getAllProducts(response) {
        const execRes = await this.productsService.getAllDocuments();
        response.json(execRes);
    }
    async getProductsCount(response) {
        const execRes = await this.productsService.getDocumentsCount();
        response.status(200).json({
            productsCount: execRes
        });
    }
    async getFeaturedProducts(query, response) {
        const defaultedQuery = Object.assign(Object.assign(Object.assign({}, ProductFilterParams_1.defaultsProductFilterParams), query), { isFeatured: true });
        const execRes = await this.productsService.getFiltredRecentlyViewdProducts(defaultedQuery);
        response.status(200).send(execRes);
    }
    async createNewRecentlyViewd(body, response) {
        const execRes = await this.productsService.recentlyViewdService.createDocument({
            prodId: body.id,
            name: body.name,
            description: body.description,
            images: body.images,
            brand: body.brand,
            price: body.price,
            oldPrice: body.oldPrice,
            subCatId: body.subCatId,
            catName: body.catName,
            subCat: body.subCat,
            category: body.category,
            countInStock: body.countInStock,
            rating: body.rating,
            isFeatured: body.isFeatured,
            discount: body.discount,
            productRam: body.productRam,
            size: body.size,
            productWeight: body.productWeight,
            dateCreated: new Date()
        });
        response.status(200).json(execRes);
    }
    async getRecentlyViewd(response) {
        const execRes = await this.productsService.recentlyViewdService.getAllDocuments();
        response.status(200).json(execRes);
    }
    async createNewProduct(data, response) {
        const execRes = await this.productsService.createNewProduct(data);
        response.status(200).json(execRes);
    }
    async getProductById(id, response) {
        const execRes = await this.productsService.getDocumentById(id);
        response.status(200).send(execRes);
    }
    async removeProductById(id, response) {
        const execRes = await this.productsService.removeDocumentById(id);
        response.status(200).json({
            success: true,
            message: "Product deleted"
        });
    }
    async updateProductById(id, newData, response) {
        const execRes = await this.productsService.updateDocumentById(id, newData);
        response.status(200).json(execRes);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/filtred'),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getFiltredProducts", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductsCount", null);
tslib_1.__decorate([
    (0, common_1.Get)('/get/featured'),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getFeaturedProducts", null);
tslib_1.__decorate([
    (0, common_1.Post)('/recentlyViewd'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [recently_viewd_schema_1.RecentlyViewedEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "createNewRecentlyViewd", null);
tslib_1.__decorate([
    (0, common_1.Get)('/recentlyViewd/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getRecentlyViewd", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "createNewProduct", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductById", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "removeProductById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProductById", null);
ProductsController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map