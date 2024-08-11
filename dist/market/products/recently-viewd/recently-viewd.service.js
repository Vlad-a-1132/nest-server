"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentlyViewdService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
let RecentlyViewdService = class RecentlyViewdService extends crud_service_1.CRUDService {
    constructor(recentlyViewdModel) {
        super(recentlyViewdModel);
        this.recentlyViewdModel = recentlyViewdModel;
    }
    async getAllDocuments() {
        return await this.recentlyViewdModel.find().populate("category subCat").exec();
    }
    async getAllDocumentsByQuery(query) {
        return await this.recentlyViewdModel.find(query).populate("category subCat").exec();
    }
    async getEntriesByPage(query, page, perPage) {
        return await this.recentlyViewdModel
            .find(query)
            .populate("category subCat")
            .skip((page - 1) * perPage)
            .limit(perPage)
            .exec();
    }
};
RecentlyViewdService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('RecentlyViewd')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], RecentlyViewdService);
exports.RecentlyViewdService = RecentlyViewdService;
//# sourceMappingURL=recently-viewd.service.js.map