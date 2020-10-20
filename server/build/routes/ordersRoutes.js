"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordersController_1 = require("./../controllers/ordersController");
const express_1 = require("express");
class OrdersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", ordersController_1.ordersController.index);
        this.router.get("/:id", ordersController_1.ordersController.getOrderById);
        this.router.post("/", ordersController_1.ordersController.store);
        this.router.put("/:id", ordersController_1.ordersController.update);
        this.router.delete("/:id", ordersController_1.ordersController.delete);
    }
}
const ordersRoutes = new OrdersRoutes();
exports.default = ordersRoutes.router;
