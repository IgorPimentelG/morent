import { faker } from '@faker-js/faker';
import { AxiosResponse } from 'axios';

import { HttpRequest } from '@data/protocols/http/http-client';

export const mockHttpRequest = (): HttpRequest => ({
	url: faker.internet.url(),
	method: faker.internet.httpMethod(),
	headers: { 'any-header': faker.datatype.uuid() },
	body: faker.random.word()
});

export const mockHttpResponse = (): AxiosResponse => ({
	data: faker.random.words(),
	status: 200,
	statusText: faker.random.words(),
	headers: {},
	config: {}
});
