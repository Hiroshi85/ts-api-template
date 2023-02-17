import { Express } from "express";
import { router as WebRouter } from "./web";
import { router as ApiRouter } from "./api";

function loadRoutes(app: Express) {
  app.use("/api", ApiRouter);
  app.use("/", WebRouter);
}

export { loadRoutes };
