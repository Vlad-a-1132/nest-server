"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const crud_service_1 = require("internal/crud-service");
const cloudinary_service_1 = require("common/cloudinary/cloudinary.service");
const fs = tslib_1.__importStar(require("fs"));
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const AppError_1 = require("internal/error/AppError");
const constants_1 = require("common/constants");
const utils_1 = require("internal/utils");
let ImageUploadService = class ImageUploadService extends crud_service_1.CRUDService {
    constructor(imageUploadModel, cloudinaryService) {
        super(imageUploadModel);
        this.imageUploadModel = imageUploadModel;
        this.cloudinaryService = cloudinaryService;
    }
    async uploadImages(files, collectionName = constants_1.DEFAULT_IMAGES_ENTITY_COLLECTION_NAME) {
        let imagesURL = new Array;
        const cloudinaryUploadOptions = {
            use_filename: true,
            unique_filename: false,
            overwrite: false,
        };
        for (const file of files) {
            const uploadedFile = await this.cloudinaryService.uploadFile(file.path, cloudinaryUploadOptions);
            imagesURL.push(uploadedFile.secure_url);
            fs.unlinkSync(`uploads/${file.filename}`);
        }
        try {
            const existingImagesCollection = await super.findOne({ collectionName: collectionName });
            let images;
            if (existingImagesCollection) {
                const _images = existingImagesCollection.images.concat(imagesURL);
                images = await this.imageUploadModel.findByIdAndUpdate(existingImagesCollection.id, { images: _images });
            }
            else {
                images = await super.createDocument({ images: imagesURL, collectionName: collectionName });
            }
            return {
                imagesDocument: images,
                uploadedImages: imagesURL
            };
        }
        catch (error) {
            for (const image of imagesURL) {
                await this.cloudinaryService.destroyFile((0, utils_1.extractFileName)(image));
            }
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE);
        }
    }
    async getDocumentFromDefaultCollection() {
        return await this.getDocumentByCollectionName(constants_1.DEFAULT_IMAGES_ENTITY_COLLECTION_NAME);
    }
    async getDocumentByCollectionName(collectionName) {
        try {
            const doc = await this.imageUploadModel.findOne({ collectionName: collectionName });
            if (!doc) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
            }
            return doc;
        }
        catch (e) {
            if (e instanceof AppError_1.AppError) {
                throw e;
            }
            throw new common_1.BadRequestException(e);
        }
    }
    async removeDocumentById(id) {
        const imagesEntity = await this.getDocumentById(id);
        if (!imagesEntity) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        for (const image of imagesEntity.images) {
            await this.cloudinaryService.destroyFile((0, utils_1.extractFileName)(image));
        }
        return await super.removeDocumentById(id);
    }
    async removeConcreetImage(entity, filename) {
        if (!entity) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        entity.images = entity.images.filter((value) => value != filename);
        const updated = await entity.save();
        if (!updated) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE);
        }
        await this.cloudinaryService.destroyFile((0, utils_1.extractFileName)(filename));
        return updated;
    }
    async removeConcreetImageFromEntityById(id, filename) {
        const entity = await super.getDocumentById(id);
        return await this.removeConcreetImage(entity, filename);
    }
    async removeConcreetImageFromEntryByCollectionName(collectionName, filename) {
        const entity = await this.getDocumentByCollectionName(collectionName);
        return await this.removeConcreetImage(entity, filename);
    }
    async removeConcreetImageFromDefaultCollection(filename) {
        return await this.removeConcreetImageFromEntryByCollectionName(constants_1.DEFAULT_IMAGES_ENTITY_COLLECTION_NAME, filename);
    }
    async isImageUploaded(filename) {
        const docs = await super.getAllDocuments();
        if (!docs) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        for (const doc of docs) {
            for (const image of doc.images) {
                if ((0, utils_1.extractFileName)(image, false) == (0, utils_1.extractFileName)(filename, false)) {
                    return image;
                }
            }
        }
        return false;
    }
    async createDocument(data) {
        throw new Error("Use ImageUploadService::uploadImages instead");
        return super.createDocument(data);
    }
    async removeImagesFromModelById(model, id) {
        const targetDoc = await model.findById(id);
        if (!targetDoc) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
        }
        let count = 0;
        for (const image of targetDoc.images) {
            count++;
            await this.removeConcreetImageFromDefaultCollection(image);
        }
        return count;
    }
};
ImageUploadService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Images')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model, typeof (_a = typeof cloudinary_service_1.CloudinaryService !== "undefined" && cloudinary_service_1.CloudinaryService) === "function" ? _a : Object])
], ImageUploadService);
exports.ImageUploadService = ImageUploadService;
//# sourceMappingURL=image-upload.service.js.map