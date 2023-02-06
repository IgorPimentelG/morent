import { faker } from '@faker-js/faker';

import { HttpClientSpy } from '@data/test';
import { RemoteRecoverAccount } from './remote-recover-account';
import { AccountNotFoundError, ServerError } from '@data/errors';
import { HttpStatus } from '@data/protocols';

type SutTypes = {
	sut: RemoteRecoverAccount;
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
	const sut = new RemoteRecoverAccount(url, httpClientSpy);

	return {
		sut,
		httpClientSpy
	};
};

describe('RecoverAccount', () => {
	test('Should call HttpClient with correct method, url and body', async () => {
		const url = faker.internet.url();
		const email = faker.internet.email();
		const { sut, httpClientSpy } = makeSut({ url });
		await sut.recoverPassword({ email });
		expect(httpClientSpy.method).toBe('POST');
		expect(httpClientSpy.url).toBe(url);
		expect(httpClientSpy.body).toEqual({ email });
	});

	test('Should throw AccountNotFound when requests return 404', async () => {
		const email = faker.internet.email();
		const httpClientSpy =  new HttpClientSpy();
		httpClientSpy.response = {
			statusCode: HttpStatus.notFound
		};
		const { sut } = makeSut({ httpClientSpy });
		const response = sut.recoverPassword({ email });
		await expect(response).rejects.toThrow(new AccountNotFoundError());
	});

	test('Should throw ServerError when request fails', async () => {
		const email = faker.internet.email();
		const httpClientSpy =  new HttpClientSpy();
		httpClientSpy.response = {
			statusCode: HttpStatus.serverError
		};
		const { sut } = makeSut({ httpClientSpy });
		const response = sut.recoverPassword({ email });
		await expect(response).rejects.toThrow(new ServerError());
	});
});
