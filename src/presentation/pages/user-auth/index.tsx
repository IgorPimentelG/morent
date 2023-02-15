import React, { useState } from 'react';

import { FormSignIn } from './forms/sign-in';
import { FormSignUp } from './forms/sign-up';

import styles from './styles.module.scss';
import { Authentication, AddAccount } from '@domain/usecases';
import { CoverCarSignIn } from '@presentation/assets';
import { Modal, ModalParams } from '@presentation/components/layout';
import { Logo } from '@presentation/components/ui';

type Props = {
	remoteAuthentication: Authentication;
	remoteAddAccount: AddAccount;
}

type ViewOperation = 'SIGN_IN' | 'SIGN_UP';

const UserAuth: React.FC<Props> = ({
	remoteAddAccount,
	remoteAuthentication
}) => {
	const [isLoad, setIsLoad] = useState<boolean>(false);
	const [viewOperation, setViewOperation] = useState<ViewOperation>('SIGN_IN');
	const [configModal, setConfigModal] = useState<ModalParams>({ isVisible: false });

	function onConfirmModal() {
		setConfigModal({ isVisible: false });
	}

	function changeForm(operation: ViewOperation) {
		setViewOperation(operation);
	}

	return (
		<main className={styles.mainWrap}>
			<div className={styles.card}>
				<div className={styles.formSignIn}>
					<Logo />
					<FormSignIn
						isLoad={isLoad}
						setIsLoad={setIsLoad}
						setConfigModal={setConfigModal}
						remoteAuthentication={remoteAuthentication}
						changeForm={changeForm}
					/>
				</div>
				<div className={styles.formSignUp}>
					<Logo />
					<FormSignUp
						isLoad={isLoad}
						setIsLoad={setIsLoad}
						setConfigModal={setConfigModal}
						remoteAddAccount={remoteAddAccount}
						changeForm={changeForm}
					/>
				</div>
				<div
					className={`
						${styles.imageTransition}
						${viewOperation === 'SIGN_IN' ? styles.showSignIn : styles.showSignUp}`
					}
				>
					<img src={CoverCarSignIn} />
				</div>
			</div>

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

export { UserAuth };
