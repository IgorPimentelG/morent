import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

import styles from './styles.module.scss';
import { ErrorPlate } from '@presentation/assets';
import { Button } from '@presentation/components/ui';

const NotFoundError: React.FC = () => {
	const navigate = useNavigate();
	return (
		<main className={styles.notFoundErrorWrap}>
			<header />
			<div className={styles.codeWrap}>
				<h1>404</h1>
				<img src={ErrorPlate} />
			</div>
			<div className={styles.action}>
				<h2>This page is currently unavailable.</h2>
				<p>
					Ops! Page not found.
				</p>
				<Button
					label='Go home'
					icon={<BsArrowLeftShort/>}
					action={() => navigate('/home')}
				/>
			</div>
		</main>
	);
};

export { NotFoundError };
