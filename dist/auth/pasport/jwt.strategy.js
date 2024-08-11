"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const users_service_1 = require("users/users.service");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const AppError_1 = require("internal/error/AppError");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'strategy-jwt') {
    constructor(configService, usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.getOrThrow("jwt.token")
        });
        this.configService = configService;
        this.usersService = usersService;
    }
    async validate(payload) {
        console.log("Jwt strat payload: " + JSON.stringify(payload, null, '\n'));
        const user = await this.usersService.getDocumentById(payload.id);
        if (!user) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.INVALID_CREDENTIALS_EXCEPTION);
        }
        return payload;
    }
};
JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService, typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map