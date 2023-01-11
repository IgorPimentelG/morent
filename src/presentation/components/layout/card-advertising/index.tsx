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
		<div
			data-testid="card-advertising"
			className={styles.cardWrap}
			data-variant={variant}
		>
			<div>
				<span className={styles.title} data-testid="title">
					{advertising.title}
				</span>
				<span className={styles.description} data-testid="description">
					{advertising.description}
				</span>
				{action && (
					<Button label="Rental Car" styleType="PRIMARY" action={action} />
				)}
			</div>
			<div className={styles.imageWrap}>
				<img src={advertising.image} data-testid="image" />
			</div>
		</div>
	);
};

export { CardAdvertising };
