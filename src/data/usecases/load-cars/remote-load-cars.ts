import { ServerError } from '@data/errors';
import { HttpClient, HttpStatus } from '@data/protocols';
import { CarModel } from '@domain/models';
import { LoadCards } from '@domain/usecases';

export class RemoteLoadCars implements LoadCards {
	constructor(
		private url: string,
		private httpClient: HttpClient<CarModel[]>
	) {}

	async loadPopularCars (): Promise<CarModel[]> {
		const httpResponse = await this.httpClient.request({ url: this.url, method: 'GET' });

		switch (httpResponse.statusCode) {
		case HttpStatus.noContent: return [];
		case HttpStatus.ok: return httpResponse.body!;
		default: throw new ServerError();
		}
	}

	async loadRecomendationCars (): Promise<CarModel[]> {
		return [];
	}
}
