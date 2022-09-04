"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
class ImageRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.post("/upload", controllers_1.default.uploadImage.single("photo"), controllers_1.default.upload);
    }
}
exports.default = new ImageRoutes().router;
