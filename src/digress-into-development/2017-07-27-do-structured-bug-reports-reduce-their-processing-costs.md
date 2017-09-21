---
layout: post.pug
headline: "Do Structured Bug Reports Reduce Their Processing Costs?"
date: 2017-07-27
description: 
keywords: dudzik, frederik dudzik, 
---

> [German Version]()

This article describes an empirical study showing how structured bug reports reduce the workload of developers. It is shown that fewer comments are written per bug report and fewer bug reports are generated. It is also noted that the processing time of bug reports is not reduced through their structuring. In addition, it is shown that the developers deal more intensively with the errors, which led to more closed bug reports.

## Introduction

Bug reports play an important role in software projects. They are used to show developers problems in the software they develop. The problems are directly reported to the developers by the user of the software. As a result, bug reports represent a medium which is used for communication between the user and the developer.

Bug-Reports spielen eine wichtige Rolle bei Software-Projekten. Sie dienen dazu, den Entwicklern auftretende Probleme in der von ihnen entwickelnden Software aufzuzeigen. Die Probleme werden direkt durch den Nutzer der Software dem Entwicklern gemeldet. Dadurch stellen Bug-Reports ein Medium dar, welches zur Kommunikation zwischen dem Benutzer und dem Entwickler dient.

Frequently, however, important information is omitted in bug reports or non-relevant information, which prevents effective processing of the bug reports. The developers wanted to give the bug reports a structure, so that the user of the software can extract useful information [^ 1] [^ 2]. A corresponding property to structure the bug reports was introduced in February 2016 in the Github Issues tool [^ 3]. This property was named IssueTemplate.

Häufig werden aber wichtige information in Bug-Reports ausgelassen oder nicht relevante Informationen geliefert, die eine effektive Bearbeitung der Bug-Reports verhindert. Daraus entstand bei den Entwicklern der Wunsch, den Bug-Reports eine Struktur zu geben, damit vom Benutzer der Software eine verwertbare Informationen herausgeht[^1][^2]. Eine entsprechende Eigenschaft, die Bug-Reports zu strukturieren,  wurde im Februar 2016 im Github Issues tool eingeführt [^3]. Diese Eigenschaft wurde Issue Template benannt. 

GitHub Inc. is a company that hosts software projects and provides for them a reporting tool called Issues. A large number of the projects hosted at GitHub are publicly accessible, providing a basis for answering the research question.

GitHub Inc. ist ein Unternehmen, dass Software-Projekte hostet und für diese ein Reporting Tool bereitstellt, welches Issues genannt wird. Eine Vielzahl der Projekte, die bei GitHub gehostet werden, sind öffentlich zugänglich, und bieten somit  eine Grundlage, um die Forschungsfrage zu beantworten.

It is thought that using IssueTemplates reduces the processing effort of bug reports for the developer.

Es wird davon ausgegangen, dass das Benutzen von Issue Templates den Bearbeitungsaufwand von Bug-Reports für den Entwickler verringert.

### GitHub Issues

A report sent by the user is called GitHub as an issue. An issue can be used to report bugs, suggest features, or make general discussions. A collection of reports is organized in a list.

Ein vom Benutzer versendeter Report wird auf GitHub als Issue bezeichnet. Ein Issue kann dazu benutzt werden Bugs zu melden, Features vorzuschlagen oder allgemeine Diskussionen zu führen. Eine Sammlung von Reports wird in einer Liste organisiert.

A report sent by the user is called GitHub as an issue. An issue can be used to report bugs, suggest features, or make general discussions. A collection of reports is organized in a list.

Every user of the GitHub platform can create, comment, track, or provide an Emoji by default. The processing status of an issue can be either "open" or "closed". This can be changed at any time.

Jeder Nutzer der GitHub Plattform kann standardmäßig diese Issues erstellen, kommentieren, verfolgen oder mit einem Emoji versehen. Der Bearbeitungsstatus von einer Issue kann entweder “offen” oder “geschlossen” angegeben sein. Dieser kann jederzeit geändert werden. 

In order to be able to better classify the issues, labels are used which function like categories. Multiple categories can be used for an issue. At the beginning, standard labels are offered, for example, "Bug", "Wontfix", "Feature", etc. An issue can also be assigned to specific developers who are responsible for processing the issue [^ 4].

Um die Issues besser klassifizieren zu können werden Labels verwendet, die wie Kategorien funktionieren. Es können mehrere Kategorien für ein Issue verwendet werden. Es werden zu Beginn Standard Labels angeboten, zum Beispiel “Bug”, “Wontfix”, “Feature”, usw. Einem Issue können zudem konkrete Entwickler zugeordnet werden, die für die Bearbeitung des Issues zuständig sind [^4].

Compared to the normal issues, where the user can freely and arbitrarily write, predefined questions and requirements are given in the form of a form in the structured issues. This is used to alert the user to relevant information when opening a new issue. A special form can be prepared for each project [^ 3].

Im Vergleich zu den normalen Issues, wo der Nutzer frei und beliebig schreiben kann, werden in den strukturierten Issues vorgefertigte Fragen und Anforderungen in Form eines Formulars vorgegeben. Dies wird dazu verwendet, den Nutzer, bereits beim Öffnen eines neuen Issues auf relevante Informationen  hinzuweisen. Zu jedem Projekt kann ein spezielles Formular vorbereitet werden [^3].

// TODO Example

##  Method

The hypothesis - structured bug reports reduce their processing effort - is verified by an empirical study carried out as follows:

Die Hypothese - strukturierte Bug-Reports verringern deren Bearbeitungsaufwand - wird durch eine empirische Studie verifiziert, die wie folgt durchgeführt wird:

The bug reports are compared with each other over the same time span (5 months) on the basis of several projects, before and after the introduction of Issues Templates.

Die Bug-Reports werden anhand mehrere Projekte über die gleichen Zeitspanne (5 Monate) miteinander verglichen und zwar vor und nach der Einführung von Issues Templates. 

For this empirical study, the 1,000 most popular projects are investigated. The popularity is measured on the basis of the "stars" or "" "" "" "" "" "" "" "" "" "" "" "" The relevant projects are queried by means of several search requests to the Github API (version 3). The selected projects are further restricted:

Für diese empirische Studie werden die 1.000 beliebtesten Projekte untersucht. Die Beliebtheit wird anhand den, von den Nutzern vergebenen “Stars”, bzw. Favorisierungen gemessen. Die relevanten Projekte werden durch mehrere Suchanfragen an die Github API (Version 3) abgefragt. Die herausgesuchten Projekte werden weiter eingeschränkt:

* The project must have activated issues, 958 projects
* The project must have activated issue templates, 341 projects
* Issue templates must have been used for at least 10 months, 212 projects

* Das Projekt muss Issues aktiviert haben, 958 Projekte
* Das Projekt muss Issue Templates aktiviert haben, 341 Projekte
* Issue Templates müssen mindestens für 10 Monate benutzt worden sein, 212 Projekte

The following research questions serve to verify the hypothesis:

Die folgenden Forschungsfragen dienen zur Verifizierung der Hypothese:

- RQ1. How much does the amount of newly opened bugs change? This question is intended to show how the developer changes. A developer must react to every new bug report.
- RQ2. How does the average number of comments per issue change? This question is intended to answer whether the communication effort for the developer changes.
- RQ3. How fast are bug reports closed? This question is aimed at whether structured bug reports contribute to faster processing.

- RQ1. Wie stark verändert sich die Menge an neu geöffneten Bugs? Diese Frage soll Aufschluss bringen, wie sich der Aufwand für den Entwickler verändert. Ein Entwickler muss auf jeden neuen Bug-Report reagieren.
- RQ2. Wie verändert sich die durchschnittliche Zahl der Kommentare pro Issue? Diese Frage soll eine Antwort bringen, ob sich der Kommunikationsaufwand für den Entwickler verändert.
- RQ3. Wie schnell werden Bug-Reports geschlossen? Diese Frage zielt darauf ab, ob strukturierte Bug-Reports zur schnelleren Bearbeitung beitragen.

When evaluating the issues, only those issues are considered, which contain a label with the content "bug", which are used as standard for the identification of bug reports. The percentage deviation between the bug reports is measured before and after the introduction of the issue template. The extreme values are thereby removed, which amounts to 5% of all values. The percentage deviation is then used to calculate an average value for all projects.

Beim Auswerten der Issues werden nur diese Issues betrachtet, die ein Label mit dem Inhalt “bug” enthalten, welches standardmäßig zur Identifikation von Bug-Reports genutzt werden. Daraufhin wird die prozentuale Abweichung zwischen den Bug-Reports vor und nach der Einführung des Issue Templates gemessen. Die Extremwerte werden dabei entfernt, welche 5% aller Werte betrage. Die prozentuale Abweichung wird daraufhin benutzt, um einen Durchschnittswert für alle Projekte zu berechnen.

# Results

The results of the research questions are expanded and interpreted in this section. The records were collected in June 2017.

