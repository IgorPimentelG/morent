import React from 'react';
import styles from './styles.module.scss';

type Props = {
	message: string;
};

const Error: React.FC<Props> = ({ message }) => {
	return (
		<div className={styles.errorWrap}>
			<span>{message}</span>
		</div>
	);
};

export { Error };
