import { CarModel } from '@domain/models';
import { faker } from '@faker-js/faker';

export const mockCars = (): CarModel[] => ([
	{
		id: faker.datatype.uuid(),
		model: 'Koenigsegg',
		type: 'sport',
		description: faker.random.words(),
		capacity: 2,
		autonomy: 90,
		transmission: 'manual',
		price: 99.00,
		images: [faker.internet.url()],
		availability: {
			locations: [faker.random.word(), faker.random.word()],
			date: {
				start: faker.date.future(),
				end: faker.date.future()
			},
			time: {
				start: faker.date.future(),
				end: faker.date.future()
			}
		}
	},
	{
		id: faker.datatype.uuid(),
		model: 'Nissan GT-R',
		type: 'sport',
		description: faker.random.words(),
		capacity: 2,
		autonomy: 80,
		transmission: 'manual',
		price: 80.00,
		oldPrice: 100.00,
		images: [faker.internet.url()],
		availability: {
			locations: [faker.random.word(), faker.random.word(), faker.random.word()],
			date: {
				start: faker.date.future(),
				end: faker.date.future()
			},
			time: {
				start: faker.date.future(),
				end: faker.date.future()
			}
		}
	}
]);
