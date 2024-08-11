"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const sub_category_service_1 = require("./sub-category.service");
const ParseObjectIdPipe_pipe_1 = require("common/pipes/ParseObjectIdPipe.pipe");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
let SubCategoryController = class SubCategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    async getFiltredSubCategories(page, perPage, response) {
        const result = await this.subCategoryService.getFiltredEntities(page, perPage);
        response.status(200).json(result);
    }
    async getAllDocs(response) {
        const allDocs = await this.subCategoryService.getAllDocuments();
        response.json({
            subCategoryList: allDocs
        });
    }
    async getSubCategoryById(id, response) {
        const subCategory = await this.subCategoryService.getDocumentById(id);
        response.json(subCategory);
    }
    async getSubCategoryEntriesCount(response) {
        const subCatCount = await this.subCategoryService.getDocumentsCount();
        response.json({ subCatCount: subCatCount });
    }
    async createSubCategory(body, response) {
        console.log(body);
        if (!mongoose_1.default.isValidObjectId(body.category)) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID);
        }
        try {
            const subCat = await this.subCategoryService.createDocument({
                category: body.category,
                subCat: body.subCat
            });
            if (!subCat) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE);
            }
            response.json(subCat);
        }
        catch (e) {
            if (e instanceof AppError_1.AppError) {
                throw e;
            }
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE);
        }
    }
    async removeById(id, response) {
        await this.subCategoryService.removeDocumentById(id);
        response.status(200).json({
            success: true,
        });
    }
    async updateById(id, body, response) {
        if (!mongoose_1.default.isValidObjectId(body.category)) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID);
        }
        const subCat = await this.subCategoryService.updateDocumentById(id, {
            category: body.category,
            subCat: body.subCat,
        });
        if (!subCat) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE);
        }
        response.json(subCat);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/filtred'),
    tslib_1.__param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Query)('perPage', new common_1.DefaultValuePipe(8), common_1.ParseIntPipe)),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getFiltredSubCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getAllDocs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getSubCategoryById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "getSubCategoryEntriesCount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "createSubCategory", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "removeById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubCategoryController.prototype, "updateById", null);
SubCategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('sub-category'),
    tslib_1.__metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryController);
exports.SubCategoryController = SubCategoryController;
//# sourceMappingURL=sub-category.controller.js.map