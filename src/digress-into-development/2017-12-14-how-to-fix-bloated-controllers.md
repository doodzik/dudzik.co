---
layout: post.pug
headline: "How to fix bloated Controllers"
date: 2017-12-14
description: "This article shows a way to refactor a controller. It is proposed that each controller action should correspond to a CRUD operation. The effects that this refactoring has are highlighted."
keywords: dudzik, frederik dudzik, How to fix bloated Controllers, refactor controller, how to refactor a controller, crud, crud controller refactoring
---

You’ve come across these controllers in your MVC application. 
They are long and do too many things. 
You can’t understand them without thoroughly reading them.
So you start refactoring them.

As your first step you move the business logic to your model, which makes the controller shorter and easier to follow. But you see another problem: It is hard to understand the application at a higher level of abstraction. 
 
The many entry points, that are all named without following a convention, creep up on you. 
You miss the forest for the trees.

You weed your controllers out. 
One by one. 
Renaming each entry point according to one of the CRUD actions. 
You split each action that does more than one thing up. 
Every action that is left over gets reorganised into separate controllers. 

Afterwards you organise your controllers into folders.
This lets you find the relevant controllers quickly the next time you need them. 

Your controller folder structure starts resembling a REST URL Scheme. 
So you change your routes accordingly. 
Making access and navigation through your program more logical.

You lean back, take a deep breath and commit your changes. 
The next engineer who works with the code will thank you.

