import { CardCar } from '@presentation/components/layout';
import { Meta, StoryObj } from '@storybook/react';

import { CarModel } from '@domain/models';

type Props = {
	car: CarModel;
	onFavorite: () => void;
	onRent: () => void;
}

export default {
	title: 'Components/Layout/Card/Car',
	component: CardCar,
	args: {
		car: {
			model: 'Nissan GT-R',
			type: 'Sport',
			capacity: 2,
			autonomy: 80,
			transmission: 'manual',
			price: 80.00,
			oldPrice: 100.00,
			images: ['https://res.cloudinary.com/ddhxkjjww/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1673275870/car_t8sapm.jpg']
		}
	}
} as Meta;

export const Default: StoryObj<Props> = {};
