"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.AccessOutput = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const utils_1 = require("internal/utils");
const AppErrorTypeEnum_1 = require("internal/error/AppErrorTypeEnum");
const AppError_1 = require("internal/error/AppError");
class AccessOutput {
    constructor(access_token, user) {
        this.access_token = access_token;
        this.user = user;
    }
}
exports.AccessOutput = AccessOutput;
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async signin(email, password) {
        const user = await this.validateUser(email, password);
        const token = this.generateToken(user);
        return new AccessOutput(token, user);
    }
    async signup(userInfo) {
        const { password } = userInfo;
        const passwordHash = utils_1.Crypto.createPasswordHash(password);
        const newUser = await this.usersService.createDocument(Object.assign(Object.assign({}, userInfo), { password: passwordHash }));
        const token = this.generateToken(newUser);
        return new AccessOutput(token, newUser);
    }
    generateToken(user) {
        const payload = {
            email: user.email,
            id: user.id,
            isAdmin: user.isAdmin || false
        };
        return this.jwtService.sign(payload);
    }
    async validateUser(email, pass) {
        const user = await this.usersService.getEntityByEmail(email);
        if (!user || !utils_1.Crypto.comparePasswords(pass, user.password)) {
            throw new AppError_1.AppError(AppErrorTypeEnum_1.AppErrorTypeEnum.INVALID_CREDENTIALS_EXCEPTION);
        }
        return user;
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map