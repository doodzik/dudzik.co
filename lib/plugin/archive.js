/**
 * Dependencies
 */
var minimatch = require('minimatch')

/**
 * Expose `archive`
 */
module.exports = archive

function archive(collection) {
	return function (files, metalsmith, done) {
      // removes archive file from collection
		metalsmith.metadata().collections[collection].pop()

		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			file['pathContent'] = '/' + file.path
			if ( minimatch(filename, collection + '/**/**') ) {
				var mailingList = metalsmith.metadata().collections[collection].metadata.mailingList
				file['collectionName'] = collection.replace(/\-/g, ' ')
				file['rssPath']        = '/' + collection + '/atom.xml'
				file['mailingList']    = mailingList
			}
		})
		done()
	}
}
