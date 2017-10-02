--hhhhhhhhhhhhhhhhhllllllllllll-
layout: post.pug
headline: "Do Structured Bug Reports Reduce Their Processing Costs?"
date: 2017-07-27
description: 
keywords: dudzik, frederik dudzik, 
---

> [German Version]()

This article describes an empirical study showing how structured bug reports reduce the workload of developers. It is shown that fewer comments are written per bug report and fewer bug reports are generated. It is also noted that the processing time of bug reports is not reduced through their structuring. In addition, it is shown that the developers deal more intensively with the errors, which led to more closed bug reports.

// TK add % numbers?
//* 6% fewer comments per bug report are written
//* 4% fewer bug reports are opened
//* The processing time for bug reports increased by 40%
//* 26% more bug reports were closed

## Introduction

Bug reports play an important role in software projects. They are used to show (TK synonym) developers problems in the software they develop. The problems are directly reported to the developers by the user of the software. As a result, bug reports represent a medium which is used for communication between the user and the developer.

Bug reports Frequently do not contain important or include non-relevant information, which prevents effective processing of the bug reports. These problems made software developers want to give bug reports a structure, so that the user of the software provides only the necessary information [^1] [^2]. A feature to structure bug reports was introduced in February 2016 for the Github Issues tool [^3]. This feature is named Issue Template.

GitHub Inc. is a company that hosts software projects and provides them with a reporting tool called Issues. A large number of the projects hosted at GitHub are publicly accessible, providing a basis for answering the research question.

It has been assumed that Issue Templates reduce the processing effort of bug reports for the developer.

### GitHub Issues

A report sent by the user is called GitHub as an issue. An issue can be used to report bugs, suggest features, or make general discussions. A collection of reports is organized in a list.

Every user of the GitHub platform can create, comment and track an issue on a public software projects. Furthermore a user can react to an issue by adding an emoji to the issue. The user can see a sum of the emojis that users gave an issue. The processing status of an issue can be either "open" or "closed". The status can be changed at any point in time, except if it has been locked.

In order to be able to better classify issues, labels are used and function as categories. Multiple labels can be applied for an issue. At the beginning, standard labels are offered, for example, "Bug", "Wontfix", "Feature", etc. Furthermore a developer can be assigned to an issue, who is then responsible for its processing[^4].

Compared to the default form for creating an issue, where the user can freely and arbitrarily write, the Issue Templates inserts predefined questions and requirements in the previously blank form field. This is used to remind the user to provide relevant information when they opening a new issue. Each project defines their own Issue Template [^3].

```
# TK Example
```

##  Method

The hypothesis - structured bug reports reduce their processing effort - is verified by an empirical study that is carried out as follows:

The bug reports are compared  across several projects, which are monitored over the same time span of 5 months before and 5 months after the introduction of Issues Templates. 

For this empirical study, the 1,000 most popular projects are investigated. The popularity of a project is determined by its "star", TK bzw Favorisierungen, count. The relevant projects are queried through the Github API (version 3). The selected projects are further restricted:

* The project must have activated issues, 958 projects
* The project must have activated issue templates, 341 projects
* Issue templates must have been used for at least 10 months, 212 projects

The following research questions serve to verify the hypothesis:

- RQ1. How much does the number of newly opened bugs change? This question is intended to show how the workload for the developer changes, because a developer has to react to every new bug report in some way.
- RQ2. How much does the average number of comments per issue change? This question is intended to answer whether the communication effort for the developer changes.
- RQ3. How fast are bug reports closed? This question is aimed at whether structured bug reports contribute to faster processing.

Only issues are being evaluated, which contain a label with the content "bug", which are used by default for the identification of bug reports. A percentage deviation is calculated between the before and after of the introduction of the issue template. The extreme values are thereby removed, which amounts to 5% of all values. The percentage deviation is then used to calculate an average value for all projects.

# Results

In this section the results of the research questions are presented and interpreted. The records were collected in June 2017.

