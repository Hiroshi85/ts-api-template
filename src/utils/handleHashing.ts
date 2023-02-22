import bcrypt from "bcrypt";

async function encrypt(plain: string): Promise<string> {
	const hash = bcrypt.hash(plain, 10);
	return hash;
}

async function compare(plain: string, hash: string): Promise<boolean> {
	return bcrypt.compare(plain, hash);
}

export { encrypt, compare };
