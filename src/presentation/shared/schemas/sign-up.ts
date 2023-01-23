import * as yup from 'yup';
import { messagePatterns, regexPatterns } from '../utils';

export const signUpValidation = yup.object().shape({
	name: yup.string()
		.required(messagePatterns['required'])
		.trim(),
	email: yup.string()
		.email(messagePatterns['email']).
		required(messagePatterns['required']),
	password: yup.string()
		.required(messagePatterns['required'])
		.min(8, messagePatterns['min_password'])
		.matches(regexPatterns.password, messagePatterns['password']),
	passwordConfirmation: yup.string()
		.required(messagePatterns['required'])
		.oneOf([yup.ref('password'), null], messagePatterns['password_match'])
});
