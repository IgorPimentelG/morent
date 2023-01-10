import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@data/test/http-client-spy';
import { RemoteLoadAdvertising } from './remote-load-advertising';
import { ServerError } from '@data/errors';
import { HttpStatus } from '@data/protocols/http/http-status';
import { mockAdvertising } from '@domain/test/mock-advertising';

type SutTypes = {
	sut: RemoteLoadAdvertising;
	httpClientSpy: HttpClientSpy
}

type SutParams = {
	url?: string;
}

const makeSut = ({ url = faker.internet.url() }: SutParams = {}): SutTypes => {
	const httpClientSpy = new HttpClientSpy();
	const sut = new RemoteLoadAdvertising(url, httpClientSpy);
	return {
		sut,
		httpClientSpy
	};
};

describe('RemoteLoadAdvertising', () => {
	test('Should call HttpClient with correct URL and Method', async () => {
		const url = faker.internet.url();
		const { sut, httpClientSpy } = makeSut({ url });
		await sut.load();
		expect(httpClientSpy.url).toBe(url);
		expect(httpClientSpy.method).toBe('GET');
	});

	test('Should throw ServerError when request fails', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: HttpStatus.serverError
		};
		const httpResponse = sut.load();
		await expect(httpResponse).rejects.toThrow(new ServerError());
	});

	test('Should returns an empty advertising list when there is no content', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: HttpStatus.noContent
		};
		const httpResponse = await sut.load();
		expect(httpResponse).toEqual([]);
	});

	test('Should returns an advertising list on success', async () => {
		const advertisings = mockAdvertising();
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			body: advertisings,
			statusCode: HttpStatus.ok
		};
		const httpResponse = await sut.load();
		expect(httpResponse).toBe(advertisings);
	});
});
