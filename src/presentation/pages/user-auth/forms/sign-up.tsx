import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from '../styles.module.scss';
import { AddAccount } from '@domain/usecases';
import { signUpValidation } from '@presentation/shared/schemas';
import { ModalParams } from '@presentation/components/layout';
import {
	Button,
	InputCheckbox,
	IconButton,
	InputText
} from '@presentation/components/ui';

type SignUpForm = {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

type ViewOperation = 'SIGN_IN' | 'SIGN_UP';

type Props = {
	remoteAddAccount: AddAccount;
	isLoad: boolean;
	setIsLoad: (value: React.SetStateAction<boolean>) => void;
	setConfigModal: (value: React.SetStateAction<ModalParams>) => void;
	changeForm: (operation: ViewOperation) => void;
}

const FormSignUp: React.FC<Props> = ({
	isLoad,
	remoteAddAccount,
	setIsLoad,
	setConfigModal,
	changeForm
}) => {

	const { register, formState: { errors }, handleSubmit } = useForm<SignUpForm>({
		resolver: yupResolver(signUpValidation)
	});

	async function onSubmit(data: SignUpForm) {
		setIsLoad(true);
		try {
			await remoteAddAccount.add(data);
			setConfigModal({
				isVisible: true,
				level: 'SUCCESS',
				message: 'Your account has been registered. Check your email to continue.'
			});
		} catch (error: any) {
			setConfigModal({
				isVisible: true,
				level: 'ERROR',
				message: error.message
			});
		}
		setIsLoad(false);
	}

	return (
		<form className={styles.formWrap}>
			<InputText
				label='Name'
				name='name'
				placeholder='Your name'
				register={register}
				error={errors.name?.message}
			/>
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
			<InputText
				label='Password Confirmation'
				name='passwordConfirmation'
				placeholder='Confirm your password'
				type="password"
				register={register}
				error={errors.passwordConfirmation?.message}
			/>
			<div className={styles.checkbox}>
				<InputCheckbox label='I agree to the terms & conditions' />
			</div>
			<Button label='Sign Up' load={isLoad} action={handleSubmit(onSubmit)} />

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
					<span>Already have an account?</span>
					<button type='button' onClick={() => changeForm('SIGN_IN')}>
						<span>Sign In</span>
					</button>
				</div>
			</div>
		</form>
	);
};

export { FormSignUp };
