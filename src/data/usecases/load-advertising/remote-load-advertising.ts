import { ServerError } from '@data/errors';
import { HttpClient } from '@data/protocols/http/http-client';
import { HttpStatus } from '@data/protocols/http/http-status';
import { AdvertisingModel } from '@domain/models';
import { LoadAdvertising } from '@domain/usecases/load-advertising';

export class RemoteLoadAdvertising implements LoadAdvertising{
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<AdvertisingModel[]>
	) {}

	async load (): Promise<AdvertisingModel[]> {
		const response = await this.httpClient.request({ url: this.url, method: 'GET' });

		switch (response.statusCode) {
		case HttpStatus.noContent:
		case HttpStatus.ok:
			return response.body || [];
		default:
			throw new ServerError();
		}
	}
}
