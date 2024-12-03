import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'url';

// NOTE: FlatConfigに対応していないconfigがある場合はcompatを使用する。
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

const srcConfg = {
    files: ['src/**/*.{js,ts,jsx,tsx}'],
    plugins: {
        react,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
            kintone: 'readonly',
        },
        parser: tsParser,
    },
    rules: {
        // デフォルトは2. 自由に設定して良い
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }]
    },
};

const testConfg = {
    files: ['test/**/*.test.{js,ts}'],
    plugins: {
        jest
    },
    languageOptions: {
        globals: {
            ...globals.jest,
            kintone: 'readonly',
        },
        parser: tsParser,
    },
    rules: {
        // デフォルトは2. 自由に設定して良い
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }]
    },
};

const configFileConfig = {
    files: [
        'webpack.config.js',
        'prettier.config.js',
        'jest.config.js',
        'jest.setup.js',
        'eslint.config.mjs'
    ],
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }]
    },
};

// NOTE: 全てのconfig設定で無視される。
const ignoreConfig = {
    ignores: ['dist']
};

// NOTE: 下のconfigのrulesが優先して適用されます。
export default [
    ...compat.extends('@cybozu/eslint-config'),
    srcConfg,
    testConfg,
    configFileConfig,
    ignoreConfig
];