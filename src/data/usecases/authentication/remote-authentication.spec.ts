import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@data/test';
import { RemoteAuthentication } from '@data/usecases';
import { mockCredentials, mockUser } from '@domain/test';
import { HttpStatus } from '@data/protocols';
import { UnauthorizedError, BadRequestError } from '@data/errors';

type SutTypes = {
	httpClientSpy: HttpClientSpy;
	sut: RemoteAuthentication;
}

type SutParams = {
	url?: string;
	httpClientSpy?: HttpClientSpy;
}

const makeSut = ({
	url = faker.internet.url(),
	httpClientSpy = new HttpClientSpy()
}: SutParams = {}): SutTypes => {
	const sut = new RemoteAuthentication(url, httpClientSpy);
	return {
		sut,
		httpClientSpy
	};
};

describe('RemoteAuthentication', () => {
	test('Should call HttpClient with correct method, params and url', async () => {
		const credentails = mockCredentials();
		const url = faker.internet.url();
		const { sut, httpClientSpy } = makeSut({ url });
		await sut.auth(credentails);

		expect(httpClientSpy.method).toBe('POST');
		expect(httpClientSpy.url).toBe(url);
		expect(httpClientSpy.body).toBe(credentails);
	});

	test('Should return AuthorizedError if credentails are invalid', async () => {
		const httpClientSpy = new HttpClientSpy();
		httpClientSpy.response.statusCode = HttpStatus.unauthorized;
		const { sut } = makeSut({ httpClientSpy });
		const response = sut.auth(mockCredentials());
		await expect(response).rejects.toThrow(new UnauthorizedError());
	});

	test('Shoud return BadRequestError if the request is invalid', async () => {
		const httpClientSpy = new HttpClientSpy();
		httpClientSpy.response.statusCode = HttpStatus.badRequest;
		const { sut } = makeSut({ httpClientSpy });
		const response = sut.auth(mockCredentials());
		await expect(response).rejects.toThrow(new BadRequestError());
	});

	test('Shoud return an UserModel when credentials are valid', async () => {
		const user = mockUser();
		const httpClientSpy = new HttpClientSpy();
		httpClientSpy.response = {
			body: user,
			statusCode: HttpStatus.ok
		};
		const { sut } = makeSut({ httpClientSpy });
		const response = await sut.auth(mockCredentials());
		expect(response).toEqual(user);
	});
});
