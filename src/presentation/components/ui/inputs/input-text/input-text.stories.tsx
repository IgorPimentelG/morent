import { Meta } from '@storybook/react';
import { useForm, UseFormRegister } from 'react-hook-form';

import { InputText } from '@presentation/components/ui';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	name: string;
	error?: string;
	register: UseFormRegister<any>;
}

export default {
	title: 'Components/UI/Inputs/Text',
	component: InputText,
	argTypes: {
		label: { description: 'Text to display as field name'	},
		name: { description: 'Field name'	},
		error: { description: 'Text to display when there is an error in the field'	},
		register: { description: 'Function to register the field in react-hook-form'	}
	}
} as Meta;

export const Default: React.FC<Props> = () => {
	const { register } = useForm();
	return (
		<InputText name='name' label='Name' placeholder='Your name' register={register} />
	);
};

export const Error: React.FC<Props> = () => {
	const { register } = useForm();
	return (
		<InputText name='name' label='Name' placeholder='Your name' register={register} error='Something went wrong' />
	);
};

export const Password: React.FC<Props> = () => {
	const { register } = useForm();
	return (
		<InputText name='passowrd' label='Password' placeholder='Your name' type='password' register={register}  />
	);
};
