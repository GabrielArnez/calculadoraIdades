module.exports = {
  preset: "react-native",
  testIgnorePatterns: ["/node_modules/", "/.expo/", "./expo-shared/"],
  transform: {
    "ˆ.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
