import React from 'react';
import styles from './styles.module.scss';

type StyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
	label: string;
	styleType: StyleType;
	disabled?: boolean;
	action: () => void;
}

const Button: React.FC<Props> = ({ label, styleType, disabled = false, action }) => {
	return (
		<button
			className={styles.buttonWrap}
			onClick={action}
			disabled={disabled}
			data-type={styleType}
			data-testid="button"
		>
			<span>{label}</span>
		</button>
	);
};

export { Button };
