import React from 'react';
import { HiRefresh } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import { ErrorPlate } from '@presentation/assets';
import { Button } from '@presentation/components/ui';

const ServerError: React.FC = () => {
	const navigate = useNavigate();
	return (
		<main className={styles.serverErrorWrap}>
			<header />
			<div className={styles.codeWrap}>
				<h1>500</h1>
				<img src={ErrorPlate} />
			</div>
			<div className={styles.action}>
				<h2>Unable to communicate with the server in the moment.</h2>
				<p>
					Ops! Some problem is occurring on the server. Try again later.
				</p>
				<Button
					label='Refresh'
					icon={<HiRefresh/>}
					action={() => navigate('/home')}
				/>
			</div>
		</main>
	);
};

export { ServerError };
