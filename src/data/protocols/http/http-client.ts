import { HttpStatus } from './http-status';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface HttpClient<T = any> {
	request: (params: HttpRequest) => Promise<HttpResponse<T>>;
}

export interface HttpRequest {
	headers?: object;
	body?: any;
	url: string;
	method: HttpMethod;
}

export interface HttpResponse<T = any> {
	body?: T;
	statusCode: HttpStatus | number;
}
