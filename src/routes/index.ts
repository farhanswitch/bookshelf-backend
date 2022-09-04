import { Application } from "express";

import ImageRoutes from "../services/image/routes";

class AllRoutes {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  routes() {
    this.app.use("/image", ImageRoutes);
  }
}

export default AllRoutes;
