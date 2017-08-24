---
layout: post.pug
headline: "Do Structured Bug Reports Reduce Their Processing Costs?"
date: 2017-07-27
description: 
keywords: dudzik, frederik dudzik, 
---

> German Version

In diesem Papier wird eine empirische Studie beschrieben, die aufzeigt, wie strukturierte Bug-Reports die Arbeitslast von Entwicklern verringern. Es wird gezeigt, dass weniger Kommentare pro Bug-Report geschrieben und weniger Bug-Reports erstellt werden. Es wird zudem festgestellt, dass die Bearbeitungszeit von Bug-Reports sich durch deren Strukturierung nicht verringert. Außerdem konnte gezeigt werden, dass sich die Entwickler intensiver mit den Fehlern auseinander gesetzt habe, was zu mehr geschlossenen Bug-Reports geführt hat.

## Introduction

Bug-Reports spielen eine wichtige Rolle bei Software-Projekten. Sie dienen dazu, den Entwicklern auftretende Probleme in der von ihnen entwickelnden Software aufzuzeigen. Die Probleme werden direkt durch den Nutzer der Software dem Entwicklern gemeldet. Dadurch stellen Bug-Reports ein Medium dar, welches zur Kommunikation zwischen dem Benutzer und dem Entwickler dient.

Häufig werden aber wichtige information in Bug-Reports ausgelassen oder nicht relevante Informationen geliefert, die eine effektive Bearbeitung der Bug-Reports verhindert. Daraus entstand bei den Entwicklern der Wunsch, den Bug-Reports eine Struktur zu geben, damit vom Benutzer der Software eine verwertbare Informationen herausgeht[^1][^2]. Eine entsprechende Eigenschaft, die Bug-Reports zu strukturieren,  wurde im Februar 2016 im Github Issues tool eingeführt [^3]. Diese Eigenschaft wurde Issue Template benannt. 

GitHub Inc. ist ein Unternehmen, dass Software-Projekte hostet und für diese ein Reporting Tool bereitstellt, welches Issues genannt wird. Eine Vielzahl der Projekte, die bei GitHub gehostet werden, sind öffentlich zugänglich, und bieten somit  eine Grundlage, um die Forschungsfrage zu beantworten.

Es wird davon ausgegangen, dass das Benutzen von Issue Templates den Bearbeitungsaufwand von Bug-Reports für den Entwickler verringert.

### GitHub Issues

Ein vom Benutzer versendeter Report wird auf GitHub als Issue bezeichnet. Ein Issue kann dazu benutzt werden Bugs zu melden, Features vorzuschlagen oder allgemeine Diskussionen zu führen. Eine Sammlung von Reports wird in einer Liste organisiert.

Jeder Nutzer der GitHub Plattform kann standardmäßig diese Issues erstellen, kommentieren, verfolgen oder mit einem Emoji versehen. Der Bearbeitungsstatus von einer Issue kann entweder “offen” oder “geschlossen” angegeben sein. Dieser kann jederzeit geändert werden. 

Um die Issues besser klassifizieren zu können werden Labels verwendet, die wie Kategorien funktionieren. Es können mehrere Kategorien für ein Issue verwendet werden. Es werden zu Beginn Standard Labels angeboten, zum Beispiel “Bug”, “Wontfix”, “Feature”, usw. Einem Issue können zudem konkrete Entwickler zugeordnet werden, die für die Bearbeitung des Issues zuständig sind [^4].

Im Vergleich zu den normalen Issues, wo der Nutzer frei und beliebig schreiben kann, werden in den strukturierten Issues vorgefertigte Fragen und Anforderungen in Form eines Formulars vorgegeben. Dies wird dazu verwendet, den Nutzer, bereits beim Öffnen eines neuen Issues auf relevante Informationen  hinzuweisen. Zu jedem Projekt kann ein spezielles Formular vorbereitet werden [^3].
2  Methode
Die Hypothese - strukturierte Bug-Reports verringern deren Bearbeitungsaufwand - wird durch eine empirische Studie verifiziert, die wie folgt durchgeführt wird:

Die Bug-Reports werden anhand mehrere Projekte über die gleichen Zeitspanne (5 Monate) miteinander verglichen und zwar vor und nach der Einführung von Issues Templates. 

Für diese empirische Studie werden die 1.000 beliebtesten Projekte untersucht. Die Beliebtheit wird anhand den, von den Nutzern vergebenen “Stars”, bzw. Favorisierungen gemessen. Die relevanten Projekte werden durch mehrere Suchanfragen an die Github API (Version 3) abgefragt. Die herausgesuchten Projekte werden weiter eingeschränkt:

* Das Projekt muss Issues aktiviert haben, 958 Projekte
* Das Projekt muss Issue Templates aktiviert haben, 341 Projekte
* Issue Templates müssen mindestens für 10 Monate benutzt worden sein, 212 Projekte

Die folgenden Forschungsfragen dienen zur Verifizierung der Hypothese:

- RQ1. Wie stark verändert sich die Menge an neu geöffneten Bugs? Diese Frage soll Aufschluss bringen, wie sich der Aufwand für den Entwickler verändert. Ein Entwickler muss auf jeden neuen Bug-Report reagieren.
- RQ2. Wie verändert sich die durchschnittliche Zahl der Kommentare pro Issue? Diese Frage soll eine Antwort bringen, ob sich der Kommunikationsaufwand für den Entwickler verändert.
- RQ3. Wie schnell werden Bug-Reports geschlossen? Diese Frage zielt darauf ab, ob strukturierte Bug-Reports zur schnelleren Bearbeitung beitragen.

Beim Auswerten der Issues werden nur diese Issues betrachtet, die ein Label mit dem Inhalt “bug” enthalten, welches standardmäßig zur Identifikation von Bug-Reports genutzt werden. Daraufhin wird die prozentuale Abweichung zwischen den Bug-Reports vor und nach der Einführung des Issue Templates gemessen. Die Extremwerte werden dabei entfernt, welche 5% aller Werte betrage. Die prozentuale Abweichung wird daraufhin benutzt, um einen Durchschnittswert für alle Projekte zu berechnen.

# Ergebnisse

Die Ergebnisse der Forschungsfragen werden in diesem Abschnitt ausgebreitet und interpretiert. Die Datensätze wurden im Juni 2017 erhoben.

### RQ1. Wie stark verändert sich die Menge an neu geöffneten Bugs?

Die Anzahl der geöffneten Bugs hat sich im Durchschnitt um 4% verringert, wodurch der Arbeitsaufwand für den Entwickler gesunken ist. Interessanterweise verzeichnet der Mittelwert eine Reduktion um 11%. Dies kann darauf zurückgeführt werden, dass der Großteil der Projekte einen Rückgang aufweist, jedoch eine kleine Menge an Projekten einen starken Zuwachs verzeichnet. 

78 Projekte haben einen Zuwachs an Bugs, 130 Projekte verzeichnen deren Reduktion, und die restlichen sind gleichgeblieben oder haben ihre Bugs vor der Einführung des Issue Templates nicht klassifiziert. Dabei verzeichnen Projekte mit einem erhöhten Bugaufkommen einen Zuwachs von 342% und die anderen Projekte eine Verringerung um 26%. Der starke Zuwachs könnte darauf zurückzuführen sein, dass es einfacher geworden ist, Issues als Bugs zu klassifizieren und zu bearbeiten, oder diese Projekte ein sehr starkes Popularitätswachstum erfahren haben [^5].

### RQ2. Wie verändert sich die durchschnittliche Zahl der Kommentare pro Bug-Report?

Die durchschnittliche Zahl der Kommentare pro Bug-Report hat sich um 6% verringert. Wenn wir nur die geschlossenen Bug-Reports betrachten, verringert sich die Zahl der Kommentare pro Bug-Reports um 2%. Daraus könnte geschlossen werden, dass die Entwickler weniger Rückfragen stellen müssen.

### RQ3. Wie schnell werden Bug-Reports geschlossen?

