module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended',        
  ],
  root: true, 
  env: {
    node: true, 
    jest: true, 
  },
  ignorePatterns: [
    '.eslint.config.js',          
    'prisma/**'
  ],
  ignores: [
    'node_modules',
    'dist',
    'build',
    '*.js', 
    'prisma/**'
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', 
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', 
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    'prettier/prettier': [
      'error', 
      {
        endOfLine: 'auto', 
      },
    ],
  },
};