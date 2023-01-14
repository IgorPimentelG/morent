import React from 'react';
import styles from './styles.module.scss';

type Props = {
	label: string;
	to: string;
}

const Link: React.FC<Props> = ({ label, to }) => {
	return (
		<>
			<a className={styles.link} href={to}>
				{label}
			</a>
		</>
	);
};

export { Link };
