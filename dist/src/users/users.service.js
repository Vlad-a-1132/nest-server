"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const crud_service_1 = require("../internal/crud-service");
const AppError_1 = require("../internal/error/AppError");
const AppErrorTypeEnum_1 = require("../internal/error/AppErrorTypeEnum");
const utils_1 = require("../internal/utils");
let UsersService = class UsersService extends crud_service_1.CRUDService {
    constructor(usersModel) {
        super(usersModel);
        this.usersModel = usersModel;
    }
    async getNotAdminEntities() {
        return await this.usersModel.find({ isAdmin: false });
    }
    async getEntityByPhone(phone) {
        return await super.findOne({ phone: phone });
    }
    async getEntityByEmail(email) {
        return await super.findOne({ email: email });
    }
    async createDocument(userInfo) {
        const isDuplicate = await this.getEntityByEmail(userInfo.email);
        const isPhoneDuplicate = await this.getEntityByPhone(userInfo.phone);
        if (isDuplicate || isPhoneDuplicate) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_EXISTS, { errorMessage: "User exists", userMessage: "User exists" });
        }
        userInfo.isAdmin = false;
        return super.createDocument(userInfo);
    }
    async removeUserById(id) {
        return await super.removeDocumentById(id);
    }
    async updateDocumentByIdSafe(id, newUserInfo, currentPassword) {
        if (Object.keys(newUserInfo).length == 0) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_NOTHING_TO_UPDATE);
        }
        if (newUserInfo.isAdmin && newUserInfo.isAdmin == true) {
            throw new common_1.UnauthorizedException("Cannot promote to admin");
        }
        const existsUser = await this.getDocumentById(id);
        if (!existsUser) {
            throw "User dont exists";
        }
        if (currentPassword) {
            if (!utils_1.Crypto.comparePasswords(currentPassword, existsUser.password)) {
                throw new common_1.UnauthorizedException("Cannot update without passing user password");
            }
        }
        if (newUserInfo.password) {
            if (currentPassword && (currentPassword !== newUserInfo.password)) {
                newUserInfo.password = utils_1.Crypto.createPasswordHash(newUserInfo.password);
            }
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE, {
                errorMessage: 'Cannot update user password without passing an exiting or current and passed passwords not match',
                userMessage: 'Cannot update user password without passing an exiting or current and passed passwords not match'
            });
        }
        const updated = await super.updateDocumentById(id, newUserInfo);
        if (!updated) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE);
        }
        return updated;
    }
    async changePassword(id, currentPassword, newPassword) {
        return await this.updateDocumentByIdSafe(id, { password: newPassword }, currentPassword);
    }
    async updateDocumentById(id, newData) {
        throw new Error("Use UsersService::updateDocumentByIdSafe instead");
        return super.updateDocumentById(id, newData);
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('User')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map