"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersSchema = exports.OrdersEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let OrdersEntity = class OrdersEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "address", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "pincode", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "paymentId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "userid", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [{
                productId: { type: String },
                productTitle: { type: String },
                quantity: { type: Number },
                price: { type: Number },
                image: { type: String },
                subTotal: { type: Number },
            }] }),
    tslib_1.__metadata("design:type", Array)
], OrdersEntity.prototype, "products", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: "pending" }),
    tslib_1.__metadata("design:type", String)
], OrdersEntity.prototype, "status", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], OrdersEntity.prototype, "date", void 0);
OrdersEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], OrdersEntity);
exports.OrdersEntity = OrdersEntity;
const OrdersSchema = mongoose_1.SchemaFactory.createForClass(OrdersEntity);
exports.OrdersSchema = OrdersSchema;
OrdersSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=orders.schema.js.map