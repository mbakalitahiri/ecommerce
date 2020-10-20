import { productsController } from './../controllers/productsController';
 import { Router } from "express";
class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", productsController.index);
    this.router.get("/:id", productsController.getProductById);
    this.router.post("/", productsController.store);
    this.router.put("/:id", productsController.update);
    this.router.delete("/:id", productsController.delete);
  }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
