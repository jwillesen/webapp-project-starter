/* eslint no-var: "off" */

var path = require('path')
var webpackConfig = require('./webpack.config.js')

webpackConfig.module.loaders[0].loader = 'babel-istanbul'
webpackConfig.module.loaders[0].exclude = [/node_modules/, path.resolve('spec'), path.resolve('index.js')]
webpackConfig.module.loaders.unshift({
  test: /\.js$/,
  loader: 'babel',
  exclude: [path.resolve('lib'), /node_modules/],
})

module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: ['spec/spec-index.js'],
    preprocessors: {
      'spec/spec-index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage'],
    webpack: webpackConfig,
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage',
    },
  })
}
