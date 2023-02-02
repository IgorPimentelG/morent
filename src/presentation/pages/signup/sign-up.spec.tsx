import ReactDOM from 'react-dom';
import { ReactNode, ReactPortal } from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { screen, fireEvent, render, waitFor, act } from '@testing-library/react';

import { SignUp } from '@presentation/pages';
import { RemoteAddAccountSpy } from '@presentation/test';
import { mockNewAccount } from '@domain/test';

const history = createMemoryHistory({ initialEntries: ['/signup', '/signin'] });

type SutTypes = {
	remoteAddAccountSpy: RemoteAddAccountSpy;
}

const makeSut = async (remoteAddAccountSpy = new RemoteAddAccountSpy()): Promise<SutTypes> => {
	await act(async () => {
		render(
			<Router
				location={history.location}
				navigator={history}
			>
				<SignUp
					remoteAddAccount={remoteAddAccountSpy}
				/>
			</Router>
		);
	});

	return {
		remoteAddAccountSpy
	};
};

const submitForm = async (): Promise<void> => {
	await waitFor(() => {
		const account = mockNewAccount();
		fireEvent.change(screen.getByTestId('input-name'), { target: { value: account.name }});
		fireEvent.change(screen.getByTestId('input-email'), { target: { value: account.email }});
		fireEvent.change(screen.getByTestId('input-password'), { target: { value: account.password }});
		fireEvent.change(screen.getByTestId('input-passwordConfirmation'), { target: { value: account.passwordConfirmation }});
		fireEvent.click(screen.getByTestId('button'));
	});
};

describe('SignUp', () => {
	test('Should start without any error', async () => {
		await makeSut();
		const errors = screen.queryAllByTestId('error');
		expect(errors.length).toBe(0);
	});

	test('Should show required fields', async () => {
		await makeSut();
		fireEvent.click(screen.getByTestId('button'));
		const errors = screen.queryAllByTestId('error');
		errors.forEach((error) => {
			expect(error).toBe('Required field');
		});
	});

	test('Should show the validation message', async () => {
		makeSut();
		await waitFor(() => {
			fireEvent.change(screen.getByTestId('input-name'), { target: { value: faker.internet.userName() }});
			fireEvent.change(screen.getByTestId('input-email'), { target: { value: faker.random.word() }});
			fireEvent.change(screen.getByTestId('input-password'), { target: { value: faker.random.alphaNumeric(3) }});
			fireEvent.change(screen.getByTestId('input-passwordConfirmation'),
				{ target: { value: faker.random.alphaNumeric(4) }}
			);
			fireEvent.click(screen.getByTestId('button'));
		});

		await waitFor(() => {
			const errors = screen.queryAllByTestId('error');
			expect(errors[0].textContent).toBe('Enter a valid e-mail');
			expect(errors[1].textContent).toBe('Enter a minimum of 8 characters');
			expect(errors[2].textContent).toBe('Passwords must match');
		});
	});
});