Die Ergebnisse der Forschungsfragen werden in diesem Abschnitt ausgebreitet und interpretiert. Die Datensätze wurden im Juni 2017 erhoben.

### RQ1. How much does the amount of newly opened bugs change?
### RQ1. Wie stark verändert sich die Menge an neu geöffneten Bugs?

The number of open bugs has decreased by an average of 4%, reducing the developer's workload. Interestingly, the mean value shows a reduction of 11%. This can be attributed to the fact that the majority of the projects show a decline, but a small number of projects show a strong growth.

Die Anzahl der geöffneten Bugs hat sich im Durchschnitt um 4% verringert, wodurch der Arbeitsaufwand für den Entwickler gesunken ist. Interessanterweise verzeichnet der Mittelwert eine Reduktion um 11%. Dies kann darauf zurückgeführt werden, dass der Großteil der Projekte einen Rückgang aufweist, jedoch eine kleine Menge an Projekten einen starken Zuwachs verzeichnet. 

78 projects have seen an increase in bugs, 130 projects recorded their reduction, and the rest have remained the same or have not classified their bugs before the introduction of the issue template. Projects with an increased volume of bugs show an increase of 342% and the other projects a reduction of 26%. The strong growth could be due to the fact that it has become easier to classify and edit issues as bugs, or that these projects have experienced a very strong popularity growth [^5].

78 Projekte haben einen Zuwachs an Bugs, 130 Projekte verzeichnen deren Reduktion, und die restlichen sind gleichgeblieben oder haben ihre Bugs vor der Einführung des Issue Templates nicht klassifiziert. Dabei verzeichnen Projekte mit einem erhöhten Bugaufkommen einen Zuwachs von 342% und die anderen Projekte eine Verringerung um 26%. Der starke Zuwachs könnte darauf zurückzuführen sein, dass es einfacher geworden ist, Issues als Bugs zu klassifizieren und zu bearbeiten, oder diese Projekte ein sehr starkes Popularitätswachstum erfahren haben [^5].

### RQ2. How does the average number of comments per bug report change?
### RQ2. Wie verändert sich die durchschnittliche Zahl der Kommentare pro Bug-Report?

The average number of comments per bug report has decreased by 6%. If we only look at the closed bug reports, the number of comments per bug report decreases by 2%. It could be concluded that the developers have to ask more questions.

Die durchschnittliche Zahl der Kommentare pro Bug-Report hat sich um 6% verringert. Wenn wir nur die geschlossenen Bug-Reports betrachten, verringert sich die Zahl der Kommentare pro Bug-Reports um 2%. Daraus könnte geschlossen werden, dass die Entwickler weniger Rückfragen stellen müssen.

### RQ3. How fast are bug reports closed?
### RQ3. Wie schnell werden Bug-Reports geschlossen?

The share of closed bug reports increases by 26%, but it takes 40% longer to complete bug reports (average 3%). RQ1 indicates that the number of open bug reports is decreasing. On the basis of this, it can be assumed that the same bug is reported less frequently since this can be closed more quickly. A further explanation might be that the bug reports have become more reproducible, which means that this is no longer the reason for closure and thus "fast" / "simple" closures are not so frequent. It is obvious that the precisely formulated, structured bug reports have led to an intensive and goal-oriented analysis of the errors. It is easier to identify solutions if the problems are clearly defined (see the 26% increase in solved bugs and changing the 40% increase in duration until bugs are closed).

Der Anteil an geschlossenen Bug-Reports erhöht sich um 26%, jedoch dauert es 40% länger bis Bug-Reports geschlossen werden (im Mittelwert 3%). RQ1 zeigt auf, dass die Anzahl der geöffneten Bug-Reports sich verringert. Anhand dessen kann vermutet werden, dass weniger häufig derselbe Bug berichtet wird, da dieser schneller geschlossen werden kann. Eine weitere Erklärung könnte sein, dass die Bug-Reports reproduzierbarer geworden sind, wodurch dies als Schließungsgrund wegfällt und somit “schnelle”/“einfache” Schließungen nicht mehr so häufig sind. Es ist naheliegend, dass die präzise formulierten, strukturierten Bug-Reports zur intensiven und zielorientierten Auseinandersetzung mit dem Fehlern geführt haben. Es ist einfacher Lösungen aufzuzeigen, wenn die Probleme klar definiert sind (siehe der 26% Anstieg an gelösten Bugs und zum Andern der 40% Anstieg der Dauer bis Bugs geschlossen werden).

It can not be shown that structured bug reports contribute to faster processing.

