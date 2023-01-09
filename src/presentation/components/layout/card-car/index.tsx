import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

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
		<div className={styles.cardWrap}>
			<div className={styles.header}>
				<div>
					<span>{car.model}</span>
					<span>{car.type}</span>
				</div>

				<button onClick={onFavorite}>
					<BsHeart size={16} />
				</button>
			</div>

			<div className={styles.image}>
				<img src={car.images[0]} />
				<div />
			</div>

			<div className={styles.info}>
				<div>
					<span>
						<img src={GasStation}/>
						{car.autonomy}L
					</span>
					<span>
						<img src={Transmission}/>
						{car.transmission}
					</span>
					<span>
						<img src={User}/>
						{car.capacity} People
					</span>
				</div>

				<div>
					<div className={styles.price}>
						<span>
							<span className={styles.value}>{car.price}/</span>
							day
						</span>
						{car.oldPrice && <span>${car.oldPrice}</span>}
					</div>
					<Button label="Rent Now" styleType="PRIMARY" action={onRent} />
				</div>
			</div>
		</div>
	);
};

export { CardCar };
