import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { LoadAdvertising } from '@domain/usecases';
import { AdvertisingModel } from '@domain/models';
import { Header, Footer, Filter, CardAdvertising } from '@presentation/components/layout';
import { SkeletonAdvertising, SkeletonCar } from '@presentation/components/skeleton';
import { Link } from '@presentation/components/ui';

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
				setAdvertisements({ isLoading: false, hasError: true, data: [] });
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

				<section className={styles.popularCarWrap}>
					<div className={styles.sectionTitle}>
						<span>Popular Car</span>
						<Link to='#' label='View All'/>
					</div>
					<div className={styles.list}>
						{Array.from(Array(4), () => (
							<>
								<SkeletonCar />
							</>
						))}
					</div>
				</section>

				<section className={styles.recomendationCarWrap}>
					<div className={styles.sectionTitle}>
						<span>Recomendation Car</span>
					</div>
					<div className={styles.list}>
						{Array.from(Array(4), () => (
							<>
								<SkeletonCar />
							</>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export { Home };
