import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from './styles.module.scss';
import { CoverCarSignIn } from '@presentation/assets';
import { Card } from '@presentation/components/layout';
import { Button, IconButton, InputCheckbox, InputText, Link, Logo } from '@presentation/components/ui';
import { signInValidation } from '@presentation/shared/schemas';

type SignInForm = {
	email: string;
	password: string;
}

const SignIn: React.FC = () => {
	const { register, formState: { errors }, handleSubmit } = useForm<SignInForm>({
		resolver: yupResolver(signInValidation)
	});

	function onSubmit(data: SignInForm) {
		console.log('🚀 ~ file: index.tsx:23 ~ onSubmit ~ data', data);
	}

	return (
		<main className={styles.signInWrap}>
			<Card>
				<div className={styles.formWrap}>
					<Logo />
					<form>
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
						<Button label='Sign In' action={handleSubmit(onSubmit)} />
						<div className={styles.recover}>
							<Link label='Forgot your password?' to='#'/>
						</div>
					</form>

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

						<span>
							{'Don\'t have an account?'}
							<Link to='/signup' label='Sign up'/>
						</span>

					</div>
				</div>
				<div className={styles.imageWrap}>
					<img src={CoverCarSignIn} />
				</div>
			</Card>
		</main>
	);
};

export { SignIn };
