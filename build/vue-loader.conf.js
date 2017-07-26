var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var cssLoaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
})

cssLoaders.ts = 'ts-loader!tslint-loader'
cssLoaders.js = 'babel-loader!eslint-loader'

module.exports = {
  loaders: cssLoaders,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  esModule: true
}
