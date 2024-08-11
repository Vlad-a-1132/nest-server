"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const products_module_1 = require("market/products/products.module");
const search_controller_1 = require("./search.controller");
let SearchModule = class SearchModule {
};
SearchModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [products_module_1.ProductsModule],
        controllers: [search_controller_1.SearchController]
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map