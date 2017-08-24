/**
 * Dependencies
 */
var _         = require('lodash')

/**
 * Expose `redirect`
 */
module.exports = redirect

function redirect (type) {
	if (type !== 'php') {
		throw new Error('redirect type is unsupported')
	}

	return function (files, metalsmith, done) {
		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			if (file.redirect_from) {
				var filePath = file.redirect_from.substr(0, file.redirect_from.lastIndexOf('.')) + '.php'
				var url      = metalsmith.metadata().site.url + '/' + file.path
				var fileNew  = _.cloneDeep(file)
				fileNew['private']  = true
				fileNew['contents'] = new Buffer(
					'<?php Header("HTTP/1.1 301 Moved Permanently");Header("Location:' + url + '");?>')
				files[filePath] = fileNew
			}
		})
		done()
	}
}
