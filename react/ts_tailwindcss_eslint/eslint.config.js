import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';


export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // === Core Rules ===
      'no-unused-vars': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-console': 'warn',
      'no-duplicate-imports': 'error',

      // === Spacing & Structure ===
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'always'], 
      'object-curly-spacing': ['error', 'always'],
      'space-infix-ops': ['error'],
      'comma-spacing': ['error', { before: false, after: true }],
      'semi-spacing': ['error', { before: false, after: true }],
      'block-spacing': ['error', 'always'],
      'no-trailing-spaces': ['error'],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
      'indent': ['error', 2, { SwitchCase: 1 }],

      // === Quotes & Semicolons ===
      'quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'semi': ['error', 'always'],

      // === Functions ===
      'space-before-function-paren': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],

      // === Braces ===
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
])

