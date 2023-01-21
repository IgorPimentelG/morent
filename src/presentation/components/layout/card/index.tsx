import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
	children: ReactNode
}

const Card: React.FC<Props> = ({ children }: Props) => {
	return (
		<div className={styles.cardWrap}>
			{children}
		</div>
	);
};

export { Card };
