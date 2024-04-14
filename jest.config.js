
/** @type {import('jest').Config} */

const config = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/react-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ],
};

module.exports = config;