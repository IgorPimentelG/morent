import { ServerError } from '@data/errors';
import { HttpClient, HttpStatus } from '@data/protocols';
import { CarModel } from '@domain/models';
import { LoadCars } from '@domain/usecases';

export class RemoteLoadCars implements LoadCars {
	constructor(
		private url: string,
		private httpClient: HttpClient<CarModel[]>
	) {}

	async loadPopularCars (): Promise<CarModel[]> {
		const httpResponse = await this.httpClient.request({
			url: `${this.url}?category=popular`,
			method: 'GET'
		});

		switch (httpResponse.statusCode) {
		case HttpStatus.noContent: return [];
		case HttpStatus.ok: return httpResponse.body!;
		default: throw new ServerError();
		}
	}

	async loadRecomendationCars (): Promise<CarModel[]> {
		const httpResponse = await this.httpClient.request({
			url: `${this.url}?category=recomendation`,
			method: 'GET'
		});

		switch (httpResponse.statusCode) {
		case HttpStatus.noContent: return [];
		case HttpStatus.ok: return httpResponse.body!;
		default: throw new ServerError();
		}
	}
}
