import * as yup from 'yup';
import { messagePatterns } from '../utils';

export const recoverPasswordValidation = yup.object().shape({
	email: yup.string()
		.required(messagePatterns['required'])
		.email(messagePatterns['email'])
});
