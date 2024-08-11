"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
let SubCategoryService = class SubCategoryService extends crud_service_1.CRUDService {
    constructor(subCategoryModel) {
        super(subCategoryModel);
        this.subCategoryModel = subCategoryModel;
    }
    async getFiltredEntities(page, perPage) {
        const totalDocs = await this.getDocumentsCount();
        const totalPages = Math.ceil(totalDocs / perPage);
        if (page > totalPages) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_RANGE);
        }
        let subCategoryArray = await this.subCategoryModel.find().populate("category").skip((page - 1) * perPage).limit(perPage).exec();
        if (!subCategoryArray) {
            new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        return {
            subCategoryList: subCategoryArray,
            totalPages: totalPages,
            page: page
        };
    }
    async getAllDocuments() {
        return await this.subCategoryModel.find().populate("category").exec();
    }
};
SubCategoryService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('SubCategory')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], SubCategoryService);
exports.SubCategoryService = SubCategoryService;
//# sourceMappingURL=sub-category.service.js.map