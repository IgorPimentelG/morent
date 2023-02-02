import React, { useState } from 'react';
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

	const [hideText, setHideText] = useState<boolean>(true);

	function changeView() {
		setHideText(!hideText);
	}

	return (
		<div className={styles.inputWrap}>
			<label>{label}</label>
			<div className={styles.field}>
				<input
					{...props}
					{...register(name)}
					data-testid={`input-${name}`}
					type={props.type === 'password' && hideText ? 'password' : 'text'}
				/>
				{props.type === 'password' && (
					<button
						className={styles.btn}
						onClick={changeView}
						type='button'
						data-testid='btn-change-view'
					>
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
