module.exports = {
    'moduleFileExtensions': [
        'ts',
        'js'
    ],
    'transform': {
        '^.+\\.ts$': [
            'ts-jest', {
                tsconfig: 'tsconfig.json'
            },
        ],
    },
    'testMatch': [
        '**/test/**/*.test.ts'
    ],
    setupFiles: ['./jest.setup.js']
};