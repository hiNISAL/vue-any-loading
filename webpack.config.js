const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: true
  },
  entry: {
    index: resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}
