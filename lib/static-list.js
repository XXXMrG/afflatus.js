module.exports = {
  typeChoice: ['webpack', 'vue', 'react'],
  package: {
    name: '',
    version: '1.0.0',
    main: 'index.js',
    scripts: {
      test: 'echo "Error: no test specified" && exit 1',
    },
    keywords: [],
    author: '',
    license: 'ISC',
    description: '',
  },
  webpackDeps: ['webpack', 'webpack-cli', 'webpack-dev-server'],
  webpackLoaders: ['style-loader', 'css-loader', 'babel-loader'],
  webpackDefaultLoaders: ['style-loader', 'css-loader'],
  webpackPlugins: ['html-webpack-plugin', 'clean-webpack-plugin'],
  webpackDefaultPlugins: ['html-webpack-plugin', 'clean-webpack-plugin'],
};
