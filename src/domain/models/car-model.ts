export type CarModel = {
	id: string;
	model: string;
	type: string;
	description: string;
	capacity: number;
	autonomy: number;
	transmission: string;
	price: number;
	oldPrice?: number;
	images: string[];
	availability: {
		locations: string[];
		date: {
			start: Date;
			end: Date;
		},
		time: {
			start: Date;
      end: Date;
		}
	}
}
