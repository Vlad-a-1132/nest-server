"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
let CloudinaryService = class CloudinaryService {
    async uploadFile(file_path, options) {
        console.log("Cloudinary uploading file: " + file_path);
        return await cloudinary_1.v2.uploader.upload(file_path, options);
    }
    async destroyFile(public_id) {
        console.log("Cloudinary deleting file: " + public_id);
        const res = await cloudinary_1.v2.uploader.destroy(public_id);
        console.log(res);
        return res;
    }
};
CloudinaryService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map