import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type StyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
	label: string;
	load?: boolean;
	styleType?: StyleType;
	disabled?: boolean;
	icon?: ReactNode;
	action: () => void;
}

const Button: React.FC<Props> = ({
	label,
	styleType,
	load,
	icon,
	disabled,
	action
}) => {
	return (
		<button
			className={styles.buttonWrap}
			onClick={action}
			disabled={disabled}
			data-type={styleType || 'PRIMARY'}
			data-testid="button"
		>
			{load && (
				<div className={styles.loadingWrap} data-testid="load">
					<span className={styles.loading} />
				</div>
			)}
			{!load && (
				<>
					<div className={styles.icon}>
						{icon}
					</div>
					<span>{label}</span>
				</>
			)}
		</button>
	);
};

export { Button };
