import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { handleHttpError } from "../utils/handleError";

const validationPipe = (schema: AnyZodObject) => {
	(req: Request, res: Response, next: NextFunction) => {
		const { body } = req;

		const result = schema.safeParse(body);
		if (result.success) {
			next();
		} else {
			handleHttpError(res, "Validacion fallida", result.error, 422);
		}
	};
};

export { validationPipe };
