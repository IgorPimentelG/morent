import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';

type Props = {
	image?: string;
	disabled?: boolean;
	hasNotification?: boolean;
	action?: () => void;
}

const IconProfile: React.FC<Props> = ({
	image,
	hasNotification,
	disabled = false,
	action
}) => {
	return (
		<button
			className={styles.buttonWrap}
			onClick={action}
			disabled={disabled}
		>
			{image ? <img src={image} /> : <FaUserCircle />}
			{hasNotification && <div className={styles.notification} />}
		</button>
	);
};

export { IconProfile };
