import { Link } from '@presentation/components/ui';
import { Meta, StoryObj } from '@storybook/react';

type Props = {
	label: string;
	to: string;
}

export default {
	title: 'Components/ui/link',
	component: Link,
	args: {
		label: 'view all',
		to: '#'
	},
	argTypes: {
		label: { description: 'Text displayed in the link' },
		to: { description: 'Link destination'	}
	}
} as Meta;

export const Default: StoryObj<Props> = {};

export const Hover: StoryObj<Props> = {
	parameters: {
		pseudo: { hover: true }
	}
};