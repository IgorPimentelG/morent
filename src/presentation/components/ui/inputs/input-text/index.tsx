import React, { useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/FI';

import styles from './styles.module.scss';
import { Error } from '@presentation/components/ui';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
	label: string;
	name: string;
	error?: string;
	register: UseFormRegister<any>;
}

const InputText: React.FC<Props> = ({ label, name, error, register, ...props }) => {

	const inputRef = useRef<HTMLInputElement>(null);
	const [hideText, setHideText] = useState<boolean>(false);

	function changeView() {
		setHideText(!hideText);
		inputRef.current?.setAttribute('type',  hideText ? 'password' : 'text');
	}

	return (
		<div className={styles.inputWrap}>
			<label>{label}</label>
			<div className={styles.field}>
				<input {...props} {...register(name)} ref={inputRef} />
				{props.type === 'password' && (
					<button className={styles.btn} onClick={changeView} type='button'>
						{hideText ? (
							<FiEye />
						) : (
							<FiEyeOff />
						)}
					</button>
				)}
			</div>
			{error && <Error message={error} />}
		</div>
	);
};

export { InputText };
