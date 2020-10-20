"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsController_1 = require("./../controllers/productsController");
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", productsController_1.productsController.index);
        this.router.get("/:id", productsController_1.productsController.getProductById);
        this.router.post("/", productsController_1.productsController.store);
        this.router.put("/:id", productsController_1.productsController.update);
        this.router.delete("/:id", productsController_1.productsController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
