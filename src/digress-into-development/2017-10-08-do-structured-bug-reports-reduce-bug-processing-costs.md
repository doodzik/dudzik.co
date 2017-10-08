---
layout: post.pug
headline: Do Structured Bug Reports Reduce Bug Processing Costs?
date: 2017-10-08
description: This article is attempts to empirically show that structured bug reports reduce the bug management effort of developers. It is shown that having a template for bug reports results in fewer comments per bug report and fewer bug reports generated. Additionally, developers spend more time on a given report and more reports were closed.
keywords: dudzik, frederik dudzik, github issue template, do github issue template work, structured bug reports, structured github issues
---

This article is attempts to empirically show that structured bug reports reduce the bug management effort of developers. It is shown that having a template for bug reports results in fewer comments per bug report and fewer bug reports generated. Additionally, developers spend more time on a given report and more reports were closed.

## Introduction

Bug reports play an important role in software projects. They are used to inform developers of problems in software. The problems are reported to developers by users. Bug reports represent an important medium of communication between the user and the developer.

Frequently bug reports omit important details or include irrelevant information, which often interferes with the effective processing of the bug reports. Structured bug reports, which encourage the user to provide only the necessary information, are a solution to these problems, which has been shown to be valued by developers. [^1] [^2] A feature named  Issue Template was introduced in February 2016 to the Github Issues tool, allowing bug reports to be structured. [^3] GitHub Inc. is a company that hosts software projects and provides them with a reporting tool called Issues. A large number of the projects hosted at GitHub are publicly accessible, providing a basis for answering the research question. 

### GitHub Issues

A report sent by the user on GitHub is called as an issue. An issue can be used to report bugs, suggest features, or make general discussions. A collection of reports is organized in a list.

Every user of the GitHub platform can create, comment and track an issue on a public software projects. Furthermore a user can react to an issue by adding an emoji. The user can see a count of the emojis that users gave an issue. The processing status of an issue can be either “open” or “closed”. The status can be changed at any point, except if it has been locked.

In order to be able to better classify issues, labels are used, which function as categories. Multiple labels can be applied to an issue. At the beginning, standard labels are offered, for example, “Bug”, “Wontfix”, “Feature”, etc. Furthermore a developer can be assigned to an issue, who is then responsible for its processing[^4].

Compared to the default form for creating an issue, where the user can write anything, the Issue Templates inserts predefined questions and requirements in the previously blank form field. This is used to remind the user to provide relevant information when they open a new issue. Each project defines their own Issue Template [^3].

![An Issue form without an Issue Template.](./without-issue-template.png)
*An Issue without an Issue Template.*
{figure}

![An Issue form with an Issue Template.](./with-issue-template.png)
*An Issue with an Issue Template.*
{figure}

##  Method

For this empirical study, the 1,000 most popular projects hosted on GitHub (as of June 2017) are investigated. The popularity of a project is determined by the number of “stars” it has received from users. Every user on GitHub can give a project a star to communicate that they like the project. The relevant projects were further filtered as follows:

* The project must have activated issues, 958 projects
* The project must have activated issue templates, 341 projects
* Issue templates must have been activated for at least 5 months and the project must have existed for 10 months, 212 projects
* The project must have Issues that are tagged as bugs opened both before and after the introduction of Issue Templates, 208 projects

The bug reports in each project are monitored over the time span of 5 months after their creation. Bug reports created before and after the introduction of Issues Templates are compared, only considering bug reports that have been created up to 5 months before or after issue templates have been enabled.

The following research questions are examined:

1. How much does the number of newly opened bug reports change? This question is intended to show how the workload for the developer changes.
2. How much does the average number of comments per issue change? This question is intended to answer whether the communication effort for the developer changes.
3. How fast are bug reports closed? This question is intended to answer whether structured bug reports contribute to faster processing.

Only issues containing a label with the content “bug”, which is used by default for the identification of bug reports, are being evaluated. For each project the value for the given research questions is retrieved before and after the introduction of Issue Template and the change is calculated. The extreme 5% of values are then removed (the extreme values were not removed from the histograms). The average value for all projects is calculated. 

## Results

### How much does the number of newly opened bug reports change?

The number of opened bug reports across all projects has decreased by an average of 4% in the monitored period, which suggests a reduction of the developer's workload. Interestingly, the median value shows a reduction of 11%. This can be attributed to the fact that the majority of the projects show moderate decline, but a small number of projects show significant growth.

78 projects have seen an increase in bug reports, 130 projects recorded a reduction, and the rest have remained constant. Projects with an increased volume of bugs reports show an average increase of 342% and the other projects a reduction of 26%. The strong growth could be due to the fact that Issue Templates make issues easier to classify as bug reports, or that these projects have experienced a strong growth in popularity[^5].

![Change in in the number of opened Bug Reports after the Introduction of Issue Templates.](./opend-bugs.png)
*Change in in the number of opened Bug Reports after the Introduction of Issue Templates.*
{figure}

### How much does the average number of comments per issue change?

The average number of comments per bug report has decreased by 6%. If we only look at the closed bug reports, the number of comments per bug report decreases by 2%. This decrease could be due to developers having to ask fewer questions to clarify a bug report.

![Change in number of comments per Bug Report after the introduction of Issue Templates](./comment-not-closed.png)
*Change in number of comments per Bug Report after the introduction of Issue Templates.*
{figure}

### How fast are bug reports closed?

The share of bug reports closed within 5 months increases by 25%, but it takes 41% longer to close them (the median is 3% - some reports take much longer to close). One explanation for the bug reports staying open longer might be that the bug reports have become more reproducible, which eliminates a common reason for early closure. It can be assumed that the precisely formulated, structured bug reports have led to a more thorough analysis of bugs. It is easier to identify solutions if the problems are clearly defined.

![Change in time required to close a Bug Report after the Introduction of Issue Templates (in percent)](./closed-bugs-time.png)
*Change in time required to close a Bug Report after the Introduction of Issue Templates (in percent).*
{figure}

![Change in percentage of closed Bug Reports after the Introduction of Issue Templates.](./closed-bugs.png)
*Change in percentage of closed Bug Reports after the Introduction of Issue Templates.*
{figure}

### Summary

* 6% fewer comments per bug report are written
* 4% fewer bug reports are opened
* The processing time for bug reports increased by 41%
* 25% more bug reports were closed

## Conclusion

The analysis of bug reports before and after the introduction of issue templates has revealed that structured bug reports reduce the bug management effort of developers. This is reflected in the fact that fewer comments are written per bug report and fewer bug reports are opened. It has also been noted that the processing time of bug reports is not reduced by issue templates. The results suggest that structured bug reports have led to a more thorough analysis of bugs.

### Further Remarks

In this study, the bug reporters were mostly developers and thus technically experienced users. It would be interesting to know how the test results would change if the bug reporters were not familiar with the software development field.

The quality of the issue templates can have an impact on the test results, but this outside the scope of this study. It was assumed that the project members include the necessary information in the issue template for each project.

The number of Emoji responses to bug reports and the number of users who follow the activity on bug reports could provide an insight into whether users are looking for existing bug reports rather than recreating them.

The evaluation scripts and the dataset are publicly available. If you decide to use them please reference this article.

Dataset (475.9 mb): http://data.dudzik.co/github-issue-template-data.zip <br/>
Scripts: https://github.com/doodzik/github-issue-template-analysis-scripts

[^1]: Just, Sascha, Rahul Premraj, and Thomas Zimmermann. “Towards the next generation of bug tracking systems.” Visual languages and Human-Centric computing, 2008. VL/HCC 2008. IEEE symposium on. IEEE, 2008.
[^2]: Bettenburg, Nicolas, et al. “What makes a good bug report?.” Proceedings of the 16th ACM SIGSOFT International Symposium on Foundations of software engineering. ACM, 2008.
[^3]: GitHub. (2017). Issue and Pull Request templates. [online] Available at: http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates [Accessed 28 Jun. 2017]. 
[^4]: GitHub. (2017). Mastering Issues. [online] Available at: http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/ [Accessed 28 Jun. 2017].
[^5]: GitHub Octoverse 2016. (2017). GitHub State of the Octoverse: 2016. [online] Available at: http://web.archive.org/web/20170321081647/http://octoverse.github.com [Accessed 4 Jul. 2017].

