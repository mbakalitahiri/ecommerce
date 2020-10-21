import { searchController } from '../controllers/searchController';
  import { Router } from "express";
class SearchRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get("/", searchController.index); 
  }
}

const searchRoutes = new SearchRoutes();
export default searchRoutes.router;
