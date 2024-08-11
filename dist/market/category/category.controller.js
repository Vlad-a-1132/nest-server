"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const ParseObjectIdPipe_pipe_1 = require("common/pipes/ParseObjectIdPipe.pipe");
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getFiltredCategories(page, perPage, response) {
        const result = await this.categoryService.getFiltredEntities(page, perPage);
        response.status(200).json(result);
    }
    async getAllDocs(response) {
        const allDocs = await this.categoryService.getAllDocuments();
        response.json({
            categoryList: allDocs
        });
    }
    async getCategoryById(id, response) {
        const category = await this.categoryService.getDocumentById(id);
        response.json(category);
    }
    async getCategoryEntriesCount(response) {
        const catCount = await this.categoryService.getDocumentsCount();
        response.json({
            categoryCount: catCount
        });
    }
    async createCategory(body, response) {
        const category = await this.categoryService.createDocument({
            name: body.name,
            images: body.images,
            color: body.color
        });
        if (!category) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE);
        }
        response.json(category);
    }
    async removeById(id, response) {
        await this.categoryService.removeDocumentById(id);
        response.status(200).json({
            success: true,
        });
    }
    async updateById(id, body, response) {
        const updatedCat = await this.categoryService.updateDocumentById(id, {
            name: body.name,
            images: body.images,
            color: body.color
        });
        response.json(updatedCat);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/filtred'),
    tslib_1.__param(0, (0, common_1.Query)('page', new common_2.DefaultValuePipe(1), common_2.ParseIntPipe)),
    tslib_1.__param(1, (0, common_1.Query)('perPage', new common_2.DefaultValuePipe(8), common_2.ParseIntPipe)),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "getFiltredCategories", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllDocs", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "getCategoryEntriesCount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "removeById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "updateById", null);
CategoryController = tslib_1.__decorate([
    (0, common_1.Controller)('category'),
    tslib_1.__metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map