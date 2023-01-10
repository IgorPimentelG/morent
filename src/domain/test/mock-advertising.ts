import { faker } from '@faker-js/faker';
import { AdvertisingModel } from '@domain/models';

const mockAdvertising = (): AdvertisingModel[] => [
	{
		id: faker.datatype.uuid(),
		title: faker.random.words(),
		description: faker.random.words(),
		image: faker.internet.url(),
		date: {
			start: faker.date.past().toISOString(),
			end: faker.date.future().toISOString(),
		}
	},
	{
		id: faker.datatype.uuid(),
		title: faker.random.words(),
		description: faker.random.words(),
		image: faker.internet.url(),
		date: {
			start: faker.date.past().toISOString(),
			end: faker.date.future().toISOString(),
		}
	}
];

export { mockAdvertising };

