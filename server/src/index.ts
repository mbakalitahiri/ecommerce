import express, { Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import productRoutes from "./routes/productsRoutes";
import ordersRoutes from './routes/ordersRoutes'
import authRoutes from './routes/authRoutes'
import morgan from "morgan";
import searchRoutes from './routes/searchRoutes'
import querystring from 'querystring';


import cors from "cors";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }
  config(): void {
    this.app.set("port", process.env.port || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/v1/products/", productRoutes);
    this.app.use("/api/v1/orders/", ordersRoutes);
    this.app.use("/api/v1/login/", authRoutes);
    this.app.use("/api/v1/search/", searchRoutes);


  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`servidor corriendo en el servidor ${this.app.get("port")}`);
    });
  }
}

const server = new Server();
server.start();
