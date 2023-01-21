import styles from './styles.module.scss';
import { Card } from '@presentation/components/layout';
import { Button, InputText, Logo } from '@presentation/components/ui';

const RecoverPassword: React.FC = () => {
	return (
		<main className={styles.recoverPasswordWrap}>
			<Card>
				<div className={styles.formWrap}>
					<Logo />

					<form>
						<h3>Forgot your password?</h3>
						<p>We can send you a link to reset your password</p>
						<InputText label='E-mail' />
						<Button label='Reset Password' action={() => {}}/>
						<Button label='Go back to sign in' styleType='SECONDARY' action={() => {}}/>
					</form>
				</div>
			</Card>
		</main>
	);
};

export { RecoverPassword };
