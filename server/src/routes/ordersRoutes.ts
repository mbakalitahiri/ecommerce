import { ordersController } from './../controllers/ordersController';
  import { Router } from "express";
class OrdersRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", ordersController.index);
    this.router.get("/:id", ordersController.getOrderById);
    this.router.post("/", ordersController.store);
    this.router.put("/:id", ordersController.update);
    this.router.delete("/:id", ordersController.delete);
  }
}

const ordersRoutes = new OrdersRoutes();
export default ordersRoutes.router;
