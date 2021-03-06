var metalsmith   = require('metalsmith')
var fingerprint  = require('metalsmith-fingerprint-ignore')
var inPlace      = require('metalsmith-in-place')
var feed         = require('metalsmith-feed')
var layout       = require('metalsmith-layouts')
var collections  = require('metalsmith-collections')
var permalinks   = require('metalsmith-permalinks')
var sitemap      = require('metalsmith-sitemap')
// var linkcheck    = require('metalsmith-linkcheck')
var formatcheck  = require('metalsmith-formatcheck')
var compress     = require('metalsmith-gzip')
var If           = require('metalsmith-if')
var htmlMinifier = require('metalsmith-html-minifier')
var markdown     = require('metalsmith-markdownit')
var browserSync  = require('metalsmith-browser-sync')
var postcss      = require('metalsmith-postcss')
var uglify       = require('metalsmith-uglify')
var copy         = require('metalsmith-copy')
var path         = require('path')

// Import metadata
var metadata = require('./metadata')

// custom metalsmith plugins
var redirect         = require('lib/plugin/redirect')
var firstPostAsIndex = require('lib/plugin/first-post-as-index')
var archive          = require('lib/plugin/archive')

// fn
var sortDateField    = require('lib/sort-date')
var postcssPlugins   = require('lib/postcss')

// Build
metalsmith(__dirname)
	.destination('.tmp')

	.metadata(metadata)

	.use(function(files) {
		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			file['pathOriginal'] = filename
		})
	})

	.use(postcss(postcssPlugins.default))

	.use(fingerprint({ pattern: 'index.css' }))

	.use(If(
		process.env.PRODUCTION,
		uglify({filter: ['index.js']})
	))
	.use(fingerprint({pattern: 'contact/contact.js'}))
	.use(fingerprint({pattern: 'digress-into-development/2018-03-24-platform-values/index.js'}))

	.use(markdown({
		typographer: true,
		linkify: true,
		html: true
	}).use(require('markdown-it-footnote'))
    .use(require('markdown-it-classy')))

	.use(collections({
		'digress-into-development': {
			pattern: 'digress-into-development/**/**.html',
			sortBy:  sortDateField,
			reverse: true,
			metadata: {
				mailingList: 'http://eepurl.com/cnF9bH'
			}
		},
		'personal-blog': {
			pattern: 'personal-blog/**/**.html',
			sortBy:  sortDateField,
			reverse: true,
			metadata: {
				mailingList: 'http://eepurl.com/cnGa2X'
			}
		}
	}))

	.use(permalinks({
		relative: false,
		pattern: ':collection/:headline'
	}))

  .use(copy({
	pattern: 'digress-into-development/**/**.png',
	move: true,
	transform: file => {
		const splitted = file.split(path.sep)
		const tokens = splitted[1].split('-').slice(3)
		const result = tokens.join('-')
		splitted[1] = result
		return splitted.join(path.sep)
	}
}))

  .use(copy({
	pattern: 'personal-blog/**/**.png',
	move: true,
	transform: file => {
		const splitted = file.split(path.sep)
		const tokens = splitted[1].split('-').slice(3)
		const result = tokens.join('-')
		splitted[1] = result
		return splitted.join(path.sep)
	}
}))

	.use(redirect('php'))
	.use(archive('digress-into-development'))
	.use(firstPostAsIndex('digress-into-development'))

	.use(archive('personal-blog'))
	.use(firstPostAsIndex('personal-blog'))

	.use(function(files) {
		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			if(typeof file.noindex !== 'undefined') {
				file.head = file.head || ''
				file.head = file.head + '<meta name=\'robots\' content=\'noindex\' />'
			}
		})
	})

	.use(inPlace('swig'))

	.use(layout({
		engine:   'pug',
		partials: 'partials',
		default:  'default.pug',
		pattern:  '**/**.html'
	}))

// This is done so the title in the rss is set // This issue arises because the title var is used in the layout
// And thus the actual var for the title is called headline
	.use(function(files) {
		var filenames = Object.keys(files)
		filenames.forEach(function (filename) {
			var file = files[filename]
			if(typeof file.headline !== 'undefined') {
				file.title = file.headline
			}
		})
	})

// TODO: remove this rss feed
	.use(feed({
		collection:  'digress-into-development',
		destination: 'atom.xml',
		title:       'digress into development',
	}))

	.use(feed({
		collection:  'digress-into-development',
		destination: 'digress-into-development/atom.xml',
		title:       'digress into development',
	}))

	.use(feed({
		collection:  'personal-blog',
		destination: 'personal-blog/atom.xml',
		title:       'personal blog',
	}))

	.use(formatcheck({ verbose: true }))
	.use(sitemap({ hostname: 'https://dudzik.co' }))
	// .use(linkcheck({ failMissing: true, verbose: true }))

	.use(If(
		!process.env.PRODUCTION,
		// Serve and watch for changes
		browserSync({
			server : '.tmp',
			files : []
			// files : ['src/**/*', 'layouts/**/*']
		})
	))

	.use(If(
		process.env.PRODUCTION,
		htmlMinifier()
	))

	.use(If(
		process.env.PRODUCTION,
		postcss(postcssPlugins.production)
	))

	.use(If(
		process.env.PRODUCTION,
		compress()
	))

	.build(function(err){
		if (err) throw err
	})
