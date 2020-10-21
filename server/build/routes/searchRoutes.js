"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchController_1 = require("../controllers/searchController");
const express_1 = require("express");
class SearchRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", searchController_1.searchController.index);
    }
}
const searchRoutes = new SearchRoutes();
exports.default = searchRoutes.router;
