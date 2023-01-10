import axios, { AxiosError } from 'axios';
import {
	HttpClient,
	HttpRequest,
	HttpResponse
} from '@data/protocols/http/http-client';
import { HttpStatus } from '@data/protocols';

export class AxiosClient implements HttpClient {
	async request (params: HttpRequest): Promise<HttpResponse> {
		try {
			const httpResponse = await axios.request({ ...params, data: params.body });
			return {
				statusCode: httpResponse.status,
				body: httpResponse.data,
			};
		} catch (error) {
			const axiosError = error as AxiosError;
			return {
				body: axiosError.message,
				statusCode: axiosError.status || HttpStatus.serverError,
			};
		}
	}
}
