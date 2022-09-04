"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const port = 4000;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        new routes_1.default(this.app).routes();
    }
    plugins() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("upload"));
        this.app.use((0, cors_1.default)({
            origin: ["http://localhost"],
            credentials: false,
        }));
    }
}
const server = new App().app;
server.listen(port);
