/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const scanner = require('sonarqube-scanner');

scanner({
	serverUrl: 'http://localhost:9000',
	token: '',
	options: {
		'sonar.projectName': 'morent-project',
		'sonar.projectDescription': 'Car rent',
		'sonar.projectKey': 'morent',
		'sonar.projectVersion': '0.0.1',
		'sonar.exclusions': '',
		'sonar.sourceEncoding': 'UTF-8',
		'sonar.login': 'sqp_32575f0083fdf62c35fd1ec718f8209f75c6c2ee',
	}
}, () => process.exit());
