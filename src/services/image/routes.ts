import { Router } from "express";

import ImageController from "./controllers";

class ImageRoutes {
  router: Router = Router();

  constructor() {
    this.router.post(
      "/upload",
      ImageController.uploadImage.single("photo"),
      ImageController.upload
    );
  }
}

export default new ImageRoutes().router;
