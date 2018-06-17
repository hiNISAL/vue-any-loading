const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: resolve(__dirname, './src/directive/index.js')
  },
  output: {
    library: 'VueAnyLoading',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: resolve(__dirname, './release/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
};
