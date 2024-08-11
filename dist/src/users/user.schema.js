"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserEntity = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let UserEntity = class UserEntity {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    tslib_1.__metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, type: (Array) }),
    tslib_1.__metadata("design:type", Array)
], UserEntity.prototype, "images", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], UserEntity.prototype, "isAdmin", void 0);
UserEntity = tslib_1.__decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            virtuals: true
        }
    })
], UserEntity);
exports.UserEntity = UserEntity;
const UserSchema = mongoose_1.SchemaFactory.createForClass(UserEntity);
exports.UserSchema = UserSchema;
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=user.schema.js.map