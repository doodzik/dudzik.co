---
layout:      post.pug
headline:    Content First Design
date:        2016-10-08
description: "Taking an minimalist approach to webdesign can lead to a more focused product. This will give your users what they came for: your content."
keywords:    dudzik, frederik dudzik, content first design, prograssive enhancement, minimalist webdesign
---
Developing a software product for the web is hard. Getting rid of as many distractions as possible in the development process gives you the ability to focus on the core experience.

## Assumptions

You start out by making as few assumptions as possible. Which means only using [semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML). This makes sure that you aren't excluding anyone from using your site. Additionally it helps you build an understanding of the information you are presenting.

## Structure

A website consists of multiple pages. Initially, each of them should serve only one purpose. This facilitates the creation of pages that are concise and easy to digest.

## Application Flow

After building all your pages you can concentrate on your application flow, defining clear paths from state to state. At this stage, feel free to combine multiple pages into one as it can enhance the usability.

## Layout

At this point, you can add [maintainable css](http://maintainablecss.com/). Starting with the smallest screen size that you want to support and changing the layout accordingly for the bigger sizes. Don't fall prey to the notion of developing a responsive website at all costs. It sometimes makes sense to serve a separate website for bigger screens, with added functionality. Building a mobile first website helps you avoid the pain of porting a layout from a bigger screen to a smaller one.

## Styling

After defining the layout, you add colors and icons to your design. You do this so you don't share information solely through your styles. This is important as people have impairments that you aren't aware of. Adding images should be the last step as they tend to be the last to be loaded. You should add relevant alt tags and display the images as [css gradients](https://github.com/fraser-hemp/gradify) while they are loading.

## Enhancement

[JavaScript is not always available](http://kryogenix.org/code/browser/everyonehasjs.html). Unlike CSS and HTML JavaScript doesn't degrade gracefully. Which means its absence breaks everything related. Therefore JavaScript should only be used as a usability enhancement. Some projects will need JavaScript to function properly. 
Implement as much as possible without it; let your users know that they need JavaScript to access your website's full feature set.

## Extending

A website isn't finished with its initial release. Adding a feature requires a full run through this list. You may need to create separate sites for different screen sizes later on. Enhancements and fixes won't require all steps in this list most of the time. Disabling CSS or JavaScript in the development tools will help you to work on the specific step.
