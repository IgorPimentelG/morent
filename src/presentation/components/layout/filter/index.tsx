import React from 'react';
import { FilterCard, FilterIcon } from './components';
import styles from './styles.module.scss';

const Filter: React.FC = () => {
	return (
		<div className={styles.filterWrap}>
			<FilterCard />
			<FilterIcon />
			<FilterCard />                                                                
		</div>
	);
};

export { Filter };
