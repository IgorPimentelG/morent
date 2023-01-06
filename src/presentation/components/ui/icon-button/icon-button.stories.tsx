import React from 'react';
import { IconButton } from '@presentation/components/ui';

import { Meta, StoryObj } from '@storybook/react';
import { FaBell } from 'react-icons/fa';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	Icon: React.FC;
	hasNotification?: boolean;
	action: () => void;
}

export default {
	title: 'Components/UI/IconButton',
	component: IconButton,
	args: {
		Icon: FaBell,
		title: 'Notifications',
		hasNotification: false
	},
	argTypes: {
		Icon: {
			description: 'Button icon',
			control: { type: null },
			table: { type: { summary: 'React.FC' }}
		},
		title: {
			description: 'Title displayed when focus on button',
			table: { type: { summary: 'string' }}
		},
		hasNotification: {
			description: 'Show icon when there is a notification',
		},
		action: {
			description: 'Action performed by the button',
			table: { type: { summary: 'function' }}
		}
	}
} as Meta;


export const Default: StoryObj<Props> = {};

export const Disabled = () => <IconButton disabled Icon={FaBell} action={() => {}}/>;

export const Pressed: StoryObj<Props> = {
	parameters: {
		pseudo: { active: true }
	}
};

export const Hover: StoryObj<Props> = {
	parameters: {
		pseudo: { hover: true }
	}
};

export const Notification: StoryObj<Props> = {
	args: {
		hasNotification: true
	}
};
