# Padel Racket Finder

Ein persönlicher Finder für den passenden Padel-Schläger — mit echten Modellen, echten Daten und einer ausführlichen Spielerprofil-Analyse. Keine Anmeldung, kein Backend, kein Tracking.

## Features

- **Zweisprachig:** Deutsch/Englisch umschaltbar per Klick, Auswahl wird gespeichert
- **Zwei Testmodi:** Quick Test (15 Fragen, ~3–5 Min) oder Pro Test (bis zu 23 Fragen, ~7–9 Min) mit zusätzlichen Fragen zu Gewicht, Balance-Gefühl, Wettkampf-Niveau, Verletzungsdetails, Indoor/Outdoor, Marke und Budget-Flexibilität
- **Mehrfachauswahl** bei Schwächen, Racketsport-Erfahrung und Verletzungsregionen
- **49 reale, aktuell erhältliche Schläger** von 12 Marken (HEAD, Adidas, Babolat, Wilson, Bullpadel, NOX, Siux, StarVie, Tecnifibre, Dunlop, Oxdog, Osaka) mit echten Produktbildern, Produktlinks und Preisen
- **Erklärung zu jeder Frage**, damit auch Einsteiger die Fachbegriffe verstehen
- **Visuelle Profil-Analyse:** Netzdiagramm, das dein Spielprofil mit deinem Top-Match vergleicht
- **Detaillierte Spieler-Analyse:** Spielertyp, Entwicklungsstand, Stärken/Baustellen und persönliche Trainingstipps
- **Top 3 Empfehlungen** mit Produktbild, Stat-Vergleich und nachvollziehbarer Begründung
- **Sanfte Animationen** — Übergänge, Zähl-Effekte und Balken-Animationen bei den Ergebnissen
- **Dunkles Design** in Tennisball-Grün
- **Mobile-optimiert** — perfekt für Smartphone und Tablet
- **Vollständig privat** — keine Anmeldung, Backend oder Tracking

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

⚠️ **Wichtig:** Preise und Verfügbarkeit ändern sich laufend. Die App zeigt den Preis zum Zeitpunkt der Recherche — vor dem Kauf immer den aktuellen Preis über den Link im Shop prüfen.

## Die Auswahl: Warum nur 49 Modelle?

Das Projekt ist bewusst ein **Finder**, nicht ein **Shop**. Eine kuratierte Auswahl über alle Preisklassen, Kopfformen und Spielniveaus verhindert, dass das Ergebnis durch hunderte kaum unterscheidbare Modelle verwässert wird — deckt aber trotzdem Einsteiger- bis Profi-Schläger von 9 Marken ab.

## Code-Struktur

```
index.html    — Markup, Semantik, Meta-Tags
style.css     — Responsive Design, Theming
app.js        — Quiz-Logik, Matching-Algorithmus
```

Die App ist selbstständig — alles läuft im Browser, keine externe API oder Backend nötig.

## Roadmap / Ideen

- [ ] Spieler-Profile speichern (localStorage)
- [ ] Mehr Racket-Modelle hinzufügen
- [ ] Export der Ergebnisse (PDF/Screenshot)
- [ ] Weitere Sprachen (ES, FR)

## Feedback & Bugs

Ganz oben im Projekt → Issues oder einen Pull Request öffnen.

## Lizenz

Dieses Projekt ist kostenlos nutzbar, teilbar und veränderbar — für persönliche und Freunde-Zwecke.
