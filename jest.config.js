/** @type {import('jest').Config} */

const config = {
  preset: 'jest-expo',
  bail: true, 
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  testPathIgnorePatterns: [
    './__tests__/mocks',
    './__tests__/utils',
    './__tests__/coverage',
  ],
  setupFiles: [
    './__tests__/mocks/libs/async-storage.ts',
    './__tests__/mocks/libs/react-native-safe-area-context.ts',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./src/**/styles.ts'],
  coveragePathIgnorePatterns: [
    './src/@types',
    './src/styles',
    './src/libs/dayjs',
    './__tests__coverage',
  ],
  coverageDirectory: './__tests__/coverage',
};

module.exports = config;
