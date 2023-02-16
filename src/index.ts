import "dotenv/config";
import express, { Express } from "express";
import { router } from "./routes";
import morgan from "morgan";

const app: Express = express();

const PORT = process.env.PORT || 3333;

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//extended logger in dev EXECUTION RUNTIME
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

//load routes
app.use(router);

//listen port
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
