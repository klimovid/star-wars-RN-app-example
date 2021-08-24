module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['app', './src/app'],
          ['config', './src/config'],
          ['lib', './src/lib'],
          ['src', './src'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
