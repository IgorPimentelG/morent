import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@presentation/components/ui';

type StyleType = 'PRIMARY' | 'SECONDARY';

type Props = {
	label: string;
	styleType: StyleType;
	disabled?: boolean;
	action: () => void;
}

export default {
	title: 'Components/UI/Button',
	component: Button,
	argTypes: {
		label: {
			description: 'Text displayed on button'
		},
		styleType: {
			description: 'Button style',
			control: { type: 'select', options: ['PRIMARY', 'SECONDARY']},
			table: { type: { summary: 'PRIMARY or SECONDARY'}}
		},
		disabled: {
			description: 'The button is inactive',
			table: { type: { summary: 'boolean'}}
		},
		action: {
			description: 'Action performed by the button',
			table: { type: { summary: 'function'}}
		},
	}
} as Meta;

export const Primary: StoryObj<Props> = {
	args: {
		label: 'Primary',
		styleType: 'PRIMARY'
	}
};

export const PrimaryHover: StoryObj<Props> = {
	args: {
		label: 'Primary',
		styleType: 'PRIMARY'
	},
	parameters: {
		pseudo: { hover: true }
	}
};

export const PrimaryPressed: StoryObj<Props> = {
	args: {
		label: 'Primary',
		styleType: 'PRIMARY'
	},
	parameters: {
		pseudo: { active: true }
	}
};

export const PrimaryDisabled: StoryObj<Props> = {
	args: {
		label: 'Primary',
		styleType: 'PRIMARY',
		disabled: true
	}
};

export const Secondary: StoryObj<Props> = {
	args: {
		label: 'Secondary',
		styleType: 'SECONDARY'
	}
};

export const SecondaryHover: StoryObj<Props> = {
	args: {
		label: 'Secondary',
		styleType: 'SECONDARY'
	},
	parameters: {
		pseudo: { hover: true }
	}
};

export const SecondaryPressed: StoryObj<Props> = {
	args: {
		label: 'Secondary',
		styleType: 'SECONDARY'
	},
	parameters: {
		pseudo: { active: true }
	}
};

export const SecondaryDisabled: StoryObj<Props> = {
	args: {
		label: 'Secondary',
		styleType: 'SECONDARY',
		disabled: true
	}
};
