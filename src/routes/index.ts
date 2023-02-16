import { Router } from "express";
import { router as WebRouter } from "./web";
import { router as ApiRouter } from "./api";

const router: Router = Router();

router.use("/api", ApiRouter);
router.use("/", WebRouter);

export { router };
