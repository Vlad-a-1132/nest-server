"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cloudinary_module_1 = require("../common/cloudinary/cloudinary.module");
const image_upload_controller_1 = require("./image-upload.controller");
const image_upload_schema_1 = require("./image-upload.schema");
const image_upload_service_1 = require("./image-upload.service");
let ImageUploadModule = class ImageUploadModule {
};
ImageUploadModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Images', schema: image_upload_schema_1.ImagesSchema }
            ]),
            cloudinary_module_1.CloudinaryModule
        ],
        providers: [image_upload_service_1.ImageUploadService],
        controllers: [image_upload_controller_1.ImageUploadController],
        exports: [image_upload_service_1.ImageUploadService]
    })
], ImageUploadModule);
exports.ImageUploadModule = ImageUploadModule;
//# sourceMappingURL=image-upload.module.js.map