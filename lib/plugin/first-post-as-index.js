/**
 * Dependencies
 */
var minimatch = require('minimatch')

/**
 * Expose `firstPostAsIndex`
 */
module.exports = firstPostAsIndex

function firstPostAsIndex (collection) {
	return function (files, metalsmith, done) {
		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			if ( minimatch(filename, collection + '/index.html') ) {
				var first = metalsmith.metadata()
                              .collections[collection][0]
				file['pathOriginal'] = first.pathOriginal
				// file['headline']     = first.headline
				file['pathContent']  = '/' + first.path
				file['collection']   = collection
				// file['description']  = first.description
				// file['keywords']     = (file['keywords']) ? first.keywords : file['keywords'] + ',' + first.keywords
				done()
			}
		})
	}
}

