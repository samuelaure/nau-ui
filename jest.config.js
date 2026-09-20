module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: 'src',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.spec\\.(t|j)sx?$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/../jest.setup.ts'],
  collectCoverageFrom: ['**/*.(t|j)s?(x)'],
  coverageDirectory: '../coverage',
}
