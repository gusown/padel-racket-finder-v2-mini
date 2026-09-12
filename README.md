# Padel Racket Finder

Ein persönlicher Finder für den passenden Padel-Schläger — mit echten Modellen, echten Daten und einer ausführlichen Spielerprofil-Analyse. Keine Anmeldung, kein Backend, kein Tracking.

## Features

- **Zweisprachig:** Deutsch/Englisch umschaltbar per Klick, Auswahl wird gespeichert
- **Zwei Testmodi:** Quick Test (17–19 Fragen, ~4–6 Min) oder Pro Test (bis zu 28 Fragen, ~8–10 Min) mit zusätzlichen Fragen zu Gewicht, Balance-Gefühl, Wettkampf-Niveau, Verletzungsdetails, Indoor/Outdoor, Marke, Budget-Flexibilität und Handschweiß
- **Dein aktueller Schläger als Referenz:** Optional deinen jetzigen Schläger auswählen und angeben, was dich stört (z. B. zu wenig Power, zu hart, zu schwer) und was du magst — die Empfehlungen verbessern gezielt genau diese Punkte
- **No-Gos:** Ausschließen, was du auf keinen Fall willst (Diamond-Form, über 365 g, harter Kern, kopflastig, Einsteiger-Modelle)
- **Score-Aufschlüsselung:** Beim Top-Match siehst du, in welchen Bereichen (Spielstil, Wünsche, Niveau, Gelenke, Budget, No-Gos, Vergleich mit deinem Schläger) er gegenüber dem Durchschnitt aller Modelle Punkte holt oder verliert
- **Passendes Zubehör:** Echte Produkte von padelreference.com (Overgrips, Bälle, Rahmenschutz, Taschen, Dämpfer, Griffspray) — ausgewählt nach Handschweiß, Gelenken, Spielhäufigkeit, Niveau und Indoor/Outdoor
- **Mehrfachauswahl** bei Schwächen, Racketsport-Erfahrung, Verletzungsregionen, Marken und No-Gos
- **184 reale Schläger** von 18 Marken (HEAD, Adidas, Babolat, Wilson, Bullpadel, NOX, Siux, StarVie, Tecnifibre, Dunlop, Oxdog, Osaka, Drop Shot, Joma, Varlion, Black Crown, Royal Padel, Lok) mit echten Produktbildern, Produktlinks und Preisen
- **Erklärung zu jeder Frage**, damit auch Einsteiger die Fachbegriffe verstehen
- **Visuelle Profil-Analyse:** Netzdiagramm, das dein Spielprofil mit deinem Top-Match vergleicht
- **Detaillierte Spieler-Analyse:** Spielertyp, Entwicklungsstand, Stärken/Baustellen und persönliche Trainingstipps
- **Top 3 Empfehlungen** mit Produktbild, Stat-Vergleich und nachvollziehbarer Begründung
- **Ergebnis teilen:** Ein Link öffnet dein Ergebnis 1:1 nach — inklusive aller drei empfohlenen Schläger. Zusätzlich als Text zum Einfügen in WhatsApp & Co. kopierbar
- **Doppel-Check:** Dein:e Partner:in macht einen kurzen Check, ihr bekommt ein gemeinsames Team-Profil, eine Rollenverteilungs-Einschätzung (Netz/Hinten) und den passenden Schläger für beide
- **Partner-Einladungslink:** Den Doppel-Check als Link verschicken — dein:e Partner:in macht ihn auf dem eigenen Handy und sieht direkt, wie gut ihr zusammenpasst
- **Schläger vergleichen** direkt als Button auf der Startseite und der Ergebnisseite (mit deinem persönlichen Score)
- **Fortschritt über Zeit:** Frühere Testergebnisse werden lokal gespeichert; beim nächsten Test siehst du, was sich verändert hat
- **Browse & Vergleichen:** Alle 184 Schläger filtern, sortieren und bis zu 3 direkt im Netzdiagramm und in einer Vergleichstabelle gegenüberstellen — der beste Wert pro Zeile wird hervorgehoben, ganz ohne Quiz
- **Ergebnis verfeinern:** Regler für Kontrolle, Power, Komfort und Preis berechnen die Top 3 live neu — ohne den Test zu wiederholen
- **Upgrade-Check:** Deinen aktuellen Schläger auswählen und sehen, was sich mit dem Top-Match konkret verbessert (pro Wert und beim Preis)
- **Persönlicher Score im Browse-Modus:** Nach dem Test zeigt jede Schläger-Karte und die Vergleichstabelle, wie gut das Modell zu deinem Profil passt
- **Sieger-Abstand:** Zeigt, ob Platz 1 ein klarer Favorit ist oder ein Kopf-an-Kopf-Rennen mit Platz 2
- **Zurück-Taste funktioniert:** Browser- und Handy-Zurück wechseln zwischen Start, Testauswahl, Quiz, Ergebnis und Vergleich, statt die Seite zu verlassen
- **Installierbar (PWA):** Auf dem Homescreen speichern, funktioniert dank Offline-Cache auch ohne Netz im Laden
- **Sanfte Animationen** — Übergänge, Zähl-Effekte und Balken-Animationen bei den Ergebnissen
- **Dunkles Design** in Tennisball-Grün
- **Mobile-optimiert** — perfekt für Smartphone und Tablet
- **Vollständig privat** — keine Anmeldung, kein Backend, kein Tracking (Verlauf & Sprache liegen nur lokal im Browser)

