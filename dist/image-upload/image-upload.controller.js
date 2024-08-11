"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const image_upload_service_1 = require("./image-upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const ParseObjectIdPipe_pipe_1 = require("common/pipes/ParseObjectIdPipe.pipe");
const utils_1 = require("internal/utils");
let ImageUploadController = class ImageUploadController {
    constructor(imageUploadService) {
        this.imageUploadService = imageUploadService;
    }
    async uploadFile(files, res) {
        if (!files) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.CANNOT_UPLOAD_IMAGE, {
                errorMessage: "No files attached",
                userMessage: "No files attached"
            });
        }
        const jsonRes = await this.imageUploadService.uploadImages(files);
        res.status(200).json(jsonRes);
    }
    async getAll(response) {
        const entries = await this.imageUploadService.getAllDocuments();
        response.status(200).json(entries);
    }
    async getById(id, response) {
        const entry = await this.imageUploadService.getDocumentById(id);
        if (entry) {
            response.status(200).send(entry);
        }
        throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
    }
    async getByCollectionName(collection, response) {
        const entry = await this.imageUploadService.findOne({ collectionName: collection });
        if (entry) {
            response.status(200).send(entry);
        }
        throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
    }
    async removeById(id, response) {
        const execRes = await this.imageUploadService.removeDocumentById(id);
        if (execRes) {
            return response.status(200).json({ success: true });
        }
        throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("images", 20, {
        storage: (0, multer_1.diskStorage)({
            destination: (_, __, cb) => cb(null, './uploads'),
            filename: (_, file, cb) => cb(null, `${(0, utils_1.generateRandom)()}_${file.originalname}`)
        })
    })),
    tslib_1.__param(0, (0, common_1.UploadedFiles)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageUploadController.prototype, "uploadFile", null);
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageUploadController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageUploadController.prototype, "getById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/collectionName/:collectionName'),
    tslib_1.__param(0, (0, common_1.Param)('collectionName')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageUploadController.prototype, "getByCollectionName", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImageUploadController.prototype, "removeById", null);
ImageUploadController = tslib_1.__decorate([
    (0, common_1.Controller)('image-upload'),
    tslib_1.__metadata("design:paramtypes", [image_upload_service_1.ImageUploadService])
], ImageUploadController);
exports.ImageUploadController = ImageUploadController;
//# sourceMappingURL=image-upload.controller.js.map