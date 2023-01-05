export default {
	roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  coverageProvider: "v8",
	moduleFileExtensions: ["ts", "tsx"],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "<rootDir>/src/**/index.{ts,tsx}",],
};