## Schnelleinstieg

Öffne die Datei `index.html` in deinem Browser oder teste online:
- [GitHub Pages](https://username.github.io/padel-racket-finder) (nach dem Deploy)

## Teilen mit Freunden

### Option 1: GitHub Pages (kostenlos, einfach)
1. Dieses Repo zu deinem GitHub-Account forken
2. In Settings → Pages: Deploy from `main` branch aktivieren
3. Fertig — dein Link ist `https://username.github.io/padel-racket-finder-v2-mini`

### Option 2: Netlify oder Vercel (auch kostenlos)
1. Diese Repo auf einer dieser Plattformen connecten
2. Automatisches Deploy bei jedem Push
3. Kostenlose eigene Domain oder Netlify-Domain

### Option 3: Lokal teilen
Einfach die Datei `index.html` mit Freunden teilen — sie öffnen sie im Browser, fertig.

## Woher kommen die Daten?

Alle Schläger, ihre technischen Daten (Form, Gewicht, Balance, Kernhärte, Spielniveau), Testwerte (Power, Kontrolle, Komfort, Handling, Effet, Fehlertoleranz — jeweils 0–10) und Produktbilder stammen von **[padelreference.com](https://www.padelreference.com)**, Stand September 2026. Zwei Werte (Netzspiel, Defensive) gibt es dort nicht direkt — die leiten wir rechnerisch aus den vorhandenen Testwerten ab. Lädt ein Bild einmal nicht (z. B. bei einer Server-Störung), zeigt die App automatisch ein Platzhalter-Icon statt eines kaputten Bildes.

⚠️ **Wichtig:** Preise und Verfügbarkeit ändern sich laufend. Die App zeigt den Preis zum Zeitpunkt der Recherche — vor dem Kauf immer den aktuellen Preis und die Verfügbarkeit über den Link im Shop prüfen. Manche Modelle können bei padelreference.com zeitweise ausverkauft sein; da die meisten Nutzer:innen den Schläger ohnehin bei ihrem eigenen Händler suchen, ist ein Modell trotzdem gelistet — es muss nur wirklich existieren und echte Daten haben.

## Die Auswahl: Warum "nur" 184 Modelle?

Das Projekt ist bewusst ein **Finder**, nicht ein **Shop**. Eine kuratierte Auswahl über alle Preisklassen, Kopfformen und Spielniveaus verhindert, dass das Ergebnis durch tausende kaum unterscheidbare Modelle verwässert wird — deckt aber trotzdem Einsteiger- bis Profi-Schläger von 18 Marken ab. Aufgenommen werden nur Modelle mit vollständigen Testwerten, Specs und Preis; Seiten mit offensichtlichen Tippfehlern in den Werten (z. B. 0 g Gewicht) bleiben außen vor.

## Code-Struktur

```
index.html    — Markup, Semantik, Meta-Tags, PWA-Verknüpfung
style.css     — Responsive Design, Theming, Animationen
app.js        — Daten, i18n, Quiz-Logik, Matching, Share/Verlauf/Partner-Modus
browse.js     — Browse- & Vergleichs-Modus (baut auf app.js auf)
sw.js         — Service Worker fürs Offline-Caching
manifest.json — PWA-Manifest
icons/        — App-Icons (generiert)
```

Die App ist selbstständig — alles läuft im Browser, keine externe API oder Backend nötig. Geteilte Ergebnisse werden als Link kodiert (keine Server-Speicherung), Verlauf und Spracheinstellung liegen im `localStorage` des jeweiligen Geräts.

## Roadmap / Ideen

- [ ] Mehr Racket-Modelle hinzufügen
- [ ] Export der Ergebnisse als Bild (Canvas-Screenshot)
- [ ] Weitere Sprachen (ES, FR)
- [ ] Team-Modus für mehr als 2 Spieler:innen (Americano/Mixicano-Vorbereitung)

## Feedback & Bugs

Ganz oben im Projekt → Issues oder einen Pull Request öffnen.

## Lizenz

Dieses Projekt ist kostenlos nutzbar, teilbar und veränderbar — für persönliche und Freunde-Zwecke.
