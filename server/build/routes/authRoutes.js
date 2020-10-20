"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("./../controllers/authController");
const express_1 = require("express");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post("/", authController_1.authController.store);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
