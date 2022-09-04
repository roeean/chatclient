module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-case-declarations': 'off',
    'indent': [
      'error',
      2
    ], 
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