Es kann nicht aufgezeigt werden, dass strukturierte Bug-Reports zu einer schnelleren Bearbeitung beitragen.

### Evaluation

The answers to the research questions suggest that structured bug reports reduce the workload of developers. This is reflected in the fact that fewer comments are written per bug report and fewer bug reports are opened. It has also been noted that the processing time of bug reports is not reduced by issue templates. It is also shown that the structured bug reports have led to a more intensive and goal-oriented analysis of the errors.

Durch die Antworten auf die Forschungsfragen lässt sich schließen, dass strukturierte Bug-Reports die Arbeitslast von Entwicklern verringern. Dies äußert sich darin, dass weniger Kommentare pro Bug-Report geschrieben und weniger Bug-Reports geöffnet werden. Es wurde zudem festgestellt, dass die Bearbeitungszeit von Bug-Reports durch Issue Templates nicht verringert wird. Es wird zudem gezeigt, dass die strukturierten Bug-Reports zur intensiveren und zielorientierten Auseinandersetzung mit dem Fehlern geführt haben.

In this study, the bug reporters were mostly developers and thus technically experienced users. It would be interesting to know how the test results would change if the bug reporters were from a different area.

Bei dieser Studie waren die Bug-Reporter zum größten Teil Entwickler und somit technisch erfahrene Nutzer. Es wäre interessant zu erfahren, wie sich die Testergebnisse verändern, wenn die Bug-Reporter aus einem anderen Bereich stammen würden.

The quality of the issue templates can have an impact on the test results, but this was not included in this study. It was assumed that the project members keep the information you need for the project in the issue template.

Die Qualität der Issue Templates kann eine Auswirkung auf die Testergebnisse haben, jedoch wurde dies in dieser Studie nicht einberechnet. Es wurde angenommen, dass die Projektmitglieder die Informationen, die Sie für das jeweilige Projekt benötigen, im Issue Template festhalten.

The number of Emoji responses to bug reports and the number of users who follow the activity on bug reports could provide an insight into whether users are looking for existing bug reports rather than re-creating them.

Die Anzahl von Emoji-Reaktionen auf Bug-Reports und die Anzahl von Nutzern, die der Aktivität auf Bug-Reports folgen, könnte einen Aufschluss darauf geben, ob Nutzer nach bestehenden Bug-Reports suchen, anstatt diese neu zu erstellen.

## Conclusion
This work focused on the question of whether structured bug reports reduce their processing effort. According to the empirical study, it can be summarized that structured bug reports reduce the workload in the pure communication for developers. It could be established, that due to the structured bug reports came to a much more intensive processing of the bugs.
The following findings were concluded from the investigation:

Diese Arbeit befasste sich mit der Frage, ob strukturierte Bug-Reports deren Bearbeitungsaufwand verringern. Nach der empirischen Studie lässt sich zusammenfassend sagen, dass strukturierte Bug-Reports den Arbeitsaufwand in der reinen Kommunikation für Entwickler verringert. Es konnte festgestellt werden, dass aufgrund der strukturierten Bug-Reports zu einer deutlich intensiveren Bearbeitung der Bugs gekommen ist. 
Folgende Erkenntnisse wurden aus der Untersuchung geschlossen:

* 6% fewer comments per bug report are written
* 4% fewer bug reports are opened
* The processing time for bug reports increased by 40%
* 26% more bug reports were closed

* 6% weniger Kommentare pro Bug-Report werden geschrieben
* 4% weniger Bug-Reports werden geöffnet
* Die Bearbeitungszeit von Bug-Reports stieg um 40% an
* Es wurden 26% mehr Bug-Reports geschlossen

// TODO better conclusion

[^1]: Just, Sascha, Rahul Premraj, and Thomas Zimmermann. "Towards the next generation of bug tracking systems." Visual languages and Human-Centric computing, 2008. VL/HCC 2008. IEEE symposium on. IEEE, 2008.
[^2]: Bettenburg, Nicolas, et al. "What makes a good bug report?." Proceedings of the 16th ACM SIGSOFT International Symposium on Foundations of software engineering. ACM, 2008.
[^3]: GitHub. (2017). Issue and Pull Request templates. [online] Available at: http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates [Accessed 28 Jun. 2017]. 
[^4]: GitHub. (2017). Mastering Issues. [online] Available at: http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/ [Accessed 28 Jun. 2017].
[^5]: GitHub Octoverse 2016. (2017). GitHub State of the Octoverse: 2016. [online] Available at: http://web.archive.org/web/20170321081647/http://octoverse.github.com [Accessed 4 Jul. 2017].

