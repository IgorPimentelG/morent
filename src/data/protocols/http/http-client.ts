import { HttpStatus } from './http-status';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface HttpClient<T = any> {
	request: (params: HttpRequest) => Promise<HttpResponse<T> | HttpError>;
}

export interface HttpRequest {
	headers?: object;
	body?: any;
	url: string;
	method: HttpMethod;
}

export interface HttpResponse<T = any> {
	body?: T;
	statusCode: HttpStatus;
}

export interface HttpError {
	message: string;
  statusCode?: HttpStatus | number;
}
