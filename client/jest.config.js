module.exports = {
  // @see https://testing-library.com/docs/react-testing-library/setup#jest-27
  testEnvironment: 'jest-environment-jsdom',
  // @see https://testing-library.com/docs/react-testing-library/setup#skipping-auto-cleanup
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1', // to use alias with jest
  },
  // @see https://storybook.js.org/addons/@storybook/addon-jest
  // avoid an infinite loop when jest-test-results.json file is made with 'watch' option
  modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
};
