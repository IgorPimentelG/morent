import React from 'react';
import { IconProfile } from '@presentation/components/ui';

import { Meta, StoryObj } from '@storybook/react';

type Props = {
	image?: string;
	hasNotification?: boolean;
	disabled?: boolean;
	action?: () => void;
}

export default {
	title: 'Components/UI/IconProfile',
	component: IconProfile,
	argTypes: {
		image: {
			description: 'User image',
			table: { type: { summary: 'string' }}
		},
		hasNotification: {
			description: 'Show icon when there is a notification',
		},
		disabled: {
			description: 'The button has no action',
		},
		action: {
			description: 'Action performed by the button',
			table: { type: { summary: 'function' }}
		}
	}
} as Meta;


export const Default: StoryObj<Props> = {};

export const Image: StoryObj<Props> = {
	args: {
		image: 'https://placekitten.com/300/300',
	}
};

export const Disabled = () => <IconProfile disabled />;

export const Notification: StoryObj<Props> = {
	args: {
		image: 'https://placekitten.com/300/300',
		hasNotification: true
	}
};
