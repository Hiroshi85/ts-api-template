import "dotenv/config";
import express, { Express } from "express";
import { router } from "./routes";

const app: Express = express();

const PORT = process.env.PORT || 3333;

app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
