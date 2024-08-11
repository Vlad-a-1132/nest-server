"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSchema = exports.CartEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let CartEntity = class CartEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], CartEntity.prototype, "productTitle", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], CartEntity.prototype, "image", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], CartEntity.prototype, "rating", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], CartEntity.prototype, "price", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], CartEntity.prototype, "quantity", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], CartEntity.prototype, "subTotal", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], CartEntity.prototype, "productId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], CartEntity.prototype, "countInStock", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], CartEntity.prototype, "userId", void 0);
CartEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], CartEntity);
exports.CartEntity = CartEntity;
const CartSchema = mongoose_1.SchemaFactory.createForClass(CartEntity);
exports.CartSchema = CartSchema;
CartSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=cart.schema.js.map