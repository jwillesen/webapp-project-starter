/* eslint no-var: "off" */

var path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'eslint-loader',
        enforce: 'pre',
      }, {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: [{
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
          },
        }],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'public'),
  },
}
