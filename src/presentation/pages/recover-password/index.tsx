import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


import styles from './styles.module.scss';
import { Card } from '@presentation/components/layout';
import { Button, InputText, Logo } from '@presentation/components/ui';
import { recoverPasswordValidation } from '@presentation/shared/schemas';

type RecoverPasswordForm = {
	email: string;
}

const RecoverPassword: React.FC = () => {

	const { register, formState: { errors }, handleSubmit } = useForm<RecoverPasswordForm>({
		resolver: yupResolver(recoverPasswordValidation)
	});

	function onSubmit(data: RecoverPasswordForm) {
		console.log('🚀 ~ file: index.tsx:26 ~ onSubmit ~ data', data);
	}

	return (
		<main className={styles.recoverPasswordWrap}>
			<Card>
				<div className={styles.formWrap}>
					<Logo />

					<form>
						<h3>Forgot your password?</h3>
						<p>We can send you a link to reset your password</p>
						<InputText
							label='E-mail'
							name='email'
							register={register}
							error={errors.email?.message}
						/>
						<Button label='Reset Password' action={handleSubmit(onSubmit)}/>
						<Button label='Go back to sign in' styleType='SECONDARY' action={() => {}}/>
					</form>
				</div>
			</Card>
		</main>
	);
};

export { RecoverPassword };
