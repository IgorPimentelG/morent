import React from 'react';
import { BsArrowDownUp } from 'react-icons/bs';

import styles from './styles.module.scss';


const FilterIcon: React.FC = () => {
	return (
		<div className={styles.iconWrap}>
			<BsArrowDownUp />
		</div>
	);
};

export { FilterIcon };
