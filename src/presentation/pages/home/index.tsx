import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { LoadAdvertising } from '@domain/usecases';
import { Header, Footer, Filter, CardAdvertising } from '@presentation/components/layout';

type Props = {
	loadAdvertisements: LoadAdvertising;
}

const Home: React.FC<Props> = ({ loadAdvertisements }) => {

	const [advertisements, setAdvertisements] = useState({
		isLoading: false,
		data: []
	});

	useEffect(() => {
		loadAdvertisements.load()
			.then((response) => {
				setAdvertisements({ isLoading: false, data: response });
			});
	}, []);

	return (
		<div>
			<Header />
			<main className={styles.content}>
				<section className={styles.ad}>
					{advertisements.data.map((item, index) => (
						<CardAdvertising
							key={index}
							advertising={item}
							action={() => {}}
							variant={index / 2 === 0 ? 'PRIMARY' : 'SECONDARY'}
						/>
					))}
				</section>
				<Filter />
			</main>
			<Footer />
		</div>
	);
};

export { Home };
