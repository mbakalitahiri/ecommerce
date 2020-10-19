"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const ordersRoutes_1 = __importDefault(require("./routes/ordersRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.port || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/api/v1/products/", productsRoutes_1.default);
        this.app.use("/api/v1/orders/", ordersRoutes_1.default);
        this.app.use("/api/v1/login/", authRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`servidor corriendo en el servidor ${this.app.get("port")}`);
        });
    }
}
const server = new Server();
server.start();
