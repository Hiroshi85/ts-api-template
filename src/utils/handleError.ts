import { Response } from "express";

const handleHttpError = (
  res: Response,
  message: string = "Algo salió mal",
  details: object = {},
  code: number = 400
) => {
  res.status(code);
  res.send({ error: message, details });
};

export { handleHttpError };
