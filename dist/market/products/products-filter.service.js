"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsFilteringService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductsFilteringService = class ProductsFilteringService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    createFilterQuery(filterOpts) {
        const { minPrice, maxPrice, subCategoryId, categoryId, categoryName, category, rating, location, isFeatured } = filterOpts;
        let query = {};
        const queryByPrice = { price: { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) || 99999999 } };
        const queryByCategoryId = { category: categoryId || category };
        const queryByCategoryName = { catName: categoryName };
        const queryBySubCategoryId = { subCatId: subCategoryId };
        const queryByRating = { rating: rating };
        const queryByLocation = { location: location };
        const queryByisFeaturing = { isFeatured: isFeatured };
        if (minPrice) {
            Object.assign(query, queryByPrice);
        }
        if (categoryName) {
            Object.assign(query, queryByCategoryName);
        }
        if (subCategoryId) {
            Object.assign(query, queryBySubCategoryId);
        }
        if (rating) {
            Object.assign(query, queryByRating);
        }
        if (location) {
            Object.assign(query, queryByLocation);
        }
        if (categoryId || category) {
            Object.assign(query, queryByCategoryId);
        }
        if (location !== undefined && location !== null && location !== "All") {
            Object.assign(query, queryByLocation);
        }
        if (isFeatured !== undefined && isFeatured !== null) {
            Object.assign(query, queryByisFeaturing);
        }
        return query;
    }
    async processQuantityOfOutput(page, perPage) {
        const _page = parseInt(page || "1");
        const totalDocuments = await this.productModel.countDocuments();
        if (!perPage) {
            return {
                page: _page,
                perPage: null,
                totalDocuments: totalDocuments,
                totalPages: 1
            };
        }
        const _perPage = parseInt(perPage);
        const totalPages = +Math.ceil(totalDocuments / _perPage);
        return {
            page: _page,
            perPage: _perPage,
            totalDocuments: totalDocuments,
            totalPages: totalPages
        };
    }
};
ProductsFilteringService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Product')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], ProductsFilteringService);
exports.ProductsFilteringService = ProductsFilteringService;
//# sourceMappingURL=products-filter.service.js.map