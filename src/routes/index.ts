import { Application } from "express";

import ImageRoutes from "../services/image/routes";
import BookRoutes from "../services/book/routes";
import errorHandling from "../errors";

class AllRoutes {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  routes() {
    this.app.use("/image", ImageRoutes);
    this.app.use("/book", BookRoutes);
    this.app.use("/", errorHandling.handler);
  }
}

export default AllRoutes;
