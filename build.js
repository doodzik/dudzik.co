var browserSync      = require('metalsmith-browser-sync')
var postcss          = require('metalsmith-postcss')
var cssnano          = require('cssnano')
var fingerprint      = require('metalsmith-fingerprint-ignore')
var inPlace          = require('metalsmith-in-place')
var metalsmith       = require('metalsmith')
var feed             = require('metalsmith-feed')
var layout           = require('metalsmith-layouts')
var collections      = require('metalsmith-collections')
var permalinks       = require('metalsmith-permalinks')
var sitemap          = require('metalsmith-sitemap')
var linkcheck        = require('metalsmith-linkcheck')
var If               = require('metalsmith-if')
var compress         = require('metalsmith-gzip')
var formatcheck      = require('metalsmith-formatcheck')
var htmlMinifier     = require("metalsmith-html-minifier")
var markdown         = require('metalsmith-markdownit')
var minimatch        = require("minimatch")

var autoprefixer     = require('autoprefixer')

var plugins = [
  autoprefixer
]

// Import metadata
var metadata   = require('./metadata')

// Build
metalsmith(__dirname)
  .destination('.tmp')

  .metadata(metadata)

  .use(postcss(plugins))

  .use(fingerprint({ pattern: 'index.css' }))

  .use(markdown({
    typographer: true,
    linkify: true,
    html: true
  }))

  .use(collections({
    "digress-into-development": {
      pattern: 'digress-into-development/**/**.html',
      sortBy:  'timestamp',
      reverse: true
    },
    "simplify": {
      pattern: 'simplify/**/**.html',
      sortBy:  'timestamp',
      reverse: true
    }
  }))

  .use(permalinks({
      relative: false,
      pattern: ':collection/:headline'
  }))

  // minimatch the filenames
  .use(function (files, metalsmith, done) {
        // remove archive from collection
        metalsmith.metadata().collections['digress-into-development'].pop()

        Object.keys(files).forEach(function (filename) {
            var file = files[filename]

            // add headline metadata to index page of digress into dev
            if ( minimatch(filename, 'digress-into-development/index.html') ) {
                file['headline'] = metalsmith.metadata()
                                             .collections['digress-into-development'][0]
                                             .headline
            }
            else if ( minimatch(filename, 'simplify/index.html') ) {
                file['headline'] = metalsmith.metadata()
                                             .collections['simplify'][0]
                                             .headline
            } 
        })
        done()
  })

  .use(inPlace('swig'))

  .use(layout({
    engine: 'jade',
    default: 'default.jade',
    pattern: '**/**.html'
  }))

  .use(feed({
    collection: 'digress-into-development',
    destination: 'atom.xml',
    title: 'digress into development',
    description: 'hallo world',
  }))

  // .use(formatcheck({ verbose: true }))
  .use(sitemap({ hostname: 'http://dudzik.co' }))

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
    postcss([cssnano])
  ))

  .use(If(
    process.env.PRODUCTION,
    compress()
  ))

  .build(function(err){
    if (err) throw err
  })
