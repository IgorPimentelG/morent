import React from 'react';

import styles from './styles.module.scss';
import { Header, Footer, Filter } from '@presentation/components/layout';

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<main className={styles.content}>
				<Filter />
			</main>
			<Footer />
		</div>
	);
};

export { Home };
