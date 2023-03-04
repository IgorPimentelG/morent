import React, {
	createContext,
	ReactNode,
	useState,
	useMemo
} from 'react';
import { CarModel } from '@domain/models';

type Props = {
	children: ReactNode
}

type State = {
	popularCarsIsLoading: boolean;
	recomendationCarsIsLoading: boolean;
	popular: CarModel[];
	recomendation: CarModel[];
	setPopularCarsIsLoading: (state: boolean) => void;
	setRecomendationCarsIsLoading: (state: boolean) => void;
	setPopular: (cars: CarModel[]) => void;
	setRecomendation: (cars: CarModel[]) => void;
}

const CarContext = createContext<State>({
	popularCarsIsLoading: false,
	recomendationCarsIsLoading: false,
	popular: [],
	recomendation: [],
	setPopularCarsIsLoading: () => {},
	setRecomendationCarsIsLoading: () => {},
	setPopular: () => {},
	setRecomendation: () => {}
});

const CarProvider: React.FC<Props> = ({ children }: Props) => {
	const [popularCarsIsLoading, setPopularCarsIsLoading] = useState<boolean>(false);
	const [recomendationCarsIsLoading, setRecomendationCarsIsLoading] = useState<boolean>(false);
	const [popular, setPopular] = useState<CarModel[]>([]);
	const [recomendation, setRecomendation] = useState<CarModel[]>([]);
	const carProviderValues = useMemo(() => ({
		popularCarsIsLoading,
		recomendationCarsIsLoading,
		popular,
		recomendation,
		setPopularCarsIsLoading,
		setRecomendationCarsIsLoading,
		setPopular,
		setRecomendation
	}), [
		popularCarsIsLoading,
		recomendationCarsIsLoading,
		popular,
		recomendation,
		setPopularCarsIsLoading,
		setRecomendationCarsIsLoading,
		setPopular,
		setRecomendation
	]);

	return (
		<CarContext.Provider value={carProviderValues}>
			{children}
		</CarContext.Provider>
	);
};



export { CarContext, CarProvider };
