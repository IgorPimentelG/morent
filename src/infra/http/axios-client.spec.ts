import axios from 'axios';
import { faker } from '@faker-js/faker';

import { mockHttpRequest, mockHttpResponse, mockAxios } from '@infra/test';
import { AxiosClient } from './axios-client';

jest.mock('axios');

type SutTypes = {
	sut: AxiosClient;
	mockedAxios: jest.Mocked<typeof axios>;
}

const makeSut = (): SutTypes => {
	const sut = new AxiosClient();
	const mockedAxios = mockAxios();
	return {
		sut,
		mockedAxios
	};
};

describe('AxiosClient', () => {
	test('Should call axios.request with correct params', async () => {
		const httpRequest = mockHttpRequest();
		const { sut, mockedAxios } = makeSut();
		await sut.request(httpRequest);
		expect(mockedAxios.request).toHaveBeenCalledWith({
			...httpRequest,
			data: httpRequest.body
		});
	});

	test('Should return response successfully', async () => {
		const { sut, mockedAxios } = makeSut();
		const response = await sut.request(mockHttpRequest());
		const httpResponse = await mockedAxios.request.mock.results[0].value;
		expect(response).toEqual({
			statusCode: httpResponse.status,
			body: httpResponse.data
		});
	});

	test('Should return an error when the request fails', async () => {
		const { sut, mockedAxios } = makeSut();
		const httpError = {
			message: faker.random.words(),
			status: 500
		};
		mockedAxios.request.mockRejectedValueOnce(httpError);
		const httpResponse = await sut.request(mockHttpRequest());
		expect(httpResponse).toEqual({
			message: httpError.message,
			statusCode: httpError.status
		});
	});
});
