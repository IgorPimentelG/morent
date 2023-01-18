import { Meta, StoryObj } from '@storybook/react';
import { InputText } from '@presentation/components/ui';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
}

export default {
	title: 'Components/UI/Inputs/Text',
	component: InputText,
	args: {
		label: 'Name',
		placeholder: 'Your name'
	},
	argTypes: {
		label: { description: 'Text to display as field name'	}
	}
} as Meta;

export const Default: StoryObj<Props> = {};
