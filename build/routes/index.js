"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("../services/image/routes"));
const errors_1 = __importDefault(require("../errors"));
class AllRoutes {
    constructor(app) {
        this.app = app;
    }
    routes() {
        this.app.use("/image", routes_1.default);
        this.app.use("/", errors_1.default.handler);
    }
}
exports.default = AllRoutes;
