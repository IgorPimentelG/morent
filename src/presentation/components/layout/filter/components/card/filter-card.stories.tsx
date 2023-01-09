import { Meta, StoryObj } from '@storybook/react';
import { FilterCard } from '@presentation/components/layout/filter/components';

type Props = {
	title: string;
}

export default {
	title: 'Components/Layout/Filter/Card',
	component: FilterCard,
	args: {
		title: 'Pick-Up'
	}
} as Meta;

export const Default: StoryObj<Props> = {};
