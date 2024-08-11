"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const AppError_1 = require("./error/AppError");
const AppErrorTypeEnum_1 = require("./error/AppErrorTypeEnum");
let CRUDService = class CRUDService {
    constructor(model) {
        this.model = model;
        for (const modelName of Object.keys(model.collection.conn.models)) {
            if (model.collection.conn.models[modelName] === this.model) {
                this.modelName = modelName;
                break;
            }
        }
    }
    async findOne(conditions, projection = {}, options = {}) {
        try {
            return await this.model.findOne(conditions, projection, options);
        }
        catch (e) {
            console.log(e);
            throw new common_1.InternalServerErrorException(e);
        }
    }
    async getAllDocuments() {
        try {
            return await this.model.find().exec();
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_READ, {
                errorMessage: error
            });
        }
    }
    async getDocumentsCount() {
        try {
            return await this.model.countDocuments();
        }
        catch (error) {
            console.log(error);
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_READ, {
                errorMessage: error
            });
        }
    }
    async getDocumentById(id) {
        try {
            const entity = await this.model.findById(id);
            if (!entity) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND);
            }
            return entity;
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.name) === 'CastError') {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID, {
                    errorMessage: error
                });
            }
            else if ((error === null || error === void 0 ? void 0 : error.code) === 11000) {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_DUPLICATE_KEY, {
                    errorMessage: error
                });
            }
            throw error;
        }
    }
    async createDocument(data) {
        try {
            return await this.model.create(data);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE, {
                    errorMessage: Object.values(error.errors).join(' ')
                });
            }
            throw error;
        }
    }
    async removeDocumentById(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_DELETE, {
                    errorMessage: Object.values(error.errors).join(' ')
                });
            }
            throw error;
        }
    }
    async updateDocumentById(id, newData) {
        try {
            await this.model.findByIdAndUpdate(id, newData);
            return this.getDocumentById(id);
        }
        catch (error) {
            if ((error === null || error === void 0 ? void 0 : error.name) === 'ValidationError') {
                throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE, {
                    errorMessage: Object.values(error.errors).join(' ')
                });
            }
            throw error;
        }
    }
};
CRUDService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CRUDService);
exports.CRUDService = CRUDService;
//# sourceMappingURL=crud-service.js.map