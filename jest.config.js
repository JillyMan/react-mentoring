const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: defaults.moduleFileExtensions,
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif)$': '<rootDir>/__mocks__/fileMock.js',
    },
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/packages/.+/dist/', // ignore symlink packages
    ],
};
