import { UserModel } from '@domain/models/user-model';

export type AuthenticationParams = {
	email: string;
	password: string;
}

export interface Authentication {
	auth: (params: AuthenticationParams) => Promise<UserModel>
}