### RQ1. How much does the number of newly opened bugs change?

The number of open bugs has decreased by an average of 4%, which signifies a reduction of the developer's workload. Interestingly, the mean value shows a reduction of 11%. This can be attributed to the fact that the majority of the projects show a decline, but a small number of projects show a strong growth.

// TK check general trend of issues -> to empirical study layout

78 projects have seen an increase in bug reports, 130 projects recorded a reduction, and the rest have remained the same or have not classified their bugs before the introduction of the issue template. Projects with an increased volume of bugs reports show an increase of 342% and the other projects a reduction of 26%. The strong growth could be due to the fact that it has become easier to classify, or that these projects have experienced a very strong popularity growth [^5].

### RQ2. How much does the average number of comments per bug report change?

The average number of comments per bug report has decreased by 6%. If we only look at the closed bug reports, the number of comments per bug report decreases by 2%. It could be concluded that the developers have to ask less questions to clarify a bug report.

### RQ3. How fast are bug reports closed?

The share of closed bug reports increases by 26%, but it takes 40% longer to complete bug reports (TK im Mittelwert 3%). The result of RQ1 indicates that the number of open bug reports is decreasing. It can be assumed that the same bug is reported less frequently since can be closed more quickly. A further explanation might be that the bug reports have become more reproducible, which means that this is no longer the reason for closure and thus "fast" / "simple" closures are not so frequent. It can be assumed that the precisely formulated, structured bug reports have led to an intensive and goal-oriented analysis of the errors. It is easier to identify solutions if the problems are clearly defined (see the 26% increase in solved bugs and changing the 40% increase in duration until bugs are closed).

It can not be shown that structured bug reports contribute to their faster processing.

### Evaluation

The answers to the research questions suggest that structured bug reports reduce the workload of developers. This is reflected in the fact that fewer comments are written per bug report and fewer bug reports are opened. It has also been noted that the processing time of bug reports is not reduced by issue templates. It has been shown that structured bug reports have led to a more intensive and goal-oriented analysis of bugs.

In this study, the bug reporters were mostly developers and thus technically experienced users. It would be interesting to know how the test results would change if the bug reporters were not familiar with the software development field.

The quality of the issue templates can have an impact on the test results, but this outside the scope of this study. It was assumed that the project members include the necessary information in the issue template for each project.

The number of Emoji responses to bug reports and the number of users who follow the activity on bug reports could provide an insight into whether users are looking for existing bug reports rather than re-creating them.

## Conclusion

This article focused on the question of whether structured bug reports reduce their processing effort. According to the empirical study conducted for this paper, it can be summarized that structured bug reports reduce the workload in communication for developers. It can be seen(TK synonym feststellen), that structured bug reports caused a more intensive processing of bug reports.
The following findings were concluded from the investigation:

* 6% fewer comments per bug report are written
* 4% fewer bug reports are opened
* The processing time for bug reports increased by 40%
* 26% more bug reports were closed

// TK better conclusion?

[^1]: Just, Sascha, Rahul Premraj, and Thomas Zimmermann. "Towards the next generation of bug tracking systems." Visual languages and Human-Centric computing, 2008. VL/HCC 2008. IEEE symposium on. IEEE, 2008.
[^2]: Bettenburg, Nicolas, et al. "What makes a good bug report?." Proceedings of the 16th ACM SIGSOFT International Symposium on Foundations of software engineering. ACM, 2008.
[^3]: GitHub. (2017). Issue and Pull Request templates. [online] Available at: http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates [Accessed 28 Jun. 2017]. 
[^4]: GitHub. (2017). Mastering Issues. [online] Available at: http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/ [Accessed 28 Jun. 2017].
[^5]: GitHub Octoverse 2016. (2017). GitHub State of the Octoverse: 2016. [online] Available at: http://web.archive.org/web/20170321081647/http://octoverse.github.com [Accessed 4 Jul. 2017].

