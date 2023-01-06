import { InputFilter } from '@presentation/components/ui';

import { Meta, StoryObj } from '@storybook/react';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	action: () => void;
	filter: () => void;
}
export default {
	title: 'Components/UI/Inputs/Filter',
	component: InputFilter,
	args: {
		placeholder: 'Search Something here'
	},
	argTypes: {
		action: {
			description: 'Action to get the information',
			table: { type: { summary: 'function' }}
		},
		filter: {
			description: 'Action to open filter',
			table: { type: { summary: 'function' }}
		}
	}
} as Meta;

export const Default: StoryObj<Props> = {};
