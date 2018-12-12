module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/*'
  ],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
