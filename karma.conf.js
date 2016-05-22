/* eslint no-var: "off" */

var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    singleRun: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: ['spec-index.js'],
    preprocessors: {
      'spec-index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['dots'],
    webpack: webpackConfig,
  })
}
