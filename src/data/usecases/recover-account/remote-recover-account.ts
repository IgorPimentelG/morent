import { AccountNotFoundError, ServerError } from '@data/errors';
import { HttpClient, HttpStatus } from '@data/protocols';
import { RecoverAccount, RecoverAccountParams } from '@domain/usecases';

class RemoteRecoverAccount implements RecoverAccount {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient
	) {}

	async recoverPassword (params: RecoverAccountParams): Promise<void> {
		const response = await this.httpClient.request({
			url: this.url,
			method: 'POST',
			body: params
		});

		switch (response.statusCode) {
		case HttpStatus.notFound: throw new AccountNotFoundError();
		case HttpStatus.serverError: throw new ServerError();
		}
	}

}

export { RemoteRecoverAccount };
