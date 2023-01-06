import React from 'react';
import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	Icon: React.FC;
	hasNotification?: boolean;
	action: () => void;
}

const IconButton: React.FC<Props> = ({ Icon, hasNotification, action, ...props }) => {
	return (
		<button
			{...props}
			className={styles.buttonWrap}
			onClick={action}
		>
			<Icon />
			{hasNotification && <div className={styles.notification} />}
		</button>
	);
};

export { IconButton };
