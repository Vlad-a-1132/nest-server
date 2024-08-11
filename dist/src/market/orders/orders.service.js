"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../internal/crud-service");
const mongoose_2 = require("@nestjs/mongoose");
const image_upload_service_1 = require("../../image-upload/image-upload.service");
let OrdersService = class OrdersService extends crud_service_1.CRUDService {
    constructor(ordersModel, imageUploadService) {
        super(ordersModel);
        this.ordersModel = ordersModel;
        this.imageUploadService = imageUploadService;
    }
    async removeDocumentById(id) {
        const docs = await super.getAllDocuments();
        for (const doc of docs) {
            for (const product of doc.products) {
                await this.imageUploadService.removeConcreetImageFromDefaultCollection(product.image);
            }
        }
        return await super.removeDocumentById(id);
    }
};
OrdersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Orders')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model,
        image_upload_service_1.ImageUploadService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map