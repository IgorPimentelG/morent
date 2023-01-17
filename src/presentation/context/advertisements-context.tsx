import React, { createContext, ReactNode, useState } from 'react';
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

	return (
		<AdvertisingContext.Provider value={{
			isLoading,
			advertisements,
			setIsLoading,
			setAdvertisements
		}}>
			{children}
		</AdvertisingContext.Provider>
	);
};

export { AdvertisingContext, AdvertisingProvider };
