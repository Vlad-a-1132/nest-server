"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewsSchema = exports.ProductReviewsEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let ProductReviewsEntity = class ProductReviewsEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ProductReviewsEntity.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ProductReviewsEntity.prototype, "customerName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], ProductReviewsEntity.prototype, "customerId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: "" }),
    tslib_1.__metadata("design:type", String)
], ProductReviewsEntity.prototype, "review", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 1 }),
    tslib_1.__metadata("design:type", Number)
], ProductReviewsEntity.prototype, "customerRating", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], ProductReviewsEntity.prototype, "dateCreated", void 0);
ProductReviewsEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], ProductReviewsEntity);
exports.ProductReviewsEntity = ProductReviewsEntity;
const ProductReviewsSchema = mongoose_1.SchemaFactory.createForClass(ProductReviewsEntity);
exports.ProductReviewsSchema = ProductReviewsSchema;
ProductReviewsSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=product-reviews.schema.js.map