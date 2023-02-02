import { Modal } from '@presentation/components/layout';
import { Meta, StoryObj } from '@storybook/react';

type Props = {
	message: string;
	level: 'SUCCESS' | 'WARNING' | 'ERROR';
	onClose: () => void;
	onConfirmation: () => void;
}

export default {
	title: 'Components/Layout/Modal',
	component: Modal
} as Meta;

export const Default: StoryObj<Props> = {
	args: {
		level: 'SUCCESS',
		message: 'You account has been created. Check your email.'
	}
};

export const Warning: StoryObj<Props> = {
	args: {
		level: 'WARNING',
		message: 'The email used has already been registered in the system.'
	}
};

export const Error: StoryObj<Props> = {
	args: {
		level: 'ERROR',
		message: 'Unable to create your account. Please try again later.'
	}
};
