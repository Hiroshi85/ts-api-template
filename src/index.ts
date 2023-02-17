import "dotenv/config";
import express, { Express } from "express";
import { loadRoutes } from "./routes";
import morgan from "morgan";
import * as AppMiddlewares from "./middlewares/app";

const app: Express = express();

const PORT = process.env.PORT || 3333;

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

//listen port
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
