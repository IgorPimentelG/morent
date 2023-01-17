import React, { useEffect, useContext } from 'react';

import styles from './styles.module.scss';
import { LoadAdvertising, LoadCars } from '@domain/usecases';
import { Header, Footer, Filter, CardAdvertising, CardCar } from '@presentation/components/layout';
import { SkeletonAdvertising, SkeletonCar } from '@presentation/components/skeleton';
import { Button, Link } from '@presentation/components/ui';
import { AdvertisingContext, CarContext } from '@presentation/context';

type Props = {
	loadAdvertisements: LoadAdvertising;
	loadCars: LoadCars;
}

type DataParams<T> = {
	isLoading: boolean;
	hasError: boolean;
	data: T[];
}

const Home: React.FC<Props> = ({ loadAdvertisements, loadCars }) => {

	const carContext = useContext(CarContext);
	const advertisingContext = useContext(AdvertisingContext);

	useEffect(() => {
		const { setAdvertisements, setIsLoading } = advertisingContext;
		setIsLoading(true);
		loadAdvertisements.load()
			.then((response) => {
				setAdvertisements(response);
			}).catch(() => {
				setAdvertisements([]);
			});
		setIsLoading(false);
	}, []);

	// Load Popular Cars
	useEffect(() => {
		const { setPopular, setPopularCarsIsLoading } = carContext;
		setPopularCarsIsLoading(true);
		loadCars.loadPopularCars()
			.then((response) => {
				setPopular(response);
			}).catch(() => {
				setPopular([]);
			});
		setPopularCarsIsLoading(false);
	}, []);

	// Load Recomendation Cars
	useEffect(() => {
		const { setRecomendation, setRecomendationCarsIsLoading } = carContext;
		setRecomendationCarsIsLoading(true);
		loadCars.loadRecomendationCars()
			.then((response) => {
				setRecomendation(response);
			}).catch(() => {
				setRecomendation([]);
			});
		setRecomendationCarsIsLoading(false);
	}, []);

	return (
		<div>
			<Header />
			<main className={styles.content}>
				<section className={styles.ad}>
					{advertisingContext.isLoading ? (
						<>
							<SkeletonAdvertising variant='PRIMARY' />
							<SkeletonAdvertising variant='SECONDARY' />
						</>
					) : (
						<>
							{advertisingContext.advertisements.map((item, index) => (
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
						{carContext.popularCarsIsLoading ? (
							<>
								{Array.from(Array(4), () => (
									<>
										<SkeletonCar />
									</>
								))}
							</>
						) : (
							<>
								{carContext.popular.map((item) => (
									<CardCar
										key={item.id}
										car={item}
										onFavorite={() => {}}
										onRent={() => {}}
									/>
								))}
							</>
						)}
					</div>
				</section>

				<section className={styles.recomendationCarWrap}>
					<div className={styles.sectionTitle}>
						<span>Recomendation Car</span>
					</div>
					<div className={styles.list}>
						{carContext.recomendationCarsIsLoading ? (
							<>
								{Array.from(Array(4), () => (
									<>
										<SkeletonCar />
									</>
								))}
							</>
						) : (
							<>
								{carContext.recomendation.map((item) => (
									<CardCar
										key={item.id}
										car={item}
										onFavorite={() => {}}
										onRent={() => {}}
									/>
								))}
							</>
						)}
					</div>
					<div className={styles.loadMoreCarsWrap}>
						<div />
						<Button label='Show more car' action={() => {}} />
						<span>0 Car</span>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export { Home };
