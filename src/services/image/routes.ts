import { Router } from "express";

import ImageController from "./controllers";

class ImageRoutes {
  router: Router = Router();

  constructor() {
    this.router.post(
      "/upload",
      ImageController.uploadImage,
      ImageController.upload
    );
  }
}

export default new ImageRoutes().router;
