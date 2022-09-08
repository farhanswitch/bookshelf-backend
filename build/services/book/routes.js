"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
class BookRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/", controllers_1.default.load);
        this.router.post("/add", controllers_1.default.add);
    }
}
exports.default = new BookRoutes().router;
