import React from 'react';
import styles from './styles.module.scss';

const Logo: React.FC = () => {
	return (
		<div className={styles.logoWrap}>
			<h1 data-testid='logo'>MORENT</h1>
		</div>
	);
};

export { Logo };
