import { UserModel } from './user-model';

export type ReviewModel = {
	id: string;
	rate: number;
	message: string;
	date: Date;
	user: UserModel;
}
