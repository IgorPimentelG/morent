import { AdvertisingModel } from '@domain/models';
import { LoadAdvertising } from '@domain/usecases';
import { mockAdvertising } from '@domain/test/mock-advertising';

class RemoteLoadAdvertisementsSpy implements LoadAdvertising {
	callsCount = 0;

	async load (): Promise<AdvertisingModel[]> {
		this.callsCount++;

		return new Promise(() => {
			setTimeout(() => {
				return mockAdvertising();
			}, 5000);
		});
	}
}

export { RemoteLoadAdvertisementsSpy };
