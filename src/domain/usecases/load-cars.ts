import { CarModel } from '@domain/models';

export interface LoadCars {
	loadPopularCars: () => Promise<CarModel[]>;
	loadRecomendationCars: () => Promise<CarModel[]>;
}
