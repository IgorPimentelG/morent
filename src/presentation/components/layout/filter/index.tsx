import React from 'react';
import { FilterCard, FilterIcon } from './components';
import styles from './styles.module.scss';

const Filter: React.FC = () => {
	return (
		<div className={styles.filterWrap}>
			<FilterCard title="Pick-Up" />
			<FilterIcon />
			<FilterCard title="Drop-Off" />
		</div>
	);
};

export { Filter };
