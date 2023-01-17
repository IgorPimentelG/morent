import { RemoteLoadCars } from '@data/usecases';
import { makeHttpUrl } from '../http/http-url';
import { LoadCars } from '@domain/usecases';
import { AxiosClient } from '@infra/http/axios-client';

export const makeRemoteLoadCarsFactory = (): LoadCars => {
	return new RemoteLoadCars(
		makeHttpUrl(import.meta.env.VITE_CARS_URL),
		new AxiosClient()
	);
};
