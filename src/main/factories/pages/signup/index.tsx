import { SignUp } from '@presentation/pages';
import { makeRemoteAddAccount } from '@main/factories/usecases';

export const MakeSignUpPage = () => {
	return (
		<SignUp
			remoteAddAccount={makeRemoteAddAccount()}
		/>
	);
};
