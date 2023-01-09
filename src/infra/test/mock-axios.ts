import axios from 'axios';
import { mockHttpResponse } from './mock-http';

export const mockAxios = (httpResponse = mockHttpResponse()): jest.Mocked<typeof axios> => {
	const mockedAxios = axios as jest.Mocked<typeof axios>;
	mockedAxios.request.mockClear().mockResolvedValue(httpResponse);
	return mockedAxios;
};
