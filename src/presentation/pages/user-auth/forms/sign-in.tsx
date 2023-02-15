import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from '../styles.module.scss';
import { Authentication } from '@domain/usecases';
import { signInValidation } from '@presentation/shared/schemas';
import { ModalParams } from '@presentation/components/layout';
import {
	Button,
	IconButton,
	InputCheckbox,
	InputText,
	Link
} from '@presentation/components/ui';

type SignInForm = {
	email: string;
	password: string;
}

type ViewOperation = 'SIGN_IN' | 'SIGN_UP';

type Props = {
	remoteAuthentication: Authentication;
	isLoad: boolean;
	setIsLoad: (value: React.SetStateAction<boolean>) => void;
	setConfigModal: (value: React.SetStateAction<ModalParams>) => void;
	changeForm: (operation: ViewOperation) => void;
}

const FormSignIn: React.FC<Props> = ({
	isLoad,
	remoteAuthentication,
	setIsLoad,
	setConfigModal,
	changeForm
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInForm>({ resolver: yupResolver(signInValidation)	});

	function onSubmit(data: SignInForm) {
		console.log('🚀 ~ file: index.tsx:23 ~ onSubmit ~ data', data);
	}

	return (
		<form className={styles.formWrap}>
			<InputText
				label='E-mail'
				name='email'
				placeholder='Your e-mail'
				type="email"
				register={register}
				error={errors.email?.message}
			/>
			<InputText
				label='Password'
				name='password'
				placeholder='Your password'
				type="password"
				register={register}
				error={errors.password?.message}
			/>
			<div className={styles.checkbox}>
				<InputCheckbox label='Remember your data?' />
			</div>
			<Button label='Sign In' load={isLoad} action={handleSubmit(onSubmit)} />
			<div className={styles.recover}>
				<Link label='Forgot your password?' to='#'/>
			</div>
			<div className={styles.divider}>
				<hr/>
				<span>or</span>
				<hr/>
			</div>

			<div className={styles.socialLogin}>
				<div>
					<IconButton Icon={BsGoogle} action={() => {}} />
					<IconButton Icon={BsGithub} action={() => {}} />
					<IconButton Icon={BsTwitter} action={() => {}} />
				</div>

				<div className={styles.link}>
					<span>{'Don\'t have an account?'}</span>
					<button type='button' onClick={() => changeForm('SIGN_UP')}>
						<span>Sign Up</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export { FormSignIn };
