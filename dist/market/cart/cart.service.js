"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const crud_service_1 = require("internal/crud-service");
const mongoose_2 = require("@nestjs/mongoose");
let CartService = class CartService extends crud_service_1.CRUDService {
    constructor(cartModel) {
        super(cartModel);
        this.cartModel = cartModel;
    }
};
CartService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_2.InjectModel)('Cart')),
    tslib_1.__metadata("design:paramtypes", [mongoose_1.Model])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map