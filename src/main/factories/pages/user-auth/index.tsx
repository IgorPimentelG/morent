import { UserAuth } from '@presentation/pages';
import {
	makeRemoteAddAccount,
	makeRemoteAuthentication
} from '@main/factories/usecases';

export const MakeUserAuthPage = () => {
	return (
		<UserAuth
			remoteAddAccount={makeRemoteAddAccount()}
			remoteAuthentication={makeRemoteAuthentication()}
		/>
	);
};
