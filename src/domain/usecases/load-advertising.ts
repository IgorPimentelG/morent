import { AdvertisingModel } from '@domain/models';

export interface LoadAdvertising {
	load: () => Promise<AdvertisingModel[]>
}
