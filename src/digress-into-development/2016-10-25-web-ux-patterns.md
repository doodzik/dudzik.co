---
layout: post.pug
headline: Web UX Patterns
date: 2016-10-25
description: "A list of web UX patterns that you should keep in mind when building a website"
keywords: dudzik, frederik dudzik, browser ux patterns, web ux pattern, what are web ux patternss
---

Utilizing well established [UX patterns](https://www.smashingmagazine.com/2012/06/design-patterns-when-breaking-rules-ok/) in development can lead to a more intuitive product. On the other hand, breaking these can confuse users. Here are some web UX patterns that you should keep in mind:

## Semantic HTML

You can’t predict how a user will consume your site. Using [semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML) makes sure everyone can access it.

## Links

Use links to navigate to another page. Don’t wrap them in custom elements, which only breaks behavior like opening a link in the background (cmd/ctrl+click) or using [plugins that rely on them](https://vimium.github.io).

## Link padding

Don’t confuse users by making only the text in a link clickable. They expect to be able to click on its padding as well.

## Visited Links

Consider styling visited links differently than regular links. This helps users navigate your content more comfortable as they don’t need to remember what they have seen already. Keep in mind that styling visited links differently isn’t helpful for all use cases.

## Clickable Elements

Add the [tabindex attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) to a clickable HTML element that isn’t a link to make it accessible through the keyboard.

## Right Clicks

The web isn’t a native GUI. You shouldn’t try to emulate it. The browser has a right-click feature for a reason, and it leverages the power of semantic HTML.

## Scroll 

Most of the web is intended to be read from top to bottom. Don’t make people scroll horizontally. Also, don’t intercept the scroll event to implement your scrolling behavior.

## URLs

An URL is a reference to a resource, and thus each page of your webpage has to be accessible through it. Otherwise, it will confuse users if they want to share it, bookmark it or navigate their history.

## History

Each page that you visit should be written to history. Otherwise, you break the forward and back buttons of the browser. Smartphones often implement them as swiping from the edges of your phone. Don’t override that behavior.

## URLs Behind Authentication

Often a webpage needs authentication to be accessed. Visiting an URL of such a site while not authenticated should redirect you to the login page. Singing in should take you to the page that you wanted to visit. This process should work even if you opened several restricted pages at once.

## Position Fixed

Avoid the usage of fixed elements on small devices. Users don’t want to see a navigation bar or your app advertisement. They want to look at your content.

Did I miss something? Open a [pull request](https://github.com/doodzik/dudzik.co/blob/master/src/digress-into-development/2016-10-25-web-ux-patterns.md) and add it to the list.

