import { Error, InputText } from '@presentation/components/ui';
import { Meta, StoryObj } from '@storybook/react';

type Props = {
	message: string;
};

export default {
	title: 'Components/UI/Error',
	component: Error,
	args: {
		message: 'Something went wrong',
	},
	argTypes: {
		message: {
			description: 'Error description message',
		}
	}
} as Meta;

export const Default: StoryObj<Props> = {};

export const Input = () => {
	return (
		<>
			<InputText label='E-mail' name='email' />
			<Error message='Enter a valid e-mail' />
		</>
	);
};

