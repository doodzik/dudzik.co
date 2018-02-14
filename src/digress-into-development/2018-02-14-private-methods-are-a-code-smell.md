---
layout: post.pug
headline: "Private Methods are a Code Smell"
date: 2018-02-14
description: This blog post explores why private methods are a code smell. It offers steps to combat the use of private methods and a way to determin when private methods should not be used. 
keywords: dudzik, frederik dudzik, why are private methods bad, private methods are an anti-pattern, how to test private functions, how to test private methods 
---

Over the years I have seen many classes, and I noticed one recurring theme:
Private methods being used to make a class do more than it should.

It begins quite harmlessly by splitting public methods up into private ones.
This step is meant to reduce the [complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) of the given method. But often what is actually going on is that behavior is abstracted that shouldn’t be in the class in the first place. For example, a validatePassword method shouldn’t be in a User class.
So instead of refactoring the private method into a Password class, nothing is refactored, because it requires less work.
Over time, you add another method and another method, and sooner or later you end up having [a class that is way too long](https://softwareengineering.stackexchange.com/a/125359). 

As a rule of thumb, a method should operate on the state of its class. 
Otherwise, it is the responsibility of another class. 
Merely changing a private method into a public one wouldn’t solve the violation of the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle).

Private methods tend not to get tested, which leads the public methods to resemble more of a black box than a composition of well-tested units.
This lack of testing becomes a problem with long classes as there are more ways that something can go wrong.

Just because a method is public doesn’t mean that it is accessible to the public.
For example, you could use namespaces to exclude a class/method from the public API, and thus ensure that it isn't misused externally.
An additional benefit of using namespaces is that it becomes easier to test your code as you don't have to [jump through so many hoops](https://stackoverflow.com/a/34658/2451690).
For example, not exporting the Password class, but still being able to test it.

As a developer, you can tell if a method does too much — this is the reason you split it up.
The argument is not against splitting up methods, but against private methods.
Treating private methods as a [code smell](https://martinfowler.com/bliki/CodeSmell.html) allows you to notice opportunities for abstraction.

