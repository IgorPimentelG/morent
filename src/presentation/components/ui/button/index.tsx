import React from 'react';
import styles from './styles.module.scss';

type StyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
	label: string;
	load?: boolean;
	styleType?: StyleType;
	disabled?: boolean;
	action: () => void;
}

const Button: React.FC<Props> = ({
	label,
	styleType,
	load,
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
			{!load && <span>{label}</span>}
		</button>
	);
};

export { Button };
