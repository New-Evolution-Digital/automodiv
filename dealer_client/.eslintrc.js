module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'next', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true
      }
    ]
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: [
        'airbnb-typescript',
        'next/core-web-vitals',
        'plugin:prettier/recommended'
      ],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto',
            singleQuote: true,
            tabWidth: 2
          }
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ],
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'class-methods-use-this': 'off', // _document.tsx use render method without `this` keyword
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
      }
    }
  ]
}
