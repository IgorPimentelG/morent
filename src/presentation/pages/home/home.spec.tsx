import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, act, within, waitFor } from '@testing-library/react';

import { Home } from '@presentation/pages';
import { RemoteLoadAdvertisementsSpy, RemoteLoadCarsSpy } from '@presentation/test';

type SutTypes = {
	remoteLoadAdivertisementsSpy: RemoteLoadAdvertisementsSpy;
	remoteLoadCarsSpy: RemoteLoadCarsSpy;
}

type SutParams = {
	remoteLoadAdivertisementsSpy?: RemoteLoadAdvertisementsSpy;
	remoteLoadCarsSpy?: RemoteLoadCarsSpy;
}

const makeSut = async ({
	remoteLoadAdivertisementsSpy = new RemoteLoadAdvertisementsSpy(),
	remoteLoadCarsSpy = new RemoteLoadCarsSpy()
}: SutParams = {}): Promise<SutTypes> => {
	await act(async () => render(
		<BrowserRouter>
			<Home
				loadAdvertisements={remoteLoadAdivertisementsSpy}
				loadCars={remoteLoadCarsSpy}
			/>
		</BrowserRouter>
	));

	return {
		remoteLoadAdivertisementsSpy,
		remoteLoadCarsSpy
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
		await makeSut({ remoteLoadAdivertisementsSpy });
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

	test('Should show popular cars successfully', async () => {
		await makeSut();
		waitFor(() => {
			const cars = screen.queryAllByTestId('card-car');
			expect(within(cars[0]).getByTestId('model')).toBe('Koenigsegg');
			expect(within(cars[0]).getByTestId('type')).toBe('Sport');
			expect(within(cars[0]).getByTestId('image')).toBeInTheDocument();
			expect(within(cars[0]).getByTestId('autonomy')).toContain('90L');
			expect(within(cars[0]).getByTestId('transmission')).toContain('Manual');
			expect(within(cars[0]).getByTestId('capacity')).toContain('2 People');
			expect(within(cars[0]).getByTestId('price')).toBe('$99.00/day');

			expect(within(cars[1]).getByTestId('model')).toBe('Nissan GT-R');
			expect(within(cars[1]).getByTestId('type')).toBe('Sport');
			expect(within(cars[1]).getByTestId('image')).toBeInTheDocument();
			expect(within(cars[1]).getByTestId('autonomy')).toContain('80L');
			expect(within(cars[1]).getByTestId('transmission')).toContain('Manual');
			expect(within(cars[1]).getByTestId('capacity')).toContain('2 People');
			expect(within(cars[1]).getByTestId('price')).toBe('$80.00/day');
			expect(within(cars[1]).getByTestId('old-price')).toBe('$100.00');
		});
	});
});
