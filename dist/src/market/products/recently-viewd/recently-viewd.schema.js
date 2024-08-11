"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentlyViewdSchema = exports.RecentlyViewedEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = tslib_1.__importDefault(require("mongoose"));
let RecentlyViewedEntity = class RecentlyViewedEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "prodId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "description", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    tslib_1.__metadata("design:type", Array)
], RecentlyViewedEntity.prototype, "images", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], RecentlyViewedEntity.prototype, "price", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], RecentlyViewedEntity.prototype, "oldPrice", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "catName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    tslib_1.__metadata("design:type", String)
], RecentlyViewedEntity.prototype, "subCatId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Category', required: true }),
    tslib_1.__metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], RecentlyViewedEntity.prototype, "category", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'SubCategory' }),
    tslib_1.__metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], RecentlyViewedEntity.prototype, "subCat", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], RecentlyViewedEntity.prototype, "countInStock", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], RecentlyViewedEntity.prototype, "rating", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], RecentlyViewedEntity.prototype, "isFeatured", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    tslib_1.__metadata("design:type", Number)
], RecentlyViewedEntity.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: null }),
    tslib_1.__metadata("design:type", Array)
], RecentlyViewedEntity.prototype, "productRam", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: null }),
    tslib_1.__metadata("design:type", Array)
], RecentlyViewedEntity.prototype, "size", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: null }),
    tslib_1.__metadata("design:type", Array)
], RecentlyViewedEntity.prototype, "productWeight", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    tslib_1.__metadata("design:type", Date)
], RecentlyViewedEntity.prototype, "dateCreated", void 0);
RecentlyViewedEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], RecentlyViewedEntity);
exports.RecentlyViewedEntity = RecentlyViewedEntity;
const RecentlyViewdSchema = mongoose_1.SchemaFactory.createForClass(RecentlyViewedEntity);
exports.RecentlyViewdSchema = RecentlyViewdSchema;
RecentlyViewdSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=recently-viewd.schema.js.map