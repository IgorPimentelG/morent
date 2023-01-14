import { CarModel } from '@domain/models';

export interface LoadCards {
	loadPopularCars: () => Promise<CarModel[]>;
	loadRecomendationCars: () => Promise<CarModel[]>;
}
