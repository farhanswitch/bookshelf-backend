import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

import BadRequestError from "../../errors/badRequest";
import ValidationFailedError from "../../errors/validationFailed";
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
  uploadImage = (req: Request, res: Response, next: NextFunction) => {
    const uploadingImage = multer({
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
    }).single("photo");

    uploadingImage(req, res, (err) => {
      if (err) next(err);
      else next();
    });
  };
  upload(req: Request, res: Response, next: NextFunction) {
    try {
      if (req?.app?.locals?.error) {
        throw new ValidationFailedError(
          "Invalid file format",
          req?.app?.locals?.error
        );
      } else {
        const path = req?.file?.path;
        if (!path)
          throw new BadRequestError(
            "Please upload an image (png / jpg / jpeg)"
          );
        else
          res.status(201).json({
            status: "Success",
            message: "Image uploaded successfully",
            path,
          });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new ImageController();
