import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	Icon: React.FC;
	title: string;
	hasNotification?: boolean;
	action: () => void;
}

const IconButton: React.FC<Props> = ({ Icon, hasNotification, title, action }) => {
	return (
		<button className={styles.buttonWrap} title={title} onClick={action}>
			<Icon />
			{hasNotification && <div className={styles.notification} />}
		</button>
	);
}

export { IconButton };
