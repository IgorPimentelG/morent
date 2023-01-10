import { RemoteLoadAdvertising } from '@data/usecases';
import { LoadAdvertising } from '@domain/usecases';
import { AxiosClient } from '@infra/http/axios-client';
import { makeHttpUrl } from '../http/http-url';

const makeRemoteLoadAdvertisements = (): LoadAdvertising => {
	return new RemoteLoadAdvertising(
		makeHttpUrl(import.meta.env.VITE_ADS_URL),
		new AxiosClient()
	);
};

export { makeRemoteLoadAdvertisements };
