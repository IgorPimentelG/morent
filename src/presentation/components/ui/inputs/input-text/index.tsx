import React from 'react';
import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
}

const InputText: React.FC<Props> = ({ label, ...props }) => {
	return (
		<div className={styles.inputWrap}>
			<label>{label}</label>
			<input {...props} />
		</div>
	);
};

export { InputText };
