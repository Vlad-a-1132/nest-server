"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cart_schema_1 = require("./cart.schema");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
let CartModule = class CartModule {
};
CartModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Cart', schema: cart_schema_1.CartSchema }
            ])
        ],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService]
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map