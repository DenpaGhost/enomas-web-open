module.exports = {
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    moduleFileExtensions: [
        'ts',
        'js',
        'vue'
    ],
    moduleNameMapper: {
        "^~/(.+)": "<rootDir>/$1",
        "^@/(.+)": "<rootDir>/$1"
    },
    setupFiles:[
        'dotenv/config'
    ]
};