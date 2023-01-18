import React from 'react';
import { BsGoogle, BsGithub, BsTwitter } from 'react-icons/bs';

import styles from './styles.module.scss';
import { CoverCar } from '@presentation/assets';
import { Button, IconButton, InputCheckbox, InputText, Link, Logo } from '@presentation/components/ui';

const SignUp: React.FC = () => {
	return (
		<div className={styles.signUpWrap}>
			<div className={styles.cardWrap}>
				<div className={styles.formWrap}>
					<Logo />
					<form>
						<InputText label='Name' placeholder='Your name'/>
						<InputText label='E-mail' placeholder='Your e-mail' type="email" />
						<InputText label='Password' placeholder='Your password' type="password" />
						<InputText label='Password Confirmation' placeholder='Confirm your password' type="password" />
						<div className={styles.checkbox}>
							<InputCheckbox label='I agree to the terms & conditions' />
						</div>
						<Button label='Sign Up' action={() => {}} />
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
					<img src={CoverCar} />
				</div>
			</div>
		</div>
	);
};

export { SignUp };
