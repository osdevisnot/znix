module.exports = {
  coverageDirectory: 'dist',
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageReporters: ['text', 'lcov'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).(js|ts)?(x)'],
  transform: { '.(ts|tsx|js|jsx)': 'ts-jest' },
  transformIgnorePatterns: ['node_modules/(?!(lit-html)/)'],
  coverageThreshold: { global: { branches: 65, functions: 80, lines: 85, statements: 80 } }
};
