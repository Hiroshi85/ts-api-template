import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { handleHttpError } from "../utils/handleError";

Joi.object();

const validationPipe = (schema: Joi.ObjectSchema) => {
  (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const { error } = schema.validate(body, {
      //stripUnknown: true,
      abortEarly: false,
    });
    const valid = error === null;
    if (valid) {
      next();
    } else {
      handleHttpError(res, "Validacion fallida", error, 400);
    }
  };
};

export { validationPipe };
