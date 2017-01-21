const webpack = require('webpack');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const path = require('path');

// 目录
const rootDir = path.resolve(__dirname);
const srcDir = path.join(rootDir, 'src');
const distDir = path.join(rootDir, 'dist');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    `${srcDir}/index.js`
  ],
  output: {
    path: `${distDir}`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader?sourceMap!css-loader?sourceMap!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new openBrowserWebpackPlugin({ url: 'http://localhost:8080/index.html' })
  ]
}
