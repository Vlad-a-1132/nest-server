"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSizeSchema = exports.ProductSizeEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let ProductSizeEntity = class ProductSizeEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], ProductSizeEntity.prototype, "size", void 0);
ProductSizeEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], ProductSizeEntity);
exports.ProductSizeEntity = ProductSizeEntity;
const ProductSizeSchema = mongoose_1.SchemaFactory.createForClass(ProductSizeEntity);
exports.ProductSizeSchema = ProductSizeSchema;
ProductSizeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=product-size.schema.js.map