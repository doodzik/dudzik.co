var metalsmith       = require('metalsmith')
var fingerprint      = require('metalsmith-fingerprint-ignore')
var inPlace          = require('metalsmith-in-place')
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
var browserSync      = require('metalsmith-browser-sync')
var postcss          = require('metalsmith-postcss')

// Import metadata
var metadata   = require('./metadata')

// custom metalsmith plugins
var redirect         = require('./lib/plugin/redirect')
var firstPostAsIndex = require('./lib/plugin/first-post-as-index')
var archive          = require('./lib/plugin/archive')

var postcssPlugins   = require('./lib/postcss.js')

// Build
metalsmith(__dirname)
  .destination('.tmp')

  .metadata(metadata)

  .use(postcss(postcssPlugins.default))

  .use(fingerprint({ pattern: 'index.css' }))

  .use(markdown({
    typographer: true,
    linkify: true,
    html: true
  }))

  .use(collections({
    "digress-into-development": {
      pattern: 'digress-into-development/**/**.html',
      sortBy:  'date',
      reverse: true
    },
    "digress-into-minimalism": {
      pattern: 'digress-into-minimalism/**/**.html',
      sortBy:  'date',
      reverse: true
    }
  }))

  .use(permalinks({
      relative: false,
      pattern: ':collection/:headline'
  }))

  .use(redirect('php'))
  .use(archive('digress-into-development'))
  .use(firstPostAsIndex('digress-into-development'))

  .use(archive('digress-into-minimalism'))
  .use(firstPostAsIndex('digress-into-minimalism'))
  
  .use(inPlace('swig'))

  .use(layout({
    engine:   'pug',
    partials: "partials",
    default:  'default.pug',
    pattern:  '**/**.html'
  }))

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
    collection:  'digress-into-minimalism',
    destination: 'digress-into-minimalism/atom.xml',
    title:       'digress into minimalism',
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
    postcss(postcssPlugins.production)
  ))

  .use(If(
    process.env.PRODUCTION,
    compress()
  ))

  .build(function(err){
    if (err) throw err
  })
