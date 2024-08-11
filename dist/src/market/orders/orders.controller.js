"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const orders_schema_1 = require("./orders.schema");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getAllOrders(response) {
        const ordersDocs = await this.ordersService.getAllDocuments();
        response.json(ordersDocs);
    }
    async getOrderById(id, response) {
        const execRes = await this.ordersService.getDocumentById(id);
        response.json(execRes);
    }
    async getOrdersCount(response) {
        const ordersCount = await this.ordersService.getDocumentsCount();
        response.json({
            orderCount: ordersCount
        });
    }
    async createNewOrder(data, response) {
        const execRes = await this.ordersService.createDocument(data);
        response.status(200).json(execRes);
    }
    async removeOrderById(id, response) {
        const execRes = await this.ordersService.removeDocumentById(id);
        response.json({ success: true, message: "Order deleted" });
    }
    async updateOrderById(id, data) {
        const execRes = await this.ordersService.updateDocumentById(id, data);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOrders", null);
tslib_1.__decorate([
    (0, common_1.Get)('/id/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderById", null);
tslib_1.__decorate([
    (0, common_1.Get)('/count'),
    tslib_1.__param(0, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrdersCount", null);
tslib_1.__decorate([
    (0, common_1.Post)('/create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [orders_schema_1.OrdersEntity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "createNewOrder", null);
tslib_1.__decorate([
    (0, common_1.Delete)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Res)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "removeOrderById", null);
tslib_1.__decorate([
    (0, common_1.Put)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrderById", null);
OrdersController = tslib_1.__decorate([
    (0, common_1.Controller)('orders'),
    tslib_1.__metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map