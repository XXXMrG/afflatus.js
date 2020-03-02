const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env = {}) {
  const entry = {};
  const plugins = [];
  const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/app.js',
    publicPath: '/',
  };

  // auto make entry for folders needs to restart webpack script
  function makeEntry(chapter) {
    const root = path.resolve(__dirname, chapter);
    const pa = fs.readdirSync(root);
    pa.forEach(el => {
      const info = fs.statSync(path.resolve(root, el));
      if (info.isDirectory()) {
        const entryPath = path.resolve(root, el, 'app.js');
        const isEntry = fs.existsSync(entryPath);
        if (isEntry) {
          entry[el] = entryPath;
        }
      }
    });
  }

  // use func to entry all folder files
  makeEntry('src/sprite');
  // set plugins for different environment
  if (env.production) {
    plugins.push(new CleanWebpackPlugin());
    // use entry path to gen html template path
    Object.keys(entry).forEach(key => {
      plugins.push(
        new HtmlWebpackPlugin({
          template: entry[key].replace(/app\.js$/, 'index.html'),
          title: key,
          chunks: [],
          filename: `${key}.html`,
        })
      );
    });
  } else {
    // development
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  console.log(env);
  return {
    mode: env.production ? 'production' : 'development',
    entry,
    output,
    devtool: env.production ? 'source-map' : 'inline-source-map',
    resolve: {
      alias: {},
    },
    module: {
      rules: [
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    devServer: {
      contentBase: path.join(__dirname, './src'),
      hot: true,
      compress: true,
      port: 3000,
    },
    plugins,
  };
};
