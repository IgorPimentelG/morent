import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from './styles.module.scss';
import { AddAccount } from '@domain/usecases';
import { CoverCarSignUp } from '@presentation/assets';
import { Card, Modal, ModalParams } from '@presentation/components/layout';
import { signUpValidation } from '@presentation/shared/schemas';
import {
	Button,
	IconButton,
	InputCheckbox,
	InputText,
	Link,
	Logo
} from '@presentation/components/ui';

type SignUpForm = {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

type Props = {
	remoteAddAccount: AddAccount;
}

const SignUp: React.FC<Props> = ({ remoteAddAccount }) => {

	const [isLoad, setIsLoad] = useState<boolean>(false);
	const [configModal, setConfigModal] = useState<ModalParams>({ isVisible: false });

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

	function onConfirmModal() {
		setConfigModal({ isVisible: false });
	}

	return (
		<main className={styles.signUpWrap}>
			<Card>
				<div className={styles.formWrap}>
					<Logo />
					<form>
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
					</form>

					<div className={styles.divider}>
						<hr/>
						<span>More options</span>
						<hr/>
					</div>

					<div className={styles.socialLogin}>
						<div>
							<IconButton Icon={BsGoogle} action={() => {}} />
							<IconButton Icon={BsGithub} action={() => {}} />
							<IconButton Icon={BsTwitter} action={() => {}} />
						</div>

						<span>
							Already have an account?
							<Link to='/signin' label='Sign In'/>
						</span>

					</div>
				</div>
				<div className={styles.imageWrap}>
					<img src={CoverCarSignUp} />
				</div>
			</Card>
			{configModal.isVisible && (
				<Modal
					level={configModal.level!}
					message={configModal.message!}
					onConfirmation={onConfirmModal}
				/>
			)}
		</main>
	);
};

export { SignUp };
