import axios, { AxiosError } from 'axios';
import {
	HttpClient,
	HttpError,
	HttpRequest,
	HttpResponse
} from '@data/protocols/http/http-client';

export class AxiosClient implements HttpClient {
	async request (params: HttpRequest): Promise<HttpResponse | HttpError> {
		try {
			const httpResponse = await axios.request({ ...params, data: params.body });
			return {
				statusCode: httpResponse.status,
				body: httpResponse.data,
			};
		} catch (error) {
			const axiosError = error as AxiosError;
			return {
				message: axiosError.message,
				statusCode: axiosError.status,
			};
		}
	}
}
