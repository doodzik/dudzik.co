/**
 * Dependencies
 */

var autoprefixer     = require('autoprefixer')
var cssvariables     = require('postcss-css-variables')
var cssnano          = require('cssnano')

var plugins = [
  cssvariables,
  autoprefixer
]

/**
 * Expose `postcss`
 */
module.exports = {
  default: plugins,
  production: [cssnano],
}
