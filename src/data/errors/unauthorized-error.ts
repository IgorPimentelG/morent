import { HttpStatus } from '@data/protocols';

export class UnauthorizedError extends Error {
	code = HttpStatus.unauthorized;
	constructor() {
		super('Invalid credentials.');
		this.name = 'UnauthorizedError';
	}
}
