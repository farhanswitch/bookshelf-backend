import { Router } from "express";

import BookController from "./controllers";

class BookRoutes {
  router: Router = Router();

  constructor() {
    this.router.get("/", BookController.load);
    this.router.post("/add", BookController.add);
  }
}

export default new BookRoutes().router;
