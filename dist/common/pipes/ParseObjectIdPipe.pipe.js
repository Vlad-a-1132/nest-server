"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseObjectIdPipe = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const AppError_1 = require("internal/error/AppError");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const mongoose_1 = require("mongoose");
let ParseObjectIdPipe = class ParseObjectIdPipe {
    transform(value) {
        const validObjectId = mongoose_1.Types.ObjectId.isValid(value);
        if (!validObjectId) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID);
        }
        return mongoose_1.Types.ObjectId.createFromHexString(value);
    }
};
ParseObjectIdPipe = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ParseObjectIdPipe);
exports.ParseObjectIdPipe = ParseObjectIdPipe;
//# sourceMappingURL=ParseObjectIdPipe.pipe.js.map