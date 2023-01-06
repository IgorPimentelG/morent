import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';


type Props = {
	image?: string;
	title?: string;
	hasNotification?: boolean;
	action?: () => void;
}

const IconProfile: React.FC<Props> = ({ image, hasNotification, title, action }) => {
	return (
		<button className={styles.buttonWrap} title={title} onClick={action}>
			{image ? <img src={image} /> : <FaUserCircle />}
			{hasNotification && <div className={styles.notification} />}
		</button>
	);
}

export { IconProfile };
