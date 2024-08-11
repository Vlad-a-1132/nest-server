"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWeightSchema = exports.ProductWeightEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let ProductWeightEntity = class ProductWeightEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null }),
    tslib_1.__metadata("design:type", String)
], ProductWeightEntity.prototype, "productWeight", void 0);
ProductWeightEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], ProductWeightEntity);
exports.ProductWeightEntity = ProductWeightEntity;
const ProductWeightSchema = mongoose_1.SchemaFactory.createForClass(ProductWeightEntity);
exports.ProductWeightSchema = ProductWeightSchema;
ProductWeightSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=product-weight.schema.js.map