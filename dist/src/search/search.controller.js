"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const products_service_1 = require("../market/products/products.service");
let SearchController = class SearchController {
    constructor(productService) {
        this.productService = productService;
    }
    async search(q, response) {
        if (!q) {
            throw new common_1.BadRequestException("Query is required");
        }
        const foundItems = await this.productService.searchFunc(q);
        if (foundItems) {
            response.status(200).json(foundItems);
        }
        else {
            throw new common_1.BadRequestException();
        }
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('q')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SearchController.prototype, "search", null);
SearchController = tslib_1.__decorate([
    (0, common_1.Controller)('search'),
    tslib_1.__metadata("design:paramtypes", [products_service_1.ProductsService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map