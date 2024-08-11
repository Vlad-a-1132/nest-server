"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesSchema = exports.ImagesEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("common/constants");
let ImagesEntity = class ImagesEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    tslib_1.__metadata("design:type", Array)
], ImagesEntity.prototype, "images", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, default: constants_1.DEFAULT_IMAGES_ENTITY_COLLECTION_NAME }),
    tslib_1.__metadata("design:type", String)
], ImagesEntity.prototype, "collectionName", void 0);
ImagesEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], ImagesEntity);
exports.ImagesEntity = ImagesEntity;
const ImagesSchema = mongoose_1.SchemaFactory.createForClass(ImagesEntity);
exports.ImagesSchema = ImagesSchema;
ImagesSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=image-upload.schema.js.map