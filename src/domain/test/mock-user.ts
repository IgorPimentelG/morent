import { faker } from '@faker-js/faker';

export const mockNewAccount = () => ({
	name: faker.name.firstName(),
	email: faker.internet.email(),
	password: 'any#4Password',
	passwordConfirmation: 'any#4Password'
});
