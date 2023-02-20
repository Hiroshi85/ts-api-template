import "dotenv/config";
import express, { Express } from "express";

import { loadRoutes } from "./routes";
import morgan from "morgan";
import * as AppMiddlewares from "./middlewares/app";

const app: Express = express();

//App Middlewares (for all routes)

app.use(
  AppMiddlewares.helmetOptions,
  express.json(),
  express.urlencoded({ extended: true })
);

//extended logger in dev EXECUTION RUNTIME
if (process.env.NODE_ENV !== "prod") {
  app.use(morgan("dev"));
}

//load routes
loadRoutes(app);

export { app };
