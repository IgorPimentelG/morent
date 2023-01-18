import { Meta, StoryObj } from '@storybook/react';
import { InputCheckbox } from '@presentation/components/ui';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
}

export default {
	title: 'Components/UI/Inputs/Checkbox',
	component: InputCheckbox,
	args: {
		label: 'Remember your data?'
	},
	argTypes: {
		label: {
			description: 'Text of checkbox'
		}
	}
} as Meta;


export const Default: StoryObj<Props> = {};

export const Checked: StoryObj<Props> = {
	args: {
		checked: true
	}
};
