import { mockAdvertising } from '@domain/test/mock-advertising';
import { HttpStatus } from '@data/protocols/http/http-status';
import {
	HttpClient,
	HttpMethod,
	HttpRequest,
	HttpResponse
} from '@data/protocols/http/http-client';

export class HttpClientSpy implements HttpClient {
	headers?: object;
	body?: any;
	url?: string;
	method?: HttpMethod;
	response: HttpResponse = {
		body: mockAdvertising(),
		statusCode: HttpStatus.ok
	};

	async request (params: HttpRequest): Promise<HttpResponse> {
		this.headers = params.headers;
		this.body = params.body;
		this.url = params.url;
		this.method = params.method;
		return this.response;
	}
}

