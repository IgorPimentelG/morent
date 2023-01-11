import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { LoadAdvertising } from '@domain/usecases';
import { AdvertisingModel } from '@domain/models';
import { Header, Footer, Filter, CardAdvertising } from '@presentation/components/layout';
import { SkeletonAdvertising } from '@presentation/components/skeleton';

type Props = {
	loadAdvertisements: LoadAdvertising;
}

type AdvertisementsState = {
	isLoading: boolean;
	hasError: boolean;
	data: AdvertisingModel[];
}

const Home: React.FC<Props> = ({ loadAdvertisements }) => {

	const [advertisements, setAdvertisements] = useState<AdvertisementsState>({
		isLoading: false,
		hasError: false,
		data: []
	});

	useEffect(() => {
		setAdvertisements((old) => ({...old, isLoading: true}));
		loadAdvertisements.load()
			.then((response) => {
				setAdvertisements({ isLoading: false, hasError: false, data: response });
			}).catch(() => {
				setAdvertisements({ isLoading: true, hasError: true, data: [] });
			});
	}, []);

	return (
		<div>
			<Header />
			<main className={styles.content}>
				<section className={styles.ad}>
					{advertisements.isLoading ? (
						<>
							<SkeletonAdvertising variant='PRIMARY' />
							<SkeletonAdvertising variant='SECONDARY' />
						</>
					) : (
						<>
							{advertisements.data.map((item, index) => (
								<CardAdvertising
									key={index}
									advertising={item}
									action={() => {}}
									variant={index / 2 === 0 ? 'PRIMARY' : 'SECONDARY'}
								/>
							))}
						</>
					)}
				</section>
				<Filter />
			</main>
			<Footer />
		</div>
	);
};

export { Home };
