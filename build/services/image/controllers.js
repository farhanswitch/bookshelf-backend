"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
class ImageController {
    constructor() {
        //config to store image
        this.imageStorage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path_1.default.join(__dirname, "../../../upload/images"));
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname + "-" + Date.now() + path_1.default.extname(file.originalname));
            },
        });
        //multer  middleware
        this.uploadImage = (0, multer_1.default)({
            storage: this.imageStorage,
            limits: {
                fileSize: 1000000,
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
    }
    upload(req, res) {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = req === null || req === void 0 ? void 0 : req.app) === null || _a === void 0 ? void 0 : _a.locals) === null || _b === void 0 ? void 0 : _b.error) {
            res
                .status(422)
                .json({ status: "Error", message: (_d = (_c = req === null || req === void 0 ? void 0 : req.app) === null || _c === void 0 ? void 0 : _c.locals) === null || _d === void 0 ? void 0 : _d.error });
        }
        else {
            const path = (_e = req === null || req === void 0 ? void 0 : req.file) === null || _e === void 0 ? void 0 : _e.path;
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
exports.default = new ImageController();
