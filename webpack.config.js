/* eslint no-var: "off" */

var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    bundle: './index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    root: [
      path.join(__dirname, 'lib'),
    ],
  },

  postcss: function () {
    return [autoprefixer]
  },

  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./package.json').version),
    }),
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/,
    }],

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      { test: /\.scss$/, loader: 'style!css!postcss!sass', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!postcss', exclude: /node_modules/ },
    ],
  },

}
