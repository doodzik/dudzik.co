---
layout: post.pug
headline: "A Case Against Global Node Modules"
date: 2017-03-26
description: This article highlights arguments for and against using global node modules
keywords: dudzik, frederik dudzik, why local modules, why should I use local modules
---

I keep on stumbling upon node modules that encourage global installation([1](http://web.archive.org/web/20170122115955/https://github.com/sindresorhus/xo/blob/master/readme.md), [2](http://web.archive.org/web/20161224131302/https://mochajs.org/), [3](http://web.archive.org/web/20170122115531/https://github.com/gotwarlost/istanbul/blob/master/README.md)), which allows them to be used as commands in a terminal.
For commands that aren't tied to a project this might be all right, but otherwise they shouldn't be installed globally.

A project might rely on a specific version of a command. 
If the command is required by another project you will have to reinstall the command every time you switch between projects.

Even if you use commands with a stable API you will have to specify them as a dependency.
As [npm](https://www.npmjs.com) doesn't offer a way to specify a global dependency an [additional configuration step](http://web.archive.org/web/20160611060024/https://docs.travis-ci.com/user/languages/javascript-with-nodejs#Using-Gulp) has to be added, documented and maintained.
This might seem like a small trade off, but as a project grows, a complex configuration will be more error prone.

A globally installed command has its advantages.
It requires less effort to write its name than its full path and it takes up less space, because it is reused throughout your system.

To reduce the memory footprint of your local packages you could switch to the [yarn package manager](https://yarnpkg.com).
It installs a specific module version in a global cache and links it into the local node_modules folder.

To make working with local commands as pleasant as with global ones you could reference them like global ones in the [script section of the package.json file](http://web.archive.org/web/20170101092618/https://docs.npmjs.com/misc/scripts#path) or add a command to your shell that [executes locally installed commands of the nearest node project](https://web.archive.org/web/20160818010711/http://www.2ality.com/2016/01/locally-installed-npm-executables.html).

