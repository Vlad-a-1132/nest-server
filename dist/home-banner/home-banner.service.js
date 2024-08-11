"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBannerService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const image_upload_service_1 = require("image-upload/image-upload.service");
let HomeBannerService = class HomeBannerService extends crud_service_1.CRUDService {
    constructor(homeBannerModel, imageService) {
        super(homeBannerModel);
        this.homeBannerModel = homeBannerModel;
        this.imageService = imageService;
    }
    async updateDocumentById(id, data) {
        if (!data.images || data.images.length <= 0) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_NOTHING_TO_UPDATE);
        }
        return await super.updateDocumentById(id, { images: data.images });
    }
    async removeDocumentById(id) {
        const entry = await this.homeBannerModel.findById(id);
        if (!entry) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        for (const url of entry.images) {
            await this.imageService.removeConcreetImageFromDefaultCollection(url);
        }
        return await super.removeDocumentById(id);
    }
};
HomeBannerService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('HomeBanner')),
    tslib_1.__metadata("design:paramtypes", [mongoose_2.Model, typeof (_a = typeof image_upload_service_1.ImageUploadService !== "undefined" && image_upload_service_1.ImageUploadService) === "function" ? _a : Object])
], HomeBannerService);
exports.HomeBannerService = HomeBannerService;
//# sourceMappingURL=home-banner.service.js.map