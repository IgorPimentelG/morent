export const messagePatterns = {
	'email': 'Enter a valid e-mail',
	'password': 'Enter at least one latter, one number and one special caracter',
	'required': 'Required field',
	'min_password': 'Enter a minimum of 8 characters',
	'password_match': 'Passwords must match'
};

export const regexPatterns = {
	'name': /[a-z]/g,
	'password': /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
};
