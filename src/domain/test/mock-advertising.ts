import { faker } from '@faker-js/faker';
import { AdvertisingModel } from '@domain/models';

const mockAdvertising = (): AdvertisingModel[] => [
	{
		id: faker.datatype.uuid(),
		title: 'The Best Plataform for Car Rental',
		description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
		image: faker.internet.url(),
		date: {
			start: faker.date.past().toISOString(),
			end: faker.date.future().toISOString(),
		}
	},
	{
		id: faker.datatype.uuid(),
		title: 'Easy way tp rent a car at a low price',
		description: 'Providing cheap car rental services and safe and comfortable facilities.',
		image: faker.internet.url(),
		date: {
			start: faker.date.past().toISOString(),
			end: faker.date.future().toISOString(),
		}
	}
];

export { mockAdvertising };

