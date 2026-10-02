# AG-Gründung – interaktiver Lernkurs

Ein statischer, mobilfähiger Lernkurs mit Netlify Functions + Netlify Blobs. Keine Supabase-Datenbank und kein allgemeiner Auth-Schlüssel nötig.

## Enthalten

- vollständiger Lernkurs zur AG-Gründung und zum Formwechsel KG → AG
- Schwerpunkt: vollständige Gründungsbilanzen aus Sachverhalten erstellen
- 24 Kernaufgaben + Bonus-Challenges
- AFB-Kennzeichnung je Aufgabe
- automatische Prüfung für eindeutige Aufgaben
- Freitext mit Selbstkontrolle und Musterlösung
- vollständige Bilanz-Builder
- XP, Fortschrittsring, Achievements, Themes, Avatare, Outfits
- Gastmodus mit lokaler Speicherung
- Schülerkonten mit Nickname + Passwort + Klasse
- Lehrerzugang mit Klasse + Lehrercode
- Lehrer-Dashboard: Fortschritt ansehen, Fortschritt löschen, Nutzer entfernen, Passwörter neu setzen
- geräteübergreifende Synchronisation bei Anmeldung

## GitHub → Netlify

1. Inhalt dieses Ordners in ein neues GitHub-Repository hochladen.
2. In Netlify: **Add new project / Import an existing project** und das GitHub-Repository auswählen.
3. Build-Einstellungen werden aus `netlify.toml` übernommen:
   - Publish directory: `site`
   - Functions directory: `netlify/functions`
4. In Netlify unter **Project configuration → Environment variables** eine Variable anlegen:
   - Name: `TEACHER_CODE`
   - Wert: frei gewählter geheimer Lehrercode
   - Scope: Functions bzw. alle relevanten Scopes
5. Deploy starten.

> Wichtig: Laut aktueller Netlify-Dokumentation sind Umgebungsvariablen aus `netlify.toml` nicht automatisch zur Laufzeit in Functions verfügbar. Deshalb `TEACHER_CODE` im Netlify-UI anlegen.

## Konten

### Schüler
- wählt selbst Nickname und Passwort
- gibt die Klasse an
- derselbe Nickname kann in verschiedenen Klassen verwendet werden
- Fortschritt wird in Netlify Blobs gespeichert

### Lehrer
- legt ebenfalls Nickname, Passwort und Klasse fest
- zusätzlich wird der `TEACHER_CODE` benötigt
- sieht nur Nutzer der eigenen Klasse
- kann Schülerfortschritt zurücksetzen, Schülerkonten löschen und Passwörter neu setzen

## Gastmodus

Der Kurs funktioniert vollständig ohne Anmeldung. Fortschritt wird dann im Browser per `localStorage` gespeichert. Bei einer späteren Anmeldung wird lokaler Fortschritt mit dem Konto zusammengeführt.

## Datenspeicherung

Netlify Blobs Stores:

- `ag-course-users` – Konten und Index
- `ag-course-sessions` – zufällige Sitzungs-Tokens
- `ag-course-progress` – Lernfortschritt

Passwörter werden nicht im Klartext gespeichert, sondern mit Node `scrypt` + zufälligem Salt gehasht.

## Lokale Entwicklung

Mit installierter Netlify CLI:

```bash
npm install
netlify dev
```

Für lokale Lehrerregistrierung `TEACHER_CODE` als lokale Environment Variable setzen.

## Technischer Aufbau

- Vanilla HTML/CSS/JavaScript, kein Framework-Build nötig
- responsive für Desktop, Android/iOS, Windows/macOS
- Netlify Functions als API
- Netlify Blobs als persistente Datenbank
- API-Routen via `netlify.toml`: `/api/auth`, `/api/progress`, `/api/teacher`

## Umfang der Übungsphase

Die erweiterte Fassung enthält **36 reguläre Kernaufgaben** sowie zusätzliche Bonusaufgaben. Ein eigener Abschnitt **„Gründungsbilanz-Werkstatt“** enthält zahlreiche vollständige Bilanzfälle vom einfachen Bar-/Sachgründungsfall bis zu komplexen Formwechseln mit Agio, bereits eingeforderten bzw. noch nicht eingeforderten Einlagen, ARA und Gründungskosten als Aufwand.
