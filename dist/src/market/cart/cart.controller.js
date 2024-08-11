"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const cart_schema_1 = require("./cart.schema");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async getAllCarts(response) {
        const execRes = await this.cartService.getAllDocuments();
        if (execRes) {
            response.status(200).json(execRes);
        }
        throw new common_1.NotFoundException("Cannot retrive orders");
    }
    async getCartById(id, response) {
        const execRes = await this.cartService.getDocumentById(id);
        if (execRes) {
            response.status(200).json(execRes);
        }
        throw new common_1.NotFoundException('The cart with the given ID was not found.');
    }
    async getCartsCount(response) {
        const execRes = await this.cartService.getDocumentsCount();
        if (execRes) {
            response.status(200).json({
                orderCount: execRes
            });
        }
        throw new common_1.NotFoundException("Cannot retrive carts count");
    }
    async createNewCart(data, response) {
        const execRes = await this.cartService.createDocument(data);
        if (execRes) {
            response.status(200).json(execRes);
        }
        throw new common_1.BadRequestException("New cart dont created");
    }
    async removeCartById(id, response) {
        const execRes = await this.cartService.removeDocumentById(id);
        if (execRes) {
            response.status(200).json({ success: true, message: "Cart deleted" });
        }
        throw new common_1.NotFoundException("Cart not found");
    }
    async updateOrderById(id, data) {
        const execRes = await this.cartService.updateDocumentById(id, data);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "getAllCarts", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "getCartById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/get/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "getCartsCount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [cart_schema_1.CartEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "createNewCart", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "removeCartById", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CartController.prototype, "updateOrderById", null);
CartController = tslib_1.__decorate([
    (0, common_1.Controller)('cart'),
    tslib_1.__metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map