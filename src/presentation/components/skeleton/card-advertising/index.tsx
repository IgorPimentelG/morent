import React from 'react';
import styles from './styles.module.scss';

type Props = {
	variant: 'PRIMARY' | 'SECONDARY';
}

const SkeletonAdvertising: React.FC<Props> = ({ variant = 'PRIMARY' }) => {
	return (
		<div className={styles.cardWrap} data-variant={variant}>
			<div className={styles.skeleton}/>
		</div>
	);
};

export { SkeletonAdvertising };
