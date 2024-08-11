"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const image_upload_service_1 = require("../../image-upload/image-upload.service");
const crud_service_1 = require("../../internal/crud-service");
const AppError_1 = require("../../internal/error/AppError");
const AppErrorTypeEnum_1 = require("../../internal/error/AppErrorTypeEnum");
let CategoryService = class CategoryService extends crud_service_1.CRUDService {
    constructor(categoryModel, imageUploadService) {
        super(categoryModel);
        this.categoryModel = categoryModel;
        this.imageUploadService = imageUploadService;
    }
    async getFiltredEntities(page, perPage) {
        const totalDocs = await this.getDocumentsCount();
        const totalPages = Math.ceil(totalDocs / perPage);
        if (page > totalPages) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_RANGE);
        }
        let subCategoryArray = await this.categoryModel.find().skip((page - 1) * perPage).limit(perPage).exec();
        if (!subCategoryArray) {
            new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        return {
            categoryList: subCategoryArray,
            totalPages: totalPages,
            page: page
        };
    }
    async removeDocumentById(id) {
        await this.imageUploadService.removeImagesFromModelById(this.categoryModel, id);
        return super.removeDocumentById(id);
    }
};
CategoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Category')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model,
        image_upload_service_1.ImageUploadService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map