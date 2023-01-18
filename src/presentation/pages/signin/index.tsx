import React from 'react';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from './styles.module.scss';
import { CoverCar } from '@presentation/assets';
import { Button, IconButton, InputCheckbox, InputText, Link, Logo } from '@presentation/components/ui';

const SignIn: React.FC = () => {
	return (
		<div className={styles.signInWrap}>
			<div className={styles.cardWrap}>
				<div className={styles.formWrap}>
					<Logo />
					<form>
						<InputText label='E-mail' placeholder='Your e-mail'/>
						<InputText label='Password' placeholder='Your password'/>
						<div className={styles.checkbox}>
							<InputCheckbox label='Remember your data?' />
						</div>
						<Button label='Sign In' action={() => {}} />
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
					<img src={CoverCar} />
				</div>
			</div>
		</div>
	);
};

export { SignIn };
