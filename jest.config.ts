export default {
  coveragePathIgnorePatterns: ['<rootDir>/.jest'],
  coverageReporters: ['clover', 'text'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setupPaths.ts', '<rootDir>/.jest/setupFunctions.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
