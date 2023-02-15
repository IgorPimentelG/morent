import { Authentication } from '@domain/usecases';
import { AxiosClient } from '@infra/http/axios-client';
import { makeHttpUrl } from '@main/factories/usecases';
import { RemoteAuthentication } from '@data/usecases';

export const makeRemoteAuthentication = (): Authentication => {
	return new RemoteAuthentication(
		makeHttpUrl(import.meta.env.VITE_REGISTER),
		new AxiosClient()
	);
};
