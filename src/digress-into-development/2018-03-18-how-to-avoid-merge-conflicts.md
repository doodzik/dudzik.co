---
layout: post.pug
headline: How to avoid Merge Conflicts
date: 2018-03-18
description: This article offers steps you can take to prevent merge conflicts from occurring.
keywords: dudzik, frederik dudzik, how to avoid merge conflicts, how to avoid a merge conflict, merge conflict, how to prevent merge conflicts
---

A version control system in development, such as git, is one of the most important elements in a developer’s toolkit. 
One of its core benefits is that it enables a team to work on the same project with each member using their own machine.
A merge conflict occurs, when team members try to merge their progress and multiple versions of the same file exist.
These conflicts are often a headache to resolve and generally, you want to avoid them or keep them as small as possible.

One way of mitigating merge conflicts is to change your way of using git.
Try to develop in shorter increments, merging your progress as soon as possible into your [development branch](http://nvie.com/posts/a-successful-git-branching-model/).
Likewise, keep your [feature branch](https://softwareengineering.stackexchange.com/a/266827) up to date by merging/rebasing the development branch into your feature branch.
Merging frequently will make sure that you avoid having to resolve a large and confusing conflict.

Good communication can help avoid most merge conflicts.
In the planning phase make sure that as few tasks as possible overlap for team members.
When you can’t avoid that, make sure you talk with the developers about what they want to do next and how.
You could work together on a problem, decide a common strategy, or plan on who is going to do what first. 
The latter two options become feasible when you develop and merge in shorter increments as you aren’t blocked by the other person for too long.
If the merge conflict is unavoidable and messy try to resolve the conflict together with the team member who made the changes.
Also, don’t forget to tell others if you plan on refactoring substantial parts of the code base.

Do not forget to follow code conventions and to configure your editor accordingly.
Whitespace at the end of lines, the use of spaces/tabs for indentation, and much more are can cause a merge conflict unnecessarily.
You can enforce your conventions by using a [pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) or a continuous integration service.
And please ignore compiled files, because if they do change then, no-one knows how they are supposed to look.

Using many short files rather than long ones reduces the probability of working on the same file.
Here are a few ways you can split up a file:

* Each file should contain one class. 
* Make sure that your class is responsible for a single thing to keep the class concise.
* If you work with controllers you could enforce that each controller only includes operations [defined by a CRUD action](/digress-into-development/how-to-fix-bloated-controllers/).
* Or something else that makes sense for your particular project.

Obviously creating too many files could lead to an unclear structure.
You can move files into subfolders which add a little bit more structure.
Or you could move them into standalone modules and reuse them later.

Avoid doing too much in one line of code, which makes it harder to select the appropriate changes in a merge conflict.
This goes hand in hand with long methods.
Just avoid them.

There is no silver bullet for mitigating merge conflicts.
However, I hope that this will help you to prevent many of the unnecessary ones.
Feel free to [open a PR](https://github.com/doodzik/dudzik.co/tree/master/src/digress-into-development) to add your own advice.

