"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../internal/crud-service");
const recently_viewd_service_1 = require("./recently-viewd/recently-viewd.service");
const category_service_1 = require("../category/category.service");
const image_upload_service_1 = require("../../image-upload/image-upload.service");
const AppError_1 = require("../../internal/error/AppError");
const AppErrorTypeEnum_1 = require("../../internal/error/AppErrorTypeEnum");
const products_filter_service_1 = require("./products-filter.service");
let ProductsService = class ProductsService extends crud_service_1.CRUDService {
    constructor(productModel, categoryService, imageUploadService, filtering, recentlyViewdService) {
        super(productModel);
        this.productModel = productModel;
        this.categoryService = categoryService;
        this.imageUploadService = imageUploadService;
        this.filtering = filtering;
        this.recentlyViewdService = recentlyViewdService;
    }
    async searchFunc(query) {
        const items = await this.productModel.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { brand: { $regex: query, $options: 'i' } },
                { catName: { $regex: query, $options: 'i' } },
            ]
        }).exec();
        return items;
    }
    async getFiltredProducts(filterOpts) {
        return await this.getFiltred(filterOpts, async (query) => await this.getAllDocumentsByQuery(query), async (query, page, perPage) => await this.getEntriesByPage(query, page, perPage));
    }
    async getFiltredRecentlyViewdProducts(filterOpts) {
        return await this.getFiltred(filterOpts, async (query) => await this.recentlyViewdService.getAllDocumentsByQuery(query), async (query, page, perPage) => await this.recentlyViewdService.getEntriesByPage(query, page, perPage));
    }
    async createNewProduct(newProduct) {
        const categoryEntry = await this.categoryService.getDocumentById(newProduct.category);
        if (!categoryEntry) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE, {
                errorMessage: 'Cannot create product: invalid category submitted',
                userMessage: 'Cannot create product: invalid category submitted'
            });
        }
        for (const image of newProduct.images) {
            const isUploaded = await this.imageUploadService.isImageUploaded(image);
            if (!isUploaded) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.IMAGE_NOT_UPLOADED);
            }
        }
        try {
            return await this.productModel.create(newProduct);
        }
        catch (error) {
            if (error instanceof mongoose_1.default.Error.ValidationError) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_VALIDATION_ERROR, {
                    errorMessage: 'Cannot create product: invalid data submitted',
                    userMessage: 'Cannot create product: invalid data submitted'
                });
            }
            throw error;
        }
    }
    async removeDocumentById(id) {
        await this.imageUploadService.removeImagesFromModelById(this.productModel, id);
        try {
            const deleted = await this.productModel.findByIdAndDelete(id);
            if (!deleted) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
            }
            return deleted;
        }
        catch (e) {
            throw e;
        }
    }
    async getAllDocuments() {
        return await this.productModel.find().populate("category subCat").exec();
    }
    async getAllDocumentsByQuery(query) {
        return await this.productModel.find(query).populate("category subCat").exec();
    }
    async getDocumentById(id) {
        const doc = await this.productModel.findById(id).populate("category subCat").exec();
        if (!doc) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        return doc;
    }
    async createDocument(data) {
        throw new Error("Use ProductsService::createNewEntry instead. createEntry not valid");
        return await super.createDocument(data);
    }
    async getFiltred(filterOpts, findFn, findByPageFn) {
        const pagesQuantity = await this.filtering.processQuantityOfOutput(filterOpts.page, filterOpts.perPage);
        if (pagesQuantity.page > pagesQuantity.totalPages) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_RANGE);
        }
        const query = this.filtering.createFilterQuery(filterOpts);
        let docs;
        if (pagesQuantity.page && pagesQuantity.perPage) {
            docs = await findByPageFn(query, pagesQuantity.page, pagesQuantity.perPage);
        }
        else {
            docs = await findFn(query);
        }
        return {
            products: docs || [],
            totalPages: pagesQuantity.totalPages,
            page: pagesQuantity.page
        };
    }
    async getEntriesByPage(query, page, perPage) {
        return await this.productModel
            .find(query)
            .populate("category subCat")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
    }
};
ProductsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Product')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model,
        category_service_1.CategoryService,
        image_upload_service_1.ImageUploadService,
        products_filter_service_1.ProductsFilteringService,
        recently_viewd_service_1.RecentlyViewdService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map