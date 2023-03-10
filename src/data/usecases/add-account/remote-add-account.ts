import { EmailInUseError, ServerError } from '@data/errors';
import { HttpClient, HttpStatus } from '@data/protocols';
import { AddAccount, AddAccountParams } from '@domain/usecases';

export class RemoteAddAccount implements AddAccount {

	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) { }

	async add (params: AddAccountParams): Promise<void> {
		const response = await this.httpClient.request({
			url: this.url,
			method: 'POST',
			body: params
		});

		switch (response.statusCode) {
		case HttpStatus.serverError: throw new ServerError();
		case HttpStatus.badRequest: throw new EmailInUseError();
		}
	}
}
