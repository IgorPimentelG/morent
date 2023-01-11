import React from 'react';
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
	}
} as Meta;

export const Default: StoryObj = {};