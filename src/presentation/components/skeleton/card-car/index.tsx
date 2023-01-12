import React from 'react';
import styles from './styles.module.scss';

const SkeletonCar: React.FC = () => {
	return (
		<div className={styles.skeletonWrap} data-testid="skeleton-car">
			<section>
				<div>
					<span className={styles.model} />
					<span className={styles.type} />
				</div>
				<span className={styles.favorite} />
			</section>
			<section>
				<span className={styles.image} />
			</section>
			<section>
				<span className={styles.autonomy} />
				<span className={styles.transmission} />
				<span className={styles.capacity} />
			</section>
			<section>
				<div>
					<span className={styles.price} />
				</div>
				<span className={styles.button} />
			</section>
		</div>
	);
};

export { SkeletonCar };
