"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRAMsSchema = exports.ProductRAMsEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let ProductRAMsEntity = class ProductRAMsEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], ProductRAMsEntity.prototype, "productRam", void 0);
ProductRAMsEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], ProductRAMsEntity);
exports.ProductRAMsEntity = ProductRAMsEntity;
const ProductRAMsSchema = mongoose_1.SchemaFactory.createForClass(ProductRAMsEntity);
exports.ProductRAMsSchema = ProductRAMsSchema;
ProductRAMsSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=product-rams.schema.js.map