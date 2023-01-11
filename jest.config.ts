export default {
	roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: "coverage",
	collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.stories.tsx',
    '!<rootDir>/src/main/**/*',
    '!**/*.d.ts'
  ],
  testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/main/config/jest/jest.setup.ts"],
	transform: {
    '.+\\.(ts|tsx)': 'ts-jest'
  },
	moduleNameMapper: {
    '@data/(.*)': '<rootDir>/src/data/$1',
		'@domain/(.*)': '<rootDir>/src/domain/$1',
		'@infra/(.*)': '<rootDir>/src/infra/$1',
		'@main/(.*)': '<rootDir>/src/main/$1',
		'@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '\\.(scss|png|jpg)$': 'identity-obj-proxy'
  }
};
