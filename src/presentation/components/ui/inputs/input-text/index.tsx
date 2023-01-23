import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import styles from './styles.module.scss';
import { Error } from '@presentation/components/ui';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	name: string;
	error?: string;
	register: UseFormRegister<any>;
}

const InputText: React.FC<Props> = ({ label, name, error, register, ...props }) => {
	return (
		<div className={styles.inputWrap}>
			<label>{label}</label>
			<input {...props} {...register(name)} />
			{error && <Error message={error} />}
		</div>
	);
};

export { InputText };
