import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),

  password: Joi.string().min(4).max(20),
});

export { schema };
