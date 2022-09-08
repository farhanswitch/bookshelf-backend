import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import AllRoutes from "./routes";
const port: number = 4000;

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    new AllRoutes(this.app).routes();
  }
  plugins(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static("upload"));
    this.app.use(
      cors({
        origin: ["http://localhost"],
        credentials: false,
      })
    );
    dotenv.config();
  }
}

const server = new App().app;
server.listen(port);
