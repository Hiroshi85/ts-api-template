import { Response, Router } from "express";

const router: Router = Router();

router.get("/", (_, res: Response) => {
  res.status(200).json({
    msg: "Access from API routes",
  });
});

export { router };
