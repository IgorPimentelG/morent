import React from 'react';

import styles from './styles.module.scss';
import { Button } from '@presentation/components/ui';
import { AdvertisingModel } from '@domain/models';

type Props = {
	variant?: 'PRIMARY' | 'SECONDARY';
	advertising: AdvertisingModel;
	action?: () => void
}

const CardAdvertising: React.FC<Props> = ({ advertising, variant = 'PRIMARY', action }) => {
	return (
		<div className={styles.cardWrap} data-variant={variant}>
			<div>
				<span className={styles.title}>
					{advertising.title}
				</span>
				<span className={styles.description}>
					{advertising.description}
				</span>
				{action && (
					<Button label="Rental Car" styleType="PRIMARY" action={action} />
				)}
			</div>
			<div className={styles.imageWrap}>
				<img src={advertising.image} />
			</div>
		</div>
	);
};

export { CardAdvertising };
