import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, act, within, waitFor } from '@testing-library/react';

import { Home } from '@presentation/pages';
import { RemoteLoadAdvertisementsSpy } from '@presentation/test';

type SutTypes = {
	remoteLoadAdivertisementsSpy: RemoteLoadAdvertisementsSpy
}

const makeSut = async (
	remoteLoadAdivertisementsSpy = new RemoteLoadAdvertisementsSpy()
): Promise<SutTypes> => {
	await act(async () => render(
		<BrowserRouter>
			<Home loadAdvertisements={remoteLoadAdivertisementsSpy} />
		</BrowserRouter>
	));

	return {
		remoteLoadAdivertisementsSpy
	};
};

describe('Home Page', () => {
	test('Should show the basic elements', async () => {
		await makeSut();
		expect(screen.getByTestId('header')).toBeInTheDocument();
		expect(screen.getByTestId('footer')).toBeInTheDocument();
	});

	test('Should show skeleton when loading ADs', async () => {
		await makeSut();
		const skeletons = screen.queryAllByTestId('skeleton-advertising');
		expect(skeletons).toHaveLength(2);
		expect(skeletons[0]).toHaveAttribute('data-variant', 'PRIMARY');
		expect(skeletons[1]).toHaveAttribute('data-variant', 'SECONDARY');
	});

	test('Should show skeleton when loading cars', async () => {
		await makeSut();
		const skeletons = screen.queryAllByTestId('skeleton-car');
		expect(skeletons).toHaveLength(8);
	});

	test('Should show advertisements successfully', async () => {
		await makeSut();
		waitFor(() => {
			const advertisements = screen.queryAllByTestId('card-advertising');
			expect(within(advertisements[0]).getByTestId('title'))
				.toBe('The Best Plataform for Car Rental');
			expect(within(advertisements[0]).getByTestId('description'))
				.toBe('Ease of doing a car rental safely and reliably. Of course at a low price.');
			expect(within(advertisements[0]).getByTestId('button')).toHaveTextContent('Rental Car');
			expect(within(advertisements[1]).getByTestId('title'))
				.toBe('Easy way tp rent a car at a low price');
			expect(within(advertisements[1]).getByTestId('description'))
				.toBe('Providing cheap car rental services and safe and comfortable facilities.');
			expect(within(advertisements[1]).getByTestId('button')).toHaveTextContent('Rental Car');
		});
	});

	test('Should not show advertisements when there are none', async () => {
		const remoteLoadAdivertisementsSpy = new RemoteLoadAdvertisementsSpy();
		jest.spyOn(remoteLoadAdivertisementsSpy, 'load').mockResolvedValue([]);
		await makeSut(remoteLoadAdivertisementsSpy);
		waitFor(() => {
			const advertisements = screen.queryAllByTestId('card-advertising');
			expect(advertisements).toHaveLength(0);
		});
	});

	test('Should call LoadAdivertising only once', async () => {
		const { remoteLoadAdivertisementsSpy } = await makeSut();
		waitFor(() => {
			expect(remoteLoadAdivertisementsSpy.callsCount).toBe(1);
		});
	});
});
