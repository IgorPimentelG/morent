import { HttpStatus } from '@data/protocols';

export class BadRequestError extends Error {
	code = HttpStatus.badRequest;
	constructor() {
		super('Something went wrong. Please try again.');
		this.name = 'BadRequestError';
	}
}
