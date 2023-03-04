import React from 'react';
import styles from './styles.module.scss';

export type Props = {
	title: string;
	options: Array<{
		label: string;
		value: string;
	}>;
}

const Links: React.FC<Props> = ({ title, options }) => {
	return (
		<div className={styles.linksWrap}>
			<h4>{title}</h4>
			<div className={styles.optionsWrap}>
				{options.map((option) => (
					<a key={option.value} href={option.value}>
						{option.label}
					</a>
				))}
			</div>
		</div>
	);
};

export { Links };
