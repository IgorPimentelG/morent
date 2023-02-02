import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';
import { Button } from '@presentation/components/ui';
import { Ok, Warning, Error } from '@presentation/assets';

type Props = {
	message: string;
	level: 'SUCCESS' | 'WARNING' | 'ERROR';
	onClose?: () => void;
	onConfirmation: () => void;
}

const ModalComponent: React.FC<Props> = ({ level, message, onClose, onConfirmation }) => {

	function getIcon(): string {
		switch (level) {
		case 'SUCCESS': return Ok;
		case 'WARNING': return Warning;
		default:
			return Error;
		}
	}

	return (
		<div className={styles.wrap}>
			<div className={styles.modalWrap}>
				<header className={styles.header}>
					<div>
						<img src={getIcon()} />
					</div>
				</header>

				<div className={styles.info}>
					<h4>{level}</h4>
					<p>{message}</p>
				</div>

				<footer className={styles.footer}>
					{onClose &&	<Button label='Close' action={onClose} styleType="SECONDARY" />}
					<Button label='Confirm' action={onConfirmation} />
				</footer>
			</div>
		</div>
	);
};

export const Modal: React.FC<Props> = (props) => {
	return ReactDOM.createPortal(
		<ModalComponent {...props} />,
		document.getElementById('modal')!
	);
};
