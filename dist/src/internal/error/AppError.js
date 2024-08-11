"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const AppErrorTypeEnum_1 = require("./AppErrorTypeEnum");
const common_1 = require("@nestjs/common");
const errors = {
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_EXISTS]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_EXISTS,
        httpStatus: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'Entity exists',
        userMessage: 'Entity exists'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_READ]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_READ,
        httpStatus: common_1.HttpStatus.NOT_FOUND,
        errorMessage: 'Cannot read entity.',
        userMessage: 'Cannot read entity.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_ENTITY_NOT_FOUND,
        httpStatus: common_1.HttpStatus.NOT_FOUND,
        errorMessage: 'Entity not found',
        userMessage: 'Unable to find the entity with the provided information.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_UPDATE,
        httpStatus: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'Cannot update selected entity.',
        userMessage: 'Cannot update selected entity.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_NOTHING_TO_UPDATE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_NOTHING_TO_UPDATE,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Nothing to update.',
        userMessage: 'Nothing to update, enter different data.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_CREATE,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Entity cannot to be created.',
        userMessage: 'Entity cannot to be created.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.INVALID_CREDENTIALS_EXCEPTION]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.INVALID_CREDENTIALS_EXCEPTION,
        httpStatus: common_1.HttpStatus.NOT_ACCEPTABLE,
        errorMessage: 'Invalid credentials.',
        userMessage: 'Invalid credentials.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_OBJECT_ID,
        httpStatus: common_1.HttpStatus.NOT_ACCEPTABLE,
        errorMessage: 'Invalid ObjectId passed.',
        userMessage: 'Invalid ObjectId passed.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.CANNOT_UPLOAD_IMAGE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.CANNOT_UPLOAD_IMAGE,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Cannot upload image.',
        userMessage: 'Cannot upload image.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_RANGE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INVALID_RANGE,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Not in ranger.',
        userMessage: 'Selected range is invalid.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INCORRECT_MODEL]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_INCORRECT_MODEL,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Incorrenct db model passed.',
        userMessage: 'Cannot interact with database.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.IMAGE_NOT_UPLOADED]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.IMAGE_NOT_UPLOADED,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Image not uploaded. Cannot proceed.',
        userMessage: 'Image not uploaded. Cannot proceed.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_DELETE]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_CANNOT_DELETE,
        httpStatus: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'Cannot delete selected entity.',
        userMessage: 'Cannot delete selected entity.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_DUPLICATE_KEY]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_DUPLICATE_KEY,
        httpStatus: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        errorMessage: 'Duplicate key.',
        userMessage: 'Duplicate key.'
    },
    [AppErrorTypeEnum_1.AppErrorTypeEnum.DB_VALIDATION_ERROR]: {
        type: AppErrorTypeEnum_1.AppErrorTypeEnum.DB_VALIDATION_ERROR,
        httpStatus: common_1.HttpStatus.BAD_REQUEST,
        errorMessage: 'Validation error.',
        userMessage: 'Validation error.'
    }
};
class AppError extends Error {
    constructor(errorCode, options) {
        super();
        if (!errorCode) {
            this.name = "Bad Request";
            this.httpStatus = common_1.HttpStatus.BAD_REQUEST;
            this.errorCode = 400;
            this.errorMessage = "Bad Request";
            this.userMessage = "Bad Request";
            return;
        }
        const error = errors[errorCode];
        if (options) {
            Object.keys(options).forEach(key => error[key] = options[key]);
        }
        if (!error)
            throw new Error('Unable to find message code error.');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.httpStatus = error.httpStatus;
        this.errorCode = errorCode;
        this.errorMessage = error.errorMessage;
        this.userMessage = error.userMessage;
    }
}
exports.AppError = AppError;
//# sourceMappingURL=AppError.js.map