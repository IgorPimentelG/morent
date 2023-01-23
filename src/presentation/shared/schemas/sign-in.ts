import * as yup from 'yup';
import { messagePatterns } from '../utils';

export const signInValidation = yup.object().shape({
	email: yup.string()
		.email(messagePatterns['email']).
		required(messagePatterns['required']),
	password: yup.string()
		.required(messagePatterns['required'])
		.min(8, messagePatterns['min_password'])
});
