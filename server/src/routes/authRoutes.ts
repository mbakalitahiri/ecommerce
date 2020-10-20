import { authController } from './../controllers/authController';
import { ordersController } from './../controllers/ordersController';
  import { Router } from "express";
class AuthRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
     this.router.post("/", authController.store);
 
  }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
