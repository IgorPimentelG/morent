import { Home } from '@presentation/pages';
import { makeRemoteLoadAdvertisements, makeRemoteLoadCarsFactory } from '@main/factories/usecases';
import { AdvertisingProvider, CarProvider } from '@presentation/context';

export const MakeHomePage = () => {
	return (
		<AdvertisingProvider>
			<CarProvider>
				<Home
					loadCars={makeRemoteLoadCarsFactory()}
					loadAdvertisements={makeRemoteLoadAdvertisements()}
				/>
			</CarProvider>
		</AdvertisingProvider>
	);
};
