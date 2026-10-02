# AG-Gründung – interaktiver Lernkurs

Ein statischer, mobilfähiger Lernkurs mit Netlify Functions + Netlify Blobs. Keine Supabase-Datenbank und kein allgemeiner Auth-Schlüssel nötig.

## Enthalten

- vollständiger Lernkurs zur AG-Gründung und zum Formwechsel **KG/GmbH → AG**
- Schwerpunkt: **vollständige Gründungsbilanzen aus Sachverhalten, Gesellschaftsverträgen und gegebenen Schlussbilanzen** erstellen
- **48 reguläre Kernaufgaben** + Bonus-Challenges
- davon sehr viele vollständige Bilanz-Builder
- AFB-Verteilung der regulären Aufgaben: **12 × AFB 1, 24 × AFB 2, 12 × AFB 3**
- jedes Kapitel enthält Aufgaben in allen drei Anforderungsbereichen
- automatische Prüfung für eindeutige Aufgaben
- Freitext mit Selbstkontrolle und Musterlösung
- XP, Fortschrittsring, Achievements, Themes, Avatare, Outfits
- Gastmodus mit lokaler Speicherung
- Schülerkonten mit Nickname + Passwort + Klasse
- Lehrerzugang mit Klasse + Lehrercode
- Lehrer-Dashboard: Fortschritt ansehen, Fortschritt löschen, Nutzer entfernen, Passwörter neu setzen
- geräteübergreifende Synchronisation bei Anmeldung

## Didaktische Reihenfolge

Die Reihenfolge wurde bewusst so aufgebaut, dass vollständige Bilanzen **nicht erst am Ende** auftauchen:

1. **Die AG verstehen** – Rechtsform, Aktien, Eigenkapitalbegriffe
2. **Von der Idee zur AG** – Errichtung, Organe, Handelsregister, Formwechsel
3. **Aktien, Agio und Einlagen rechnen** – Rechenbasis für jede Gründungsbilanz
4. **Gründungsbilanz verstehen und vorbereiten** – Bilanzposten, ARA, Kontrollrechnung, erster vollständiger Fall
5. **Gründungsbilanz-Werkstatt: Neugründung** – wiederholtes Erstellen vollständiger Bilanzen ohne Ausgangsgesellschaft
6. **Formwechsel verstehen & Ausgangsbilanz lesen** – Schlussbilanz einer KG/GmbH auswerten und in die AG überführen
7. **Formwechsel-Werkstatt: KG/GmbH → AG** – zahlreiche vollständige Bilanzfälle aus gegebenen Schlussbilanzen plus Kapitalerhöhungen
8. **Bilanz-Meisterschaft** – komplexe Prüfungsfälle mit Agio, ARA, Gründungskosten, eingeforderten und nicht eingeforderten Einlagen

Die Formwechsel-Werkstatt enthält ausdrücklich Fälle, in denen zunächst eine **vollständige Schlussbilanz einer KG oder GmbH** gegeben ist. Daraus werden Eigenkapital, Grundkapital, Kapitalrücklage, Einzahlungen und die vollständige AG-Bilanz abgeleitet.

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

> Wichtig: `TEACHER_CODE` im Netlify-UI als Environment Variable anlegen, damit die Functions zur Laufzeit darauf zugreifen können.

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
