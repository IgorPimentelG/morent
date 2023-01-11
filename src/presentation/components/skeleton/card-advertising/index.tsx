import React from 'react';
import styles from './styles.module.scss';

type Props = {
	variant: 'PRIMARY' | 'SECONDARY';
}

const SkeletonAdvertising: React.FC<Props> = ({ variant = 'PRIMARY' }) => {
	return (
		<div className={styles.skeletonWrap} data-variant={variant} data-testid="skeleton-advertising">
			<section>
				<div className={styles.title1} />
				<div className={styles.title2} />
				<div className={styles.description1} />
				<div className={styles.description2} />
				<div className={`${styles.button} ${styles.space}`} />
			</section>
			<section>
				<div className={styles.image} />
			</section>
		</div>
	);
};

export { SkeletonAdvertising };
