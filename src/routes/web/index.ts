import { Response, Router } from "express";

const router: Router = Router();

router.get("/", (_, res: Response) => {
	res.status(200).send("Access from Web Router");
});

export { router };
