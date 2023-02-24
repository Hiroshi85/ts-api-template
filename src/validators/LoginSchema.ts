import Ajv, { JSONSchemaType } from "ajv";
import { LoginDTO } from "../dto/Credentials";
import addFormats from "ajv-formats";
const ajv = new Ajv();
addFormats(ajv);

const schema: JSONSchemaType<LoginDTO> = {
	type: "object",
	properties: {
		email: { type: "string", format: "email", maxLength: 30},
		password: { type: "string", minLength: 4, maxLength: 20 },
	},
	required: ["email", "password"],
	
};

const validate = ajv.compile(schema);

// Ajv.object({
// email: z.coerce.string().email(),
// password: z.coerce.string().min(4).max(20),

export { validate };
