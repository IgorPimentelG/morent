import { ServerError } from '@data/errors';
import { HttpClient, HttpStatus, HttpTest } from '@data/protocols';

export class RemoteHttpTest implements HttpTest {
	constructor(
		private url: string,
		private httpClient: HttpClient
	) {}

	async test(): Promise<string> {
		const response = await this.httpClient.request({
			url: this.url,
			method: 'GET'
		});

		if (response.statusCode === HttpStatus.ok) {
			return 'The server is working';
		}
		throw new ServerError();
	}
}
