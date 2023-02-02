import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';
import { Button } from '@presentation/components/ui';
import { Ok, Warning, Error } from '@presentation/assets';

type Level = 'SUCCESS' | 'WARNING' | 'ERROR';

type Props = {
	message: string;
	level: Level;
	onClose?: () => void;
	onConfirmation: () => void;
}

export type ModalParams = {
	isVisible: boolean;
	message?: string;
	level?: Level;
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
			<div className={styles.modalWrap} data-testid="modal">
				<header className={styles.header}>
					<div>
						<img src={getIcon()} />
					</div>
				</header>

				<div className={styles.info}>
					<h4 data-testid="modal-level">{level}</h4>
					<p data-testid="modal-message">{message}</p>
				</div>

				<footer className={styles.footer}>
					{onClose &&	(
						<Button
							label='Close'
							styleType="SECONDARY"
							data-testid='modal-btn-close'
							action={onClose}
						/>
					)}
					<Button
						label='Confirm'
						data-testid='modal-btn-confirmation'
						action={onConfirmation}
					/>
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
