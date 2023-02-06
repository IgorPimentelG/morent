class AccountNotFoundError extends Error {
	constructor() {
		super('The account was not found in the database.');
		this.name = 'AccountNotFoundError';
	}
}

export { AccountNotFoundError };
