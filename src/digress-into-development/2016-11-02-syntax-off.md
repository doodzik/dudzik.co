---
layout: post.pug
headline: :syntax off
date: 2016-11-02
description: My experience with turning syntax highlighting off
keywords: dudzik, frederik dudzik, syntax off, no syntax highlighting, syntax highlighting off, a case against syntax highlighting
---
A couple of months ago I read a few articles about developers turning off their syntax highlighting. At that time I had never questioned its utility. I decided to conduct a little experiment with me as the test subject.

Initially, turning off syntax highlighting felt weird. I couldn't skip through the source that fast anymore and it became harder to read. Even though this appeared to be an impairment I found it to be the strongest argument for making the switch. By forcing me to read the code more carefully, it made me understand it better. Another thing that I've noticed was that my coding style changed. I was structuring my source better; I was applying recurring visual patterns, writing less convoluted statements, and keeping my files short and concise. Instead of external stimuli (e.g. Linter, QA) forcing these practices upon me I was doing them naturally.

The switch made me a big proponent of conditional highlighting. Unlike syntax highlighting, it  emphasizes only the information that is relevant at a given time. For example a syntax checker that highlights your mistakes on every file save. Because the noise of the syntax highlighting was gone the conditional highlighting was even more visible, which made it an even more effective tool.

As developers we have two objectives: Building software that works and writing code that others understand. Turning off syntax highlighting can make it easier to achieve the latter, but it doesn't have to. You should decide for yourself if it belongs in your tool chain.
