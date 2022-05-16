module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        './node_modules/gts/',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        '': 'never',
      },
    ],
  },
};
