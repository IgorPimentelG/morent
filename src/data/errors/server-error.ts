import { HttpStatus } from '@data/protocols/http/http-status';

export class ServerError extends Error {
	code = HttpStatus.serverError;
	constructor() {
		super('A server error has occurred. Try again later.');
		this.name = 'ServerError';
	}
}
