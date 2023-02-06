export type RecoverAccountParams = {
	email: string;
}

export interface RecoverAccount {
	recoverPassword: (params: RecoverAccountParams) => Promise<void>;
}
