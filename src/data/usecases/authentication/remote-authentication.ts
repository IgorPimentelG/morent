import { UnauthorizedError } from '@data/errors';
import { BadRequestError } from '@data/errors/bad-request-error';
import { HttpClient, HttpStatus } from '@data/protocols';
import { UserModel } from '@domain/models';
import { Authentication, AuthenticationParams } from '@domain/usecases';

export class RemoteAuthentication implements Authentication {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<UserModel>
	) {}

	async auth (params: AuthenticationParams): Promise<UserModel> {
		const response = await this.httpClient.request({
			url: this.url,
			method: 'POST',
			body: params
		});

		switch(response.statusCode) {
		case HttpStatus.unauthorized: throw new UnauthorizedError();
		case HttpStatus.badRequest: throw new BadRequestError();
		}

		return response.body!;
	}
}
