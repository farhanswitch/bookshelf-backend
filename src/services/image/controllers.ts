import { Request, Response } from "express";
import multer from "multer";
import path from "path";
class ImageController {
  //config to store image
  imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../../upload/images"));
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.originalname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  //multer  middleware
  uploadImage = multer({
    storage: this.imageStorage,
    limits: {
      fileSize: 1_000_000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
        req.app.locals.error =
          "Please upload an image with format png, jpg, or jpeg";
        return cb(null, false);
      }
      cb(null, true);
    },
  });
  upload(req: Request, res: Response) {
    if (req?.app?.locals?.error) {
      res
        .status(422)
        .json({ status: "Error", message: req?.app?.locals?.error });
    } else {
      const path = req?.file?.path;
      if (!path)
        res.status(400).json({
          status: "Error",
          message: "Please upload an image (png / jpg / jpeg)",
        });
      else
        res.json({
          status: "Success",
          message: "Image uploaded successfully",
          path,
        });
    }
  }
}

export default new ImageController();
