import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'next-env.d.ts',
            // Image files
            '**/*.png',
            '**/*.jpg',
            '**/*.jpeg',
            '**/*.gif',
            '**/*.svg',
            '**/*.webp',
            '**/*.ico',
        ],
    },
    {
        rules: {
            // Enforce 4 spaces for indentation
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            // Enforce single quotes
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            // Enforce consistent quote style in JSX
            'jsx-quotes': ['error', 'prefer-single'],
            // Disable React's prop-types rule since we're using TypeScript
            'react/prop-types': 'off',
        },
    },
];

export default eslintConfig;
