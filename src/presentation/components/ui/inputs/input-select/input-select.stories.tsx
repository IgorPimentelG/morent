import { InputSelect } from '@presentation/components/ui';

import { Meta, StoryObj } from '@storybook/react';

type Props = {
	label: string;
	placeholder: string;
}

export default {
	title: 'Components/UI/Inputs/Select',
	component: InputSelect,
	args: {
		label: 'Locations',
		placeholder: 'Select your city'
	}
} as Meta;

export const Default: StoryObj<Props> = {};
