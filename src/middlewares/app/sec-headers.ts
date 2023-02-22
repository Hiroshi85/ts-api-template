import helmet from "helmet";

const helmetOptions = [
	helmet.expectCt(),
	helmet.frameguard(),
	helmet.hsts(),
	helmet.noSniff(),
	helmet.permittedCrossDomainPolicies(),
];

export { helmetOptions };
