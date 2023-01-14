import { CarModel } from '@domain/models';
import { faker } from '@faker-js/faker';

export const mockCars = (): CarModel[] => ([
	{
		id: faker.datatype.uuid(),
		model: faker.random.word(),
		type: faker.random.word(),
		description: faker.random.words(),
		capacity: +faker.random.numeric(),
		autonomy: +faker.random.numeric(),
		transmission: faker.random.word(),
		price: +faker.random.numeric(),
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
		model: faker.random.word(),
		type: faker.random.word(),
		description: faker.random.words(),
		capacity: +faker.random.numeric(),
		autonomy: +faker.random.numeric(),
		transmission: faker.random.word(),
		price: +faker.random.numeric(),
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
