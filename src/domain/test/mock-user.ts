import { UserModel } from '@domain/models';
import { faker } from '@faker-js/faker';

export const mockNewAccount = () => ({
	name: faker.name.firstName(),
	email: faker.internet.email(),
	password: 'any#4Password',
	passwordConfirmation: 'any#4Password'
});

export const mockCredentials = () => ({
	email: faker.internet.email(),
	password: 'any#4Password'
});

export const mockUser = (): UserModel => ({
	id: faker.datatype.uuid(),
	email: faker.internet.email(),
	name: faker.name.firstName(),
	profession: faker.database.column(),
	profileImage: faker.internet.url(),
	token: faker.datatype.uuid()
});
