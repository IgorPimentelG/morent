import { CarModel } from '@domain/models';
import { mockCars } from '@domain/test';
import { LoadCars } from '@domain/usecases';

class RemoteLoadCarsSpy implements LoadCars {
	callsCountLoadPopular = 0;
	callsCountLoadRecomendation = 0;

	async loadPopularCars (): Promise<CarModel[]> {
		this.callsCountLoadPopular++;
		return new Promise(() => {
			setTimeout(() => {
				return mockCars();
			}, 5000);
		});
	}

	async loadRecomendationCars (): Promise<CarModel[]> {
		this.callsCountLoadRecomendation++;
		return new Promise(() => {
			setTimeout(() => {
				return mockCars();
			}, 5000);
		});
	}
}

export { RemoteLoadCarsSpy };
