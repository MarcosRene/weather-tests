
/** @type {import('jest').Config} */

const config = {
  preset: "jest-expo",
  setupFiles: ["<rootDir>/__tests__/mocks/libs/async-storage.ts", "<rootDir>/__tests__/mocks/libs/react-native-safe-area-context.ts"],
  setupFilesAfterEnv: ["@testing-library/react-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg"
  }
};

module.exports = config;
