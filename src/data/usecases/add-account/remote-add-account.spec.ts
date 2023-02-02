import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@data/test/http-client-spy';
import { RemoteAddAccount } from './remote-add-account';
import { mockNewAccount } from '@domain/test';
import { HttpStatus } from '@data/protocols';
import { EmailInUseError, ServerError } from '@data/errors';

type SutTypes = {
	httpClientSpy: HttpClientSpy;
	sut: RemoteAddAccount;
}

type SutParams = {
	url?: string;
}

const makeSut = ({ url = faker.internet.url() }: SutParams = {}): SutTypes => {
	const httpClientSpy = new HttpClientSpy();
	const sut = new RemoteAddAccount(url, httpClientSpy);

	return {
		sut,
		httpClientSpy
	};
};

describe('RemoteAddAccount', () => {
	test('Should call HttpClient with correct url, method and body', async () => {
		const url = faker.internet.url();
		const newAccount = mockNewAccount();
		const { sut, httpClientSpy } = makeSut({ url });
		await sut.add(newAccount);
		expect(httpClientSpy.url).toBe(url);
		expect(httpClientSpy.body).toEqual(newAccount);
		expect(httpClientSpy.method).toBe('POST');
	});

	test('Should throw ServerError when request fails', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: HttpStatus.serverError
		};
		const response = sut.add(mockNewAccount());
		await expect(response).rejects.toThrow(new ServerError());
	});

	test('Should throw EmailInUseError if an email has already been registered', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: HttpStatus.badRequest
		};
		const response = sut.add(mockNewAccount());
		await expect(response).rejects.toThrow(new EmailInUseError());
	});
});
