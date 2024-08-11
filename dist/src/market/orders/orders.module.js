"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const orders_service_1 = require("./orders.service");
const orders_schema_1 = require("./orders.schema");
const orders_controller_1 = require("./orders.controller");
const image_upload_module_1 = require("../../image-upload/image-upload.module");
let OrdersModule = class OrdersModule {
};
OrdersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [orders_service_1.OrdersService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Orders', schema: orders_schema_1.OrdersSchema },
            ]),
            image_upload_module_1.ImageUploadModule
        ],
        controllers: [orders_controller_1.OrdersController]
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map