import React, {
	createContext,
	ReactNode,
	useMemo,
	useState
} from 'react';
import { AdvertisingModel } from '@domain/models';

type Props = {
	children: ReactNode
}

type State = {
	isLoading: boolean;
	advertisements: AdvertisingModel[];
	setIsLoading: (state: boolean) => void;
	setAdvertisements: (advertisements: AdvertisingModel[]) => void;
}

const AdvertisingContext = createContext<State>({
	isLoading: false,
	advertisements: [],
	setIsLoading: () => {},
	setAdvertisements: () => {}
});

const AdvertisingProvider: React.FC<Props> = ({ children }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [advertisements, setAdvertisements] = useState<AdvertisingModel[]>([]);
	const advertisingProviderValues = useMemo(() => ({
		isLoading,
		advertisements,
		setIsLoading,
		setAdvertisements
	}), [isLoading, advertisements, setIsLoading,	setAdvertisements]);

	return (
		<AdvertisingContext.Provider value={advertisingProviderValues}>
			{children}
		</AdvertisingContext.Provider>
	);
};

export { AdvertisingContext, AdvertisingProvider };
