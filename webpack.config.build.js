const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: resolve(__dirname, './src/directive/index.js')
  },
  output: {
    library: 'VueAnyLoading',
    libraryTarget: 'umd',
    filename: 'vue-any-loading.js',
    path: resolve(__dirname, './release')
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
