module.exports =  {
  parser:  '@typescript-eslint/parser',  
  extends:  [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    sourceType:  'module',  
    ecmaVersion:  2021,
  },
  rules:  {
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
  },
};