"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const ParseObjectIdPipe_pipe_1 = require("../common/pipes/ParseObjectIdPipe.pipe");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getAllUsers(response) {
        this.usersService.getAllDocuments()
            .then((users) => response.json(users));
    }
    async getUsersCount(response) {
        this.usersService.getDocumentsCount()
            .then((count) => response.json({ userCount: count }));
    }
    async getUserById(id, response) {
        this.usersService.getDocumentById(id)
            .then((user) => response.json(user));
    }
    async deleteUserById(id, response) {
        this.usersService.removeUserById(id)
            .then(() => response.json({ success: true }));
    }
    async updateUserById(id, data, response) {
        this.usersService.updateDocumentByIdSafe(id, data, data.password)
            .then(() => response.json({ success: true }));
    }
    async changePassword(id, data, response) {
        const { password, newPass } = data;
        const updatedUser = await this.usersService.changePassword(id, password, newPass);
        response.send(updatedUser);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUsersCount", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/changePassword/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id', ParseObjectIdPipe_pipe_1.ParseObjectIdPipe)),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map