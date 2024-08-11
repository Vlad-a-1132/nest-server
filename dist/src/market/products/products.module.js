"use strict";
var ProductsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const image_upload_module_1 = require("../../image-upload/image-upload.module");
const category_module_1 = require("../category/category.module");
const category_schema_1 = require("../category/category.schema");
const sub_category_schema_1 = require("../category/sub-category.schema");
const product_rams_module_1 = require("./product-rams/product-rams.module");
const product_reviews_module_1 = require("./product-reviews/product-reviews.module");
const product_size_module_1 = require("./product-size/product-size.module");
const product_weight_module_1 = require("./product-weight/product-weight.module");
const products_controller_1 = require("./products.controller");
const products_schema_1 = require("./products.schema");
const products_service_1 = require("./products.service");
const recently_viewd_module_1 = require("./recently-viewd/recently-viewd.module");
const products_filter_service_1 = require("./products-filter.service");
let ProductsModule = ProductsModule_1 = class ProductsModule {
};
ProductsModule = ProductsModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Product', schema: products_schema_1.ProductSchema },
                { name: 'Category', schema: category_schema_1.CategorySchema },
                { name: 'SubCategory', schema: sub_category_schema_1.SubCategorySchema }
            ]),
            core_1.RouterModule.register([
                {
                    path: 'products',
                    module: ProductsModule_1,
                    children: [
                        {
                            path: 'weight',
                            module: product_weight_module_1.ProductWeightModule
                        },
                        {
                            path: 'rams',
                            module: product_rams_module_1.ProductRAMsModule
                        },
                        {
                            path: 'size',
                            module: product_size_module_1.ProductSizeModule
                        },
                        {
                            path: 'reviews',
                            module: product_reviews_module_1.ProductReviewsModule
                        },
                    ]
                }
            ]),
            product_rams_module_1.ProductRAMsModule,
            product_reviews_module_1.ProductReviewsModule,
            product_size_module_1.ProductSizeModule,
            product_weight_module_1.ProductWeightModule,
            recently_viewd_module_1.RecentlyViewdModule,
            category_module_1.CategoryModule,
            image_upload_module_1.ImageUploadModule,
        ],
        providers: [products_service_1.ProductsService, products_filter_service_1.ProductsFilteringService],
        controllers: [products_controller_1.ProductsController],
        exports: [products_service_1.ProductsService]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map