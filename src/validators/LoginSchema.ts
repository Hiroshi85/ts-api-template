import { z } from "zod";

const schema = z.object({
	email: z.coerce.string().email(),
	password: z.coerce.string().min(4).max(20),
});

export { schema };
