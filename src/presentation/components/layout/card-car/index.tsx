import React from 'react';
import { BsHeart } from 'react-icons/bs';

import styles from './styles.module.scss';
import { GasStation, Transmission, User } from '@presentation/assets';
import { Button } from '@presentation/components/ui';
import { CarModel } from '@domain/models';

type Props = {
	car: CarModel;
	onFavorite: () => void;
	onRent: () => void;
}

const CardCar: React.FC<Props> = ({ car, onRent, onFavorite }) => {
	return (
		<div className={styles.cardWrap} data-testid="card-car">
			<div className={styles.header}>
				<div>
					<span data-testid="model">{car.model}</span>
					<span data-testid="type">{car.type}</span>
				</div>

				<button onClick={onFavorite}>
					<BsHeart size={16} />
				</button>
			</div>

			<div className={styles.image} data-testid="image">
				<img src={car.images[0]} />
				<div />
			</div>

			<div className={styles.info}>
				<div>
					<span data-testid="autonomy">
						<img src={GasStation}/>
						{car.autonomy}L
					</span>
					<span data-testid="transmission">
						<img src={Transmission}/>
						{car.transmission}
					</span>
					<span data-testid="capacity">
						<img src={User}/>
						{car.capacity} People
					</span>
				</div>

				<div>
					<div className={styles.price}>
						<span>
							<span data-testid="price" className={styles.value}>
								${car.price.toFixed(2)}/
							</span>
							day
						</span>
						{car.oldPrice && <span data-testid="old-price">
							${car.oldPrice.toFixed(2)}
						</span>}
					</div>
					<Button label="Rent Now" styleType="PRIMARY" action={onRent} />
				</div>
			</div>
		</div>
	);
};

export { CardCar };
