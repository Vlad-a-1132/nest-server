"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBannerController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const home_banner_service_1 = require("./home-banner.service");
let HomeBannerController = class HomeBannerController {
    constructor(homeBannerService) {
        this.homeBannerService = homeBannerService;
    }
    async getAll(response) {
        const entries = await this.homeBannerService.getAllDocuments();
        return response.status(200).json(entries);
    }
    async getEntryById(id, response) {
        const doc = await this.homeBannerService.getDocumentById(id);
        return response.status(200).send(doc);
    }
    async createNewEntry(body, response) {
        await this.homeBannerService.createDocument({ images: body.images });
        return response.status(200).json({ success: true, message: "Images added" });
    }
    async removeById(id, response) {
        await this.homeBannerService.removeDocumentById(id);
        return response.json({ success: true, message: "Slide deleted" });
    }
    async updateEntry(id, body, response) {
        const updatedDoc = await this.homeBannerService.updateDocumentById(id, { images: body.images });
        return response.send(updatedDoc);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeBannerController.prototype, "getAll", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeBannerController.prototype, "getEntryById", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeBannerController.prototype, "createNewEntry", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeBannerController.prototype, "removeById", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__param(2, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeBannerController.prototype, "updateEntry", null);
HomeBannerController = tslib_1.__decorate([
    (0, common_1.Controller)('home-banner'),
    tslib_1.__metadata("design:paramtypes", [home_banner_service_1.HomeBannerService])
], HomeBannerController);
exports.HomeBannerController = HomeBannerController;
//# sourceMappingURL=home-banner.controller.js.map