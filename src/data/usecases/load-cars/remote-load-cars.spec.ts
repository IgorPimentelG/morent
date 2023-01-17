import { RemoteLoadCars } from './remote-load-cars';
import { HttpClientSpy } from '@data/test';

import { faker } from '@faker-js/faker';
import { HttpStatus } from '@data/protocols';
import { mockCars } from '@domain/test';
import { ServerError } from '@data/errors';

type SutTypes = {
	remoteLoadCars: RemoteLoadCars;
	httpClientSpy: HttpClientSpy;
}

type SutParams = {
	url?: string;
	httpClientSpy?: HttpClientSpy;
}

const makeSut = ({
	url = faker.internet.url(),
	httpClientSpy = new HttpClientSpy()
}: SutParams = {}): SutTypes => {
	const remoteLoadCars = new RemoteLoadCars(url, httpClientSpy);
	return {
		httpClientSpy,
		remoteLoadCars
	};
};

describe('RemoteLoadCars', () => {
	describe('LoadPopularCars', () => {
		test('Should call HttpClient with correct URL and method', async () => {
			const url = faker.internet.url();
			const { remoteLoadCars, httpClientSpy } = makeSut({ url });
			await remoteLoadCars.loadPopularCars();
			expect(httpClientSpy.url).toBe(`${url}?category=popular`);
			expect(httpClientSpy.method).toBe('GET');
		});

		test('Should return an empty list when there are no cars', async () => {
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				statusCode: HttpStatus.noContent
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const httpResponse = await remoteLoadCars.loadPopularCars();
			expect(httpResponse).toEqual([]);
		});

		test('Should return a list of cars successfully', async () => {
			const cars = mockCars();
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				body: cars,
				statusCode: HttpStatus.ok
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const httpResponse = await remoteLoadCars.loadPopularCars();
			expect(httpResponse).toEqual(cars);
		});

		test('Should thow ServerError when return status code 500', async () => {
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				statusCode: HttpStatus.serverError
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const promise = remoteLoadCars.loadPopularCars();
			await expect(promise).rejects.toThrow(new ServerError());
		});
	});

	describe('LoadRecomendationCars', () => {
		test('Should call HttpClient with correct URL and method', async () => {
			const url = faker.internet.url();
			const { remoteLoadCars, httpClientSpy } = makeSut({ url });
			await remoteLoadCars.loadRecomendationCars();
			expect(httpClientSpy.url).toBe(`${url}?category=recomendation`);
			expect(httpClientSpy.method).toBe('GET');
		});

		test('Should return an empty list when there are no cars', async () => {
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				statusCode: HttpStatus.noContent
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const httpResponse = await remoteLoadCars.loadRecomendationCars();
			expect(httpResponse).toEqual([]);
		});

		test('Should return a list of cars successfully', async () => {
			const cars = mockCars();
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				body: cars,
				statusCode: HttpStatus.ok
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const httpResponse = await remoteLoadCars.loadRecomendationCars();
			expect(httpResponse).toEqual(cars);
		});

		test('Should thow ServerError when return status code 500', async () => {
			const httpClientSpy = new HttpClientSpy();
			httpClientSpy.response = {
				statusCode: HttpStatus.serverError
			};
			const { remoteLoadCars } = makeSut({ httpClientSpy });
			const promise = remoteLoadCars.loadRecomendationCars();
			await expect(promise).rejects.toThrow(new ServerError());
		});
	});
});
