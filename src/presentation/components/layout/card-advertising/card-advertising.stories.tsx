import { Meta, StoryObj } from '@storybook/react';

import { CardAdvertising } from '@presentation/components/layout';
import { AdvertisingModel } from '@domain/models';

type Props = {
	variant?: 'PRIMARY' | 'SECONDARY';
	advertising: AdvertisingModel;
	action?: () => void
}

export default {
	title: 'Components/Layout/Card/Advertising',
	component: CardAdvertising,
	args: {
		advertising: {
			title: 'Easy way to rent a car at a low price',
			description: 'Providing cheap car rental services and safe and comfortable facilities.',
			image: 'https://res.cloudinary.com/ddhxkjjww/image/upload/v1673281809/image_7_k0b4v6.png'
		},
		action: () => {}
	},
	argTypes: {
		variant: {
			options: ['PRIMARY', 'SECONDARY'],
			control: { type: 'select'	}
		}
	}
} as Meta;

export const Primary: StoryObj<Props> = {
	args: {
		variant: 'PRIMARY'
	}
};

export const Secondary: StoryObj<Props> = {
	args: {
		variant: 'SECONDARY'
	}
};
