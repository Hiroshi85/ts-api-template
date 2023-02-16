import { Response, Router } from "express";

const router: Router = Router();

router.get("/aaa", (_, res: Response) => {
    console.log("paso por mi por ser web router desde aaa xds");
    res.status(200).send("Access from aaa route");
  })

router.get("/", (_, res: Response) => {
  console.log("paso por mi por ser web router xds");
  res.status(200).send("Access from Web Router");
});

export { router };
