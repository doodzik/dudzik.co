---
layout: post.pug
headline: Web UX Patterns
date: 2016-10-25
description: "A list of web UX patterns that you should keep in mind when building a website"
keywords: dudzik, frederik dudzik, browser ux patterns, web ux pattern, what are web ux patternss
---

Utilizing well established [UX patterns](https://www.smashingmagazine.com/2012/06/design-patterns-when-breaking-rules-ok/) in development can lead to a more intuitive product. On the other hand breaking these can confuse users. Here are some web UX patterns that you should keep in mind:

## Semantic HTML

You can't predict how the user will consume your site. Using [semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML) makes sure everyone can access it.

## Links

Use links to navigate to another page. Don't wrap them in custom elements. This only breaks behavior like opening a link in the background (cmd/ctrl+click) or using plugins that rely on them ([vimium](https://vimium.github.io)).

## Scroll 

Most of the web is intended to be read from top to bottom. Don't make people scroll horizontally. Also, don't intercept the scroll event to implement your own scrolling behavior. This would make your design unintuitive.

## URLs

A URL is a reference to a resource. We use it to access pages on the web. Make each page of your webpage accessible. Otherwise it will cause confusion if a user wants to share, bookmark or navigate history.

## URLs Behind Authentication

Often URLs need authentication to be accessed. Visiting such a URL while not authenticated should redirect you to the login page. Singing in should take you to the page that you wanted to visit. This should work even if you opened several restricted pages at once. 

## History

Each page that you visit should be written to history. Otherwise, you break the forward and back buttons of the browser. Smartphones often implement them as swiping from the edges of your phone. Don't override that behavior.

## Link padding

Don't confuse users by making only the text in a link clickable. They expect to be able to click on the whole tile.

## Right Clicks

The web isn't a GUI. You shouldn't try to emulate it. The browser has a right click feature for a reason and it leverages the power of semantic html.

## Position Fixed

Avoid the usage of fixed elements on small devices. Users don't want to see a navigation bar or your app advertisement. They want to see the content.

If you would like to make an addition to this list feel free to open a [pull request](https://github.com/doodzik/dudzik.co/blob/master/src/digress-into-development/2016-10-25-web-ux-patterns.md). I would appreciate it.
