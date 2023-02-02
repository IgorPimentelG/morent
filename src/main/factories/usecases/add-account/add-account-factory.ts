import { AddAccount } from '@domain/usecases';
import { AxiosClient } from '@infra/http/axios-client';
import { makeHttpUrl } from '@main/factories/usecases';
import { RemoteAddAccount } from '@data/usecases/add-account/remote-add-account';

export const makeRemoteAddAccount = (): AddAccount => {
	return new RemoteAddAccount(
		makeHttpUrl(import.meta.env.VITE_REGISTER),
		new AxiosClient()
	);
};
