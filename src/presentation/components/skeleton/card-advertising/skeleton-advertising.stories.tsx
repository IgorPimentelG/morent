import { Meta, StoryObj } from '@storybook/react';

import { SkeletonAdvertising } from '@presentation/components/skeleton';

type Props = {
	variant?: 'PRIMARY' | 'SECONDARY';
}

export default {
	title: 'Components/Skeletons/card-advertising',
	component: SkeletonAdvertising,
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
