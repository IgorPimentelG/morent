import React from 'react';
import styles from './styles.module.scss';
import { Link as LinkRouter } from 'react-router-dom';

type Props = {
	label: string;
	to: string;
}

const Link: React.FC<Props> = ({ label, to }) => {
	return (
		<>
			<LinkRouter to={to} className={`${styles.link}`} data-testid='link'>
				{label}
			</LinkRouter>
		</>
	);
};

export { Link };