Der Anteil an geschlossenen Bug-Reports erhöht sich um 26%, jedoch dauert es 40% länger bis Bug-Reports geschlossen werden (im Mittelwert 3%). RQ1 zeigt auf, dass die Anzahl der geöffneten Bug-Reports sich verringert. Anhand dessen kann vermutet werden, dass weniger häufig derselbe Bug berichtet wird, da dieser schneller geschlossen werden kann. Eine weitere Erklärung könnte sein, dass die Bug-Reports reproduzierbarer geworden sind, wodurch dies als Schließungsgrund wegfällt und somit “schnelle”/“einfache” Schließungen nicht mehr so häufig sind. Es ist naheliegend, dass die präzise formulierten, strukturierten Bug-Reports zur intensiven und zielorientierten Auseinandersetzung mit dem Fehlern geführt haben. Es ist einfacher Lösungen aufzuzeigen, wenn die Probleme klar definiert sind (siehe der 26% Anstieg an gelösten Bugs und zum Andern der 40% Anstieg der Dauer bis Bugs geschlossen werden).

Es kann nicht aufgezeigt werden, dass strukturierte Bug-Reports zu einer schnelleren Bearbeitung beitragen.

### Auswertung

Durch die Antworten auf die Forschungsfragen lässt sich schließen, dass strukturierte Bug-Reports die Arbeitslast von Entwicklern verringern. Dies äußert sich darin, dass weniger Kommentare pro Bug-Report geschrieben und weniger Bug-Reports geöffnet werden. Es wurde zudem festgestellt, dass die Bearbeitungszeit von Bug-Reports durch Issue Templates nicht verringert wird. Es wird zudem gezeigt, dass die strukturierten Bug-Reports zur intensiveren und zielorientierten Auseinandersetzung mit dem Fehlern geführt haben.

Bei dieser Studie waren die Bug-Reporter zum größten Teil Entwickler und somit technisch erfahrene Nutzer. Es wäre interessant zu erfahren, wie sich die Testergebnisse verändern, wenn die Bug-Reporter aus einem anderen Bereich stammen würden.

Die Qualität der Issue Templates kann eine Auswirkung auf die Testergebnisse haben, jedoch wurde dies in dieser Studie nicht einberechnet. Es wurde angenommen, dass die Projektmitglieder die Informationen, die Sie für das jeweilige Projekt benötigen, im Issue Template festhalten.

Die Anzahl von Emoji-Reaktionen auf Bug-Reports und die Anzahl von Nutzern, die der Aktivität auf Bug-Reports folgen, könnte einen Aufschluss darauf geben, ob Nutzer nach bestehenden Bug-Reports suchen, anstatt diese neu zu erstellen.

## Zusammenfassung

Diese Arbeit befasste sich mit der Frage, ob strukturierte Bug-Reports deren Bearbeitungsaufwand verringern. Nach der empirischen Studie lässt sich zusammenfassend sagen, dass strukturierte Bug-Reports den Arbeitsaufwand in der reinen Kommunikation für Entwickler verringert. Es konnte festgestellt werden, dass aufgrund der strukturierten Bug-Reports zu einer deutlich intensiveren Bearbeitung der Bugs gekommen ist. 
Folgende Erkenntnisse wurden aus der Untersuchung geschlossen:

* 6% weniger Kommentare pro Bug-Report werden geschrieben
* 4% weniger Bug-Reports werden geöffnet
* Die Bearbeitungszeit von Bug-Reports stieg um 40% an
* Es wurden 26% mehr Bug-Reports geschlossen

[^1]: Just, Sascha, Rahul Premraj, and Thomas Zimmermann. "Towards the next generation of bug tracking systems." Visual languages and Human-Centric computing, 2008. VL/HCC 2008. IEEE symposium on. IEEE, 2008.
[^2]: Bettenburg, Nicolas, et al. "What makes a good bug report?." Proceedings of the 16th ACM SIGSOFT International Symposium on Foundations of software engineering. ACM, 2008.
[^3]: GitHub. (2017). Issue and Pull Request templates. [online] Available at: http://web.archive.org/web/20170321124019/https://github.com/blog/2111-issue-and-pull-request-templates [Accessed 28 Jun. 2017]. 
[^4]: GitHub. (2017). Mastering Issues. [online] Available at: http://web.archive.org/web/20170223132859/https://guides.github.com/features/issues/ [Accessed 28 Jun. 2017].
[^5]: GitHub Octoverse 2016. (2017). GitHub State of the Octoverse: 2016. [online] Available at: http://web.archive.org/web/20170321081647/http://octoverse.github.com [Accessed 4 Jul. 2017].

