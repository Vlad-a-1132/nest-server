"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentlyViewdModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const recently_viewd_schema_1 = require("./recently-viewd.schema");
const recently_viewd_service_1 = require("./recently-viewd.service");
let RecentlyViewdModule = class RecentlyViewdModule {
};
RecentlyViewdModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'RecentlyViewd', schema: recently_viewd_schema_1.RecentlyViewdSchema }
            ])
        ],
        providers: [recently_viewd_service_1.RecentlyViewdService],
        exports: [recently_viewd_service_1.RecentlyViewdService]
    })
], RecentlyViewdModule);
exports.RecentlyViewdModule = RecentlyViewdModule;
//# sourceMappingURL=recently-viewd.module.js.map