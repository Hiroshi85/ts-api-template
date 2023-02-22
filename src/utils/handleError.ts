import { Response } from "express";

const handleHttpError = (
	res: Response,
	message = "Algo salió mal",
	details: object = {},
	code = 400
) => {
	res.status(code);
	res.send({ error: message, details });
};

export { handleHttpError };
