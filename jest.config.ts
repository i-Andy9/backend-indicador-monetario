module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testTimeout: 30000,
    maxWorkers: '20%',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    coveragePathIgnorePatterns: ['node_modules', 'src/index.*',],
  };