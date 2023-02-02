import { AddAccount } from '@domain/usecases';

class RemoteAddAccountSpy implements AddAccount {
	callsCount = 0;

	async add (): Promise<void> {
		this.callsCount++;
		setTimeout(() => {
			return Promise.resolve();
		}, 5000);
	}
}

export { RemoteAddAccountSpy };
