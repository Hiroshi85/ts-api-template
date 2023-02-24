import { Request, Response, NextFunction } from "express";
import { AnySchema, ValidateFunction } from "ajv";
import { handleHttpError } from "../utils/handleError";

const validationPipe = (validator: ValidateFunction<AnySchema>) => {
	(req: Request, res: Response, next: NextFunction) => {
		const { body } = req;

		const result = validator(body);
		if (result) {
			next();
		} else {
			handleHttpError(
				res,
				"Validacion fallida",
				{
					validation_errors: validator.errors?.map((it) => ({
						params: it.params,
						error: it.message,
					})),
				},
				422
			);
		}
	};
};

export { validationPipe };
