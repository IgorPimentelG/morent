import React from 'react';

import styles from './styles.module.scss';
import { InputSelect } from '@presentation/components/ui';

type Props = {
	title: string;
}

const FilterCard: React.FC<Props> = ({ title }) => {
	return (
		<div className={styles.cardWrap}>
			<div className={styles.title}>
				<div className={styles.icon}><div/></div>
				<span>{title}</span>
			</div>
			<div className={styles.inputs}>
				<InputSelect label="Locations" placeholder="Select your city" />
				<InputSelect label="Date" placeholder="Select your date  " />
				<InputSelect label="Time" placeholder="Select your time" />
			</div>
		</div>
	);
};

export { FilterCard };
