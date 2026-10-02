export const COURSE_META = {
  "title": "AG-Gründung sicher beherrschen",
  "subtitle": "Von der AG-Gründung bis zur vollständigen Bilanz aus KG-/GmbH-Schlussbilanzen",
  "totalRegular": 48,
  "redThread": "MotionWerk KG → MotionWerk AG"
};

export const GLOSSARY = [
  [
    "Aktiengesellschaft (AG)",
    "Eine **Kapitalgesellschaft** mit eigenem Grundkapital, das in Aktien zerlegt ist."
  ],
  [
    "Grundkapital",
    "Das **satzungsmäßige Kapital** der AG. Es beträgt mindestens **50.000 €**."
  ],
  [
    "Gezeichnetes Kapital",
    "Bilanzposten für das **Grundkapital** der AG."
  ],
  [
    "Nennbetragsaktie",
    "Aktie mit einem **festen Nennbetrag**. Die Summe der Nennbeträge ergibt das Grundkapital."
  ],
  [
    "Stückaktie",
    "Aktie **ohne Nennwert**. Jede Stückaktie verkörpert den gleichen rechnerischen Anteil am Grundkapital."
  ],
  [
    "Agio",
    "**Aufgeld**: Betrag über dem Nennwert bzw. rechnerischen Anteil. Er fließt in die Kapitalrücklage."
  ],
  [
    "Kapitalrücklage",
    "Eigenkapital aus gesetzlich bestimmten Zuzahlungen, insbesondere aus **Agien**."
  ],
  [
    "Bareinlage",
    "Einlage in **Geld**. Vor Eintragung sind mindestens 25 % des Nennwerts plus das volle Agio zu leisten."
  ],
  [
    "Sacheinlage",
    "Einlage eines **Vermögensgegenstands**, z. B. Patent oder Maschine. Sie ist vollständig einzubringen."
  ],
  [
    "Ausstehende Einlage",
    "Noch nicht gezahlter Teil einer zugesagten Einlage. Ist er bereits eingefordert, wird er als **Forderung** ausgewiesen."
  ],
  [
    "ARA",
    "**Aktive Rechnungsabgrenzung**: Vorauszahlungen für Aufwand, der wirtschaftlich eine bestimmte Zeit nach dem Bilanzstichtag betrifft."
  ],
  [
    "Formwechsel",
    "Die Gesellschaft bleibt derselbe **Rechtsträger**; nur die Rechtsform ändert sich. Wirksam mit Handelsregistereintragung."
  ],
  [
    "Gründungsbilanz",
    "Bilanz unmittelbar nach Entstehung bzw. Wirksamwerden der AG-Rechtsform. Sie zeigt Vermögen, Schulden und Eigenkapital."
  ],
  [
    "Jahresfehlbetrag",
    "Negatives Jahresergebnis. Trägt die AG Gründungskosten als Aufwand, kann dadurch ein **Verlust** entstehen."
  ],
  [
    "Komplementär",
    "Gesellschafter einer KG mit **persönlicher Haftung**."
  ],
  [
    "Kommanditist",
    "Gesellschafter einer KG mit grundsätzlich auf die Haftsumme **beschränkter Haftung**."
  ],
  [
    "Stammkapital (GmbH)",
    "Satzungsmäßiges **Eigenkapital der GmbH**. Beim Formwechsel in eine AG wird die Eigenkapitalstruktur entsprechend dem Formwechselbeschluss in die AG-Eigenkapitalposten überführt."
  ]
];

export const CHAPTERS = [
  {
    "id": "c1",
    "num": 1,
    "icon": "🏢",
    "title": "Die AG verstehen",
    "subtitle": "Rechtsform, Aktien und Eigenkapitalbegriffe",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"definition\"><strong>Definition:</strong> Die <strong>Aktiengesellschaft (AG)</strong> ist eine Kapitalgesellschaft. Sie besitzt ein festes <strong>Grundkapital</strong>, das in Aktien zerlegt ist. Eine Börsennotierung ist möglich, aber nicht erforderlich.</div>\n      <div class=\"grid3\">\n        <div class=\"mini-card\"><div class=\"icon\">🛡️</div><strong>Haftung</strong><br>Grundsätzlich haftet das Gesellschaftsvermögen; Aktionäre haften nicht persönlich.</div>\n        <div class=\"mini-card\"><div class=\"icon\">💶</div><strong>Grundkapital</strong><br>Mindestens 50.000 €. In der Bilanz: <strong>gezeichnetes Kapital</strong>.</div>\n        <div class=\"mini-card\"><div class=\"icon\">📈</div><strong>Aktien</strong><br>Nennbetrags- oder Stückaktien. Aktien sind grundsätzlich übertragbar.</div>\n      </div>\n      <h3>Nennbetragsaktien und Stückaktien</h3>\n      <div class=\"grid2\">\n        <div class=\"callout\"><strong>Nennbetragsaktie:</strong> besitzt einen Nennbetrag. Beispiel: 100.000 Aktien × 5 € = 500.000 € Grundkapital.</div>\n        <div class=\"callout\"><strong>Stückaktie:</strong> kein Nennwert. Rechnerischer Anteil = Grundkapital ÷ Anzahl Stückaktien.</div>\n      </div>\n      <div class=\"formula\">rechnerischer Anteil je Stückaktie = Grundkapital / Anzahl der Stückaktien</div>",
    "tasks": [
      {
        "id": "t1",
        "afb": 1,
        "xp": 30,
        "type": "single",
        "title": "Grundwissen AG",
        "prompt": "Welche Aussage trifft auf eine Aktiengesellschaft zu?",
        "options": [
          "Eine AG muss zwingend börsennotiert sein.",
          "Das Grundkapital beträgt mindestens 50.000 €.",
          "Aktionäre haften immer persönlich.",
          "Eine AG darf keine Sacheinlagen erhalten."
        ],
        "answer": 1,
        "solution": "Das Grundkapital einer AG beträgt mindestens 50.000 €. Eine Börsennotierung ist keine Voraussetzung.",
        "hint": "Achten Sie auf die Rechtsformmerkmale, nicht auf den Börsengang."
      },
      {
        "id": "t2",
        "afb": 2,
        "xp": 45,
        "type": "multi",
        "title": "Welche Aussagen stimmen?",
        "prompt": "Wählen Sie alle richtigen Aussagen aus.",
        "options": [
          "Gezeichnetes Kapital entspricht dem Grundkapital.",
          "Stückaktien haben einen festen Nennwert.",
          "Aktionäre sind am Grundkapital beteiligt.",
          "Eine AG ist eine Kapitalgesellschaft.",
          "Jede AG muss ihre Aktien an einer Börse handeln lassen."
        ],
        "answer": [
          0,
          2,
          3
        ],
        "solution": "Richtig sind: gezeichnetes Kapital = Grundkapital; Aktionäre sind beteiligt; die AG ist eine Kapitalgesellschaft. Stückaktien haben keinen Nennwert und eine Börsennotierung ist nicht zwingend."
      },
      {
        "id": "t3",
        "afb": 2,
        "xp": 45,
        "type": "matching",
        "title": "Begriffe sicher zuordnen",
        "prompt": "Ordnen Sie jedem Begriff die passende Aussage zu.",
        "pairs": [
          [
            "Grundkapital",
            "satzungsmäßiges Kapital der AG"
          ],
          [
            "Kapitalrücklage",
            "enthält insbesondere Agien"
          ],
          [
            "Stückaktie",
            "Aktie ohne Nennwert"
          ],
          [
            "Gewinnrücklage",
            "einbehaltene Gewinne früherer Perioden"
          ]
        ],
        "solution": "Grundkapital → satzungsmäßiges Kapital; Kapitalrücklage → insbesondere Agien; Stückaktie → ohne Nennwert; Gewinnrücklage → einbehaltene Gewinne."
      },
      {
        "id": "t4",
        "afb": 3,
        "xp": 70,
        "type": "free",
        "title": "Börsennotierung erklären",
        "prompt": "Die Geschäftsführung der MotionWerk KG sagt: „Wenn wir eine AG werden, müssen wir automatisch an die Börse.“ Erklären Sie knapp, warum diese Aussage nicht stimmt.",
        "placeholder": "Formulieren Sie eine kurze fachliche Erklärung.",
        "solution": "Eine AG kann auch nicht börsennotiert sein. Die Rechtsform AG entsteht durch die aktienrechtliche Gründung bzw. den wirksamen Formwechsel und die Handelsregistereintragung. Ein Börsengang ist ein zusätzlicher Schritt, aber keine Voraussetzung für die Rechtsform AG."
      }
    ]
  },
  {
    "id": "c2",
    "num": 2,
    "icon": "🧭",
    "title": "Von der Idee zur AG",
    "subtitle": "Errichtung, Organe und Handelsregister",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <h3>Die Schritte im Überblick</h3>\n      <div class=\"diagram\"><div class=\"step\">1 Satzung / Beschluss</div><div class=\"arrow\">→</div><div class=\"step\">2 Aktien übernehmen</div><div class=\"arrow\">→</div><div class=\"step\">3 Bericht & Prüfung</div><div class=\"arrow\">→</div><div class=\"step\">4 Kapital aufbringen</div><div class=\"arrow\">→</div><div class=\"step\">5 Organe</div><div class=\"arrow\">→</div><div class=\"step\">6 Anmeldung & Eintragung</div></div>\n      <div class=\"definition\"><strong>Vor Eintragung:</strong> Die AG ist noch keine juristische Person. Wer in ihrem Namen handelt, haftet persönlich. <strong>Mit Eintragung</strong> entsteht die AG als juristische Person.</div>\n      <div class=\"grid2\">\n        <div class=\"callout\"><strong>Erster Aufsichtsrat & Abschlussprüfer:</strong> werden von den Gründern bestellt.</div>\n        <div class=\"callout\"><strong>Erster Vorstand:</strong> wird anschließend vom Aufsichtsrat bestellt.</div>\n      </div>\n      <div class=\"callout warn\"><strong>Formwechsel KG → AG:</strong> Der Rechtsträger bleibt bestehen. Die neue Rechtsform wird erst mit der Eintragung in das Handelsregister wirksam.</div>",
    "tasks": [
      {
        "id": "t5",
        "afb": 1,
        "xp": 35,
        "type": "order",
        "title": "Ablauf ordnen",
        "prompt": "Bringen Sie die Schritte in eine sinnvolle Reihenfolge.",
        "items": [
          "Satzung bzw. Formwechselbeschluss",
          "Übernahme bzw. Zuteilung der Aktien",
          "Gründungsbericht und Gründungsprüfung",
          "Aufbringung des Kapitals",
          "Bestellung der Organe",
          "Anmeldung und Eintragung ins Handelsregister"
        ],
        "answer": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "solution": "Satzung/Beschluss → Aktienübernahme/Zuteilung → Bericht/Prüfung → Kapitalaufbringung → Organe → Anmeldung/Eintragung."
      },
      {
        "id": "t6",
        "afb": 2,
        "xp": 45,
        "type": "sort",
        "title": "Wer macht was?",
        "prompt": "Ordnen Sie die Aussagen der richtigen Kategorie zu.",
        "buckets": [
          "Gründer",
          "Aufsichtsrat",
          "Handelsregister / Eintragung"
        ],
        "items": [
          [
            "erster Aufsichtsrat wird bestellt",
            0
          ],
          [
            "erster Vorstand wird bestellt",
            1
          ],
          [
            "AG entsteht als juristische Person",
            2
          ],
          [
            "Eintragung hat konstitutive Wirkung",
            2
          ],
          [
            "Abschlussprüfer wird zunächst bestellt",
            0
          ]
        ],
        "solution": "Gründer: erster Aufsichtsrat und Abschlussprüfer. Aufsichtsrat: erster Vorstand. Eintragung: AG entsteht; konstitutive Wirkung."
      },
      {
        "id": "t7",
        "afb": 2,
        "xp": 45,
        "type": "single",
        "title": "Wann wird der Formwechsel wirksam?",
        "prompt": "Die MotionWerk KG beschließt am 5. Mai den Formwechsel. Die Eintragung erfolgt am 20. Mai. Ab wann gilt die neue Rechtsform AG?",
        "options": [
          "ab 5. Mai",
          "ab 20. Mai",
          "erst mit dem ersten Jahresabschluss",
          "erst mit einem Börsengang"
        ],
        "answer": 1,
        "solution": "Der Formwechsel wird mit der Handelsregistereintragung wirksam. Bis dahin bleibt der Geschäftsbetrieb der KG bestehen."
      },
      {
        "id": "t8",
        "afb": 3,
        "xp": 70,
        "type": "free",
        "title": "Formwechsel beurteilen",
        "prompt": "MotionWerk wächst stark und benötigt zusätzliches Eigenkapital. Aylin möchte ihr persönliches Haftungsrisiko begrenzen, zugleich aber Einfluss behalten. Beurteilen Sie den Formwechsel in eine AG: Nennen Sie mindestens zwei Vorteile und zwei mögliche Nachteile.",
        "placeholder": "Strukturieren Sie Ihre Beurteilung in Vorteile und Nachteile.",
        "solution": "Mögliche Vorteile: erleichterte Eigenkapitalaufnahme durch Aktien; Haftungsbeschränkung der Aktionäre; Trennung von Eigentum und Unternehmensleitung; professionellere Organisationsstruktur. Mögliche Nachteile: höhere Gründungs- und Verwaltungskosten; strengere Publizitäts- und Organisationspflichten; bei Ausgabe neuer Aktien kann der Einfluss bisheriger Eigentümer verwässert werden. Einfluss kann durch einen ausreichend hohen Stimmrechtsanteil erhalten bleiben."
      }
    ]
  },
  {
    "id": "c3",
    "num": 3,
    "icon": "🪙",
    "title": "Aktien, Agio und Einlagen rechnen",
    "subtitle": "Die Rechenbasis jeder Gründungsbilanz",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"definition\"><strong>Gesetzliche Mindesteinzahlung bei Bareinlagen:</strong> mindestens <strong>25 % des Nennwerts</strong> bzw. geringsten Ausgabebetrags plus <strong>vollständiges Agio</strong>.</div>\n      <div class=\"formula\">Bareinzahlung = 25 % × Nennwert + vollständiges Agio</div>\n      <div class=\"formula\">bereits eingeforderte ausstehende Einlage = 75 % × Nennwert</div>\n      <div class=\"definition\"><strong>Sacheinlage:</strong> muss vollständig eingebracht werden. Liegt der Wert über dem Nennwert der ausgegebenen Aktien, ist die Differenz ein <strong>Agio</strong>.</div>\n      <div class=\"grid2\">\n        <div class=\"mini-card\"><strong>Beispiel Bar</strong><br>Nennwert 80.000 €, Agio 20.000 € → sofort 20.000 € + 20.000 € = 40.000 €.</div>\n        <div class=\"mini-card\"><strong>Beispiel Patent</strong><br>Patentwert 120.000 € = 120 % des Nennwerts → Nennwert 100.000 €, Agio 20.000 €.</div>\n      </div>",
    "tasks": [
      {
        "id": "t9",
        "afb": 1,
        "xp": 35,
        "type": "numeric",
        "title": "Mindesteinzahlung abrufen",
        "prompt": "Eine Bank übernimmt Aktien mit 200.000 € Nennwert und 40.000 € Agio. Wie hoch ist die gesetzliche Mindesteinzahlung?",
        "fields": [
          {
            "label": "Mindesteinzahlung in €",
            "answer": 90000,
            "tolerance": 0
          }
        ],
        "solution": "25 % von 200.000 € = 50.000 €. Hinzu kommt das vollständige Agio von 40.000 €. Mindesteinzahlung = 90.000 €."
      },
      {
        "id": "t10",
        "afb": 2,
        "xp": 50,
        "type": "numeric",
        "title": "Bareinlage zerlegen",
        "prompt": "Ein Investor übernimmt 50.000 Aktien zu 2 € Nennwert mit 30 % Agio. Der restliche Nennwert ist bereits eingefordert.",
        "fields": [
          {
            "label": "Nennwert gesamt (€)",
            "answer": 100000
          },
          {
            "label": "Agio (€)",
            "answer": 30000
          },
          {
            "label": "Bareinzahlung sofort (€)",
            "answer": 55000
          },
          {
            "label": "Ausstehende Einlage (€)",
            "answer": 75000
          }
        ],
        "solution": "Nennwert = 50.000 × 2 € = 100.000 €. Agio = 30 % von 100.000 € = 30.000 €. Sofort = 25.000 € (25 %) + 30.000 € Agio = 55.000 €. Ausstehend = 75 % von 100.000 € = 75.000 €."
      },
      {
        "id": "t11",
        "afb": 2,
        "xp": 50,
        "type": "numeric",
        "title": "Sacheinlage mit Agio",
        "prompt": "Eine Ingenieurin bringt ein Patent im Wert von 187.500 € ein. Die Aktien werden zu 125 % des Nennwerts ausgegeben. Nennwert je Aktie: 5 €.",
        "fields": [
          {
            "label": "Nennwertanteil (€)",
            "answer": 150000
          },
          {
            "label": "Agio (€)",
            "answer": 37500
          },
          {
            "label": "Aktienanzahl",
            "answer": 30000
          }
        ],
        "solution": "Nennwertanteil = 187.500 € / 1,25 = 150.000 €. Agio = 187.500 € − 150.000 € = 37.500 €. Aktienzahl = 150.000 € / 5 € = 30.000 Aktien."
      },
      {
        "id": "t12",
        "afb": 3,
        "xp": 75,
        "type": "numeric",
        "title": "MotionWerk: Kapitalstruktur ableiten",
        "prompt": "Aylin erhält Aktien zum Nennwert von 600.000 €, Jonas 400.000 €. Eine Bank übernimmt 80.000 Aktien zu 5 € Nennwert mit 25 % Agio. Eine Ingenieurin bringt ein Patent im Wert von 150.000 € ein; Ausgabepreis 125 % des Nennwerts.",
        "fields": [
          {
            "label": "Nennwert Bank (€)",
            "answer": 400000
          },
          {
            "label": "Agio Bank (€)",
            "answer": 100000
          },
          {
            "label": "Nennwert Patent (€)",
            "answer": 120000
          },
          {
            "label": "Agio Patent (€)",
            "answer": 30000
          },
          {
            "label": "Grundkapital gesamt (€)",
            "answer": 1520000
          },
          {
            "label": "Kapitalrücklage gesamt (€)",
            "answer": 130000
          }
        ],
        "solution": "Bank: 80.000 × 5 € = 400.000 € Nennwert; 25 % Agio = 100.000 €. Patent: 150.000 € / 1,25 = 120.000 € Nennwert; Agio = 30.000 €. Grundkapital = 600.000 + 400.000 + 400.000 + 120.000 = 1.520.000 €. Kapitalrücklage = 100.000 + 30.000 = 130.000 €."
      }
    ]
  },
  {
    "id": "c4",
    "num": 4,
    "icon": "⚖️",
    "title": "Gründungsbilanz verstehen und vorbereiten",
    "subtitle": "Bilanzposten, ARA, Kontrollrechnung und erster vollständiger Fall",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <h3>Das 6-Schritte-Schema</h3>\n      <div class=\"diagram\"><div class=\"step\">1 Sachverhalt markieren</div><div class=\"arrow\">→</div><div class=\"step\">2 Nennwert & Agio</div><div class=\"arrow\">→</div><div class=\"step\">3 Einzahlungen</div><div class=\"arrow\">→</div><div class=\"step\">4 Vermögen/Schulden</div><div class=\"arrow\">→</div><div class=\"step\">5 Bilanz</div><div class=\"arrow\">→</div><div class=\"step\">6 Summe prüfen</div></div>\n      <div class=\"grid2\">\n        <div class=\"callout\"><strong>Aktiva:</strong> Anlagevermögen, Umlaufvermögen, Patent, liquide Mittel, bereits eingeforderte ausstehende Einlagen, ARA.</div>\n        <div class=\"callout\"><strong>Passiva:</strong> gezeichnetes Kapital, Kapitalrücklage, ggf. Jahresfehlbetrag, Fremdkapital/Verbindlichkeiten.</div>\n      </div>\n      <div class=\"definition\"><strong>ARA:</strong> nur für Vorauszahlungen, die Aufwand für eine bestimmte Zeit <strong>nach</strong> dem Bilanzstichtag darstellen, z. B. vorausbezahlte Versicherung oder Miete. <strong>Gründungskosten sind keine ARA.</strong></div>\n      <div class=\"callout warn\"><strong>Wichtig:</strong> Nicht eingeforderte ausstehende Einlagen werden vom gezeichneten Kapital abgesetzt. Nur bereits eingeforderte, noch nicht gezahlte Einlagen werden als Forderung auf der Aktivseite gezeigt.</div>",
    "tasks": [
      {
        "id": "t13",
        "afb": 1,
        "xp": 35,
        "type": "sort",
        "title": "Aktiva oder Passiva?",
        "prompt": "Ordnen Sie die Bilanzposten zu.",
        "buckets": [
          "Aktiva",
          "Passiva"
        ],
        "items": [
          [
            "Patent",
            0
          ],
          [
            "Kapitalrücklage",
            1
          ],
          [
            "Liquide Mittel",
            0
          ],
          [
            "Gezeichnetes Kapital",
            1
          ],
          [
            "ARA",
            0
          ],
          [
            "Fremdkapital",
            1
          ],
          [
            "bereits eingeforderte ausstehende Einlagen",
            0
          ]
        ],
        "solution": "Aktiva: Patent, liquide Mittel, ARA, bereits eingeforderte ausstehende Einlagen. Passiva: gezeichnetes Kapital, Kapitalrücklage, Fremdkapital."
      },
      {
        "id": "t14",
        "afb": 2,
        "xp": 45,
        "type": "sort",
        "title": "ARA oder nicht?",
        "prompt": "Ordnen Sie die Sachverhalte richtig ein.",
        "buckets": [
          "ARA",
          "Aufwand / keine ARA",
          "Kein Aufwand der AG"
        ],
        "items": [
          [
            "Versicherungsprämie im Voraus für die Zeit nach dem Bilanzstichtag",
            0
          ],
          [
            "Notarkosten der Gründung, von der AG getragen",
            1
          ],
          [
            "Gründungskosten, privat von den Gesellschaftern getragen",
            2
          ],
          [
            "Miete für die kommenden drei Monate im Voraus",
            0
          ]
        ],
        "solution": "ARA: vorausbezahlte Versicherung und Miete für künftige Zeit. Von der AG getragene Gründungskosten sind Aufwand. Privat getragene Gründungskosten erscheinen nicht in der AG-Bilanz."
      },
      {
        "id": "t15",
        "afb": 2,
        "xp": 55,
        "type": "numeric",
        "title": "Einfache Gründungsbilanz vorbereiten",
        "prompt": "Eine AG hat 100.000 € Patent, 70.000 € Bank, 30.000 € bereits eingeforderte ausstehende Einlagen und 10.000 € ARA. Passiva: Grundkapital 180.000 €, Kapitalrücklage 30.000 €, kein Fremdkapital. Prüfen Sie die Bilanzsumme.",
        "fields": [
          {
            "label": "Summe Aktiva (€)",
            "answer": 210000
          },
          {
            "label": "Summe Passiva (€)",
            "answer": 210000
          }
        ],
        "solution": "Aktiva = 100.000 + 70.000 + 30.000 + 10.000 = 210.000 €. Passiva = 180.000 + 30.000 = 210.000 €. Die Bilanz ist ausgeglichen."
      },
      {
        "id": "t16",
        "afb": 3,
        "xp": 90,
        "type": "balance",
        "title": "MotionWerk: vollständige Gründungsbilanz",
        "prompt": "Die MotionWerk AG übernimmt aus der KG 2.400.000 € Vermögen und 1.400.000 € Fremdkapital. Zusätzlich: Patent 150.000 €, Bank zeichnet 400.000 € Nennwert mit 100.000 € Agio und zahlt die Mindesteinzahlung; 300.000 € sind bereits eingefordert und noch offen. 50.000 € Versicherungsprämie werden im Voraus gezahlt. Die bisherigen Gesellschafter erhalten 1.000.000 € Nennwert. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              2400000
            ],
            [
              "Patent",
              150000
            ],
            [
              "Ausstehende Einlagen",
              300000
            ],
            [
              "Liquide Mittel",
              150000
            ],
            [
              "ARA",
              50000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1520000
            ],
            [
              "Kapitalrücklage",
              130000
            ],
            [
              "Fremdkapital",
              1400000
            ]
          ]
        },
        "solution": "Bareinzahlung Bank = 100.000 € (25 % von 400.000 €) + 100.000 € Agio = 200.000 €. Liquide Mittel = 200.000 € − 50.000 € Vorauszahlung = 150.000 €. Grundkapital = 1.000.000 € Altgesellschafter + 400.000 € Bank + 120.000 € Patent = 1.520.000 €. Kapitalrücklage = 100.000 € Bank + 30.000 € Patent = 130.000 €. Bilanzsumme = 3.050.000 €."
      }
    ]
  },
  {
    "id": "c5",
    "num": 5,
    "icon": "🧱",
    "title": "Gründungsbilanz-Werkstatt: Neugründung",
    "subtitle": "Vom Grundfall zur vollständigen Bilanz ohne Ausgangsgesellschaft",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"callout ok\"><strong>Jetzt wird bilanziert:</strong> Bevor Sie Formwechsel-Fälle aus einer bestehenden KG oder GmbH lösen, trainieren Sie zunächst die Gründungsbilanz einer neu gegründeten AG. So wird die Rechenroutine sicher.</div>\n      <h3>Arbeitsroutine bei einer Neugründung</h3>\n      <div class=\"diagram\"><div class=\"step\">1 Nennwerte</div><div class=\"arrow\">→</div><div class=\"step\">2 Aktienzahl</div><div class=\"arrow\">→</div><div class=\"step\">3 Agio</div><div class=\"arrow\">→</div><div class=\"step\">4 Einzahlung / ausstehend</div><div class=\"arrow\">→</div><div class=\"step\">5 ARA / Aufwand</div><div class=\"arrow\">→</div><div class=\"step\">6 Bilanz & Kontrolle</div></div>\n      <div class=\"grid2\"><div class=\"mini-card\"><strong>Aktiva</strong><br>Sacheinlagen, liquide Mittel, bereits eingeforderte ausstehende Einlagen und ggf. ARA.</div><div class=\"mini-card\"><strong>Passiva</strong><br>Gezeichnetes Kapital, Kapitalrücklage und ggf. Jahresfehlbetrag bzw. nicht eingeforderte Einlagen als Abzug.</div></div>\n      <div class=\"callout warn\"><strong>Kontrolle:</strong> Eine Gründungsbilanz ist erst fertig, wenn <strong>Summe Aktiva = Summe Passiva</strong> gilt.</div>",
    "tasks": [
      {
        "id": "t25",
        "afb": 1,
        "xp": 55,
        "type": "balance",
        "title": "Grundfall: Bar- und Sacheinlage",
        "prompt": "Die CityCharge AG wird mit 120.000 € Grundkapital gegründet. Gründerin A übernimmt 80.000 € Nennwert als Bareinlage und leistet 25 %; die restlichen 75 % sind bereits eingefordert. Gründer B bringt ein Patent im Wert von 40.000 € zum Nennwert ein. Es gibt kein Agio und keine weiteren Geschäftsvorfälle. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Patent",
              40000
            ],
            [
              "Ausstehende Einlagen",
              60000
            ],
            [
              "Liquide Mittel",
              20000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              120000
            ]
          ]
        },
        "solution": "Nennwert Bareinlage = 80.000 € (Gründerin A).\nMindesteinzahlung = 20.000 € (25 % von 80.000 €).\nAusstehende, bereits eingeforderte Einlage = 60.000 € (75 % von 80.000 €).\nSacheinlage = 40.000 € (Patent von Gründer B).\nGezeichnetes Kapital = 80.000 € (A) + 40.000 € (B) = 120.000 €.\nBilanzsumme = 40.000 € (Patent) + 60.000 € (ausstehende Einlage) + 20.000 € (liquide Mittel) = 120.000 €."
      },
      {
        "id": "t26",
        "afb": 1,
        "xp": 55,
        "type": "balance",
        "title": "Grundfall mit Agio",
        "prompt": "Die FreshBox AG besitzt 200.000 € Grundkapital. Eine Gründerin übernimmt 100.000 € Nennwert als Bareinlage mit 10 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Ein zweiter Gründer bringt eine Maschine im Wert von 100.000 € zum Nennwert ein. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Maschine",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Maschine",
              100000
            ],
            [
              "Ausstehende Einlagen",
              75000
            ],
            [
              "Liquide Mittel",
              35000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              200000
            ],
            [
              "Kapitalrücklage",
              10000
            ]
          ]
        },
        "solution": "Agio = 10.000 € (10 % von 100.000 € Nennwert der Bareinlage).\nMindesteinzahlung = 25.000 € (25 % von 100.000 €) + 10.000 € (vollständiges Agio) = 35.000 €.\nAusstehende, bereits eingeforderte Einlage = 75.000 € (75 % von 100.000 €).\nGezeichnetes Kapital = 100.000 € (Bareinlage) + 100.000 € (Maschine) = 200.000 €.\nKapitalrücklage = 10.000 € (Agio der Bareinlage).\nBilanzsumme = 210.000 €."
      },
      {
        "id": "t31",
        "afb": 2,
        "xp": 85,
        "type": "balance",
        "title": "Neugründung mit zwei Bareinlagen und Patent",
        "prompt": "Die MedLog AG wird neu gegründet. Gründer A übernimmt 200.000 € Nennwert mit 10 % Agio, Gründerin B 150.000 € Nennwert mit 20 % Agio. Beide leisten nur die gesetzliche Mindesteinzahlung; die Restnennwerte sind bereits eingefordert. Gründer C bringt ein Patent im Wert von 180.000 € ein; der Ausgabepreis beträgt 120 % des Nennwerts. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Patent",
              180000
            ],
            [
              "Ausstehende Einlagen",
              262500
            ],
            [
              "Liquide Mittel",
              137500
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              500000
            ],
            [
              "Kapitalrücklage",
              80000
            ]
          ]
        },
        "solution": "Agio A = 20.000 € (10 % von 200.000 € Nennwert).\nBareinzahlung A = 50.000 € (25 % von 200.000 €) + 20.000 € (Agio) = 70.000 €; ausstehend A = 150.000 € (75 %).\nAgio B = 30.000 € (20 % von 150.000 €).\nBareinzahlung B = 37.500 € (25 % von 150.000 €) + 30.000 € (Agio) = 67.500 €; ausstehend B = 112.500 € (75 %).\nPatent-Nennwert C = 180.000 € (Patentwert = 120 %) / 1,20 = 150.000 €; Agio C = 30.000 €.\nGrundkapital = 200.000 € (A) + 150.000 € (B) + 150.000 € (C) = 500.000 €.\nKapitalrücklage = 20.000 € (A) + 30.000 € (B) + 30.000 € (C) = 80.000 €.\nLiquide Mittel = 70.000 € (A) + 67.500 € (B) = 137.500 €.\nAusstehende Einlagen = 150.000 € (A) + 112.500 € (B) = 262.500 €.\nBilanzsumme = 580.000 €."
      },
      {
        "id": "t33",
        "afb": 2,
        "xp": 90,
        "type": "balance",
        "title": "Sonderfall: Rest noch nicht eingefordert",
        "prompt": "Die NovaCare AG wird mit 200.000 € Grundkapital gegründet. Ein Aktionär übernimmt 120.000 € Nennwert als Bareinlage und zahlt 25 %. Die restlichen 75 % wurden noch nicht eingefordert. Eine zweite Aktionärin bringt ein Patent im Wert von 80.000 € zum Nennwert ein. Es gibt kein Agio. Stellen Sie die vollständige Gründungsbilanz auf. Verwenden Sie für den noch nicht eingeforderten Teil den offenen Abzug vom gezeichneten Kapital.",
        "accounts": [
          "Patent",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Nicht eingeforderte Einlagen (Abzug)"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Patent",
              80000
            ],
            [
              "Liquide Mittel",
              30000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              200000
            ],
            [
              "Nicht eingeforderte Einlagen (Abzug)",
              -90000
            ]
          ]
        },
        "solution": "Bareinzahlung = 30.000 € (25 % von 120.000 € Nennwert).\nNoch nicht eingeforderte Einlage = 90.000 € (75 % von 120.000 €). Weil sie noch nicht eingefordert wurde, ist sie keine Forderung auf der Aktivseite, sondern wird offen vom gezeichneten Kapital abgesetzt.\nGezeichnetes Kapital = 120.000 € (Bareinlage) + 80.000 € (Patent) = 200.000 €.\nOffener Abzug = −90.000 €.\nNetto-Eigenkapital aus gezeichnetem Kapital = 110.000 €.\nAktiva = 80.000 € (Patent) + 30.000 € (Bank) = 110.000 €; Passiva = 200.000 € − 90.000 € = 110.000 €."
      },
      {
        "id": "t37",
        "afb": 1,
        "xp": 55,
        "type": "balance",
        "title": "Neugründung: nur Bareinlagen",
        "prompt": "Die QuickRepair AG wird mit 100.000 € Grundkapital gegründet. Gründerin A übernimmt 60.000 € Nennwert, Gründer B 40.000 € Nennwert. Beide leisten nur die gesetzliche Mindesteinzahlung; die restlichen Nennwerte sind bereits eingefordert. Es gibt kein Agio und keine weiteren Geschäftsvorfälle. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Ausstehende Einlagen",
              75000
            ],
            [
              "Liquide Mittel",
              25000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              100000
            ]
          ]
        },
        "solution": "Gründerin A: Mindesteinzahlung = 15.000 € (25 % von 60.000 €); ausstehend = 45.000 € (75 % von 60.000 €).\nGründer B: Mindesteinzahlung = 10.000 € (25 % von 40.000 €); ausstehend = 30.000 € (75 % von 40.000 €).\nLiquide Mittel = 15.000 € (A) + 10.000 € (B) = 25.000 €.\nAusstehende Einlagen = 45.000 € (A) + 30.000 € (B) = 75.000 €.\nGezeichnetes Kapital = 60.000 € (A) + 40.000 € (B) = 100.000 €.\nBilanzsumme = 100.000 €."
      },
      {
        "id": "t38",
        "afb": 2,
        "xp": 85,
        "type": "balance",
        "title": "Neugründung: Bar, Patent, Agio und ARA",
        "prompt": "Die FoodTrack AG wird mit 300.000 € Grundkapital gegründet. Gründer A übernimmt 180.000 € Nennwert als Bareinlage mit 20 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der restliche Nennwert ist eingefordert. Gründerin B bringt ein Patent im Wert von 144.000 € ein; der Ausgabepreis beträgt 120 % des Nennwerts. Die AG zahlt 20.000 € Versicherungsprämie im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Patent",
              144000
            ],
            [
              "Ausstehende Einlagen",
              135000
            ],
            [
              "Liquide Mittel",
              61000
            ],
            [
              "ARA",
              20000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              300000
            ],
            [
              "Kapitalrücklage",
              60000
            ]
          ]
        },
        "solution": "Bareinlage A: Agio = 36.000 € (20 % von 180.000 €).\nMindesteinzahlung A = 45.000 € (25 % von 180.000 €) + 36.000 € (vollständiges Agio) = 81.000 €.\nAusstehende Einlage A = 135.000 € (75 % von 180.000 €).\nPatent B: Nennwert = 144.000 € (Patentwert) / 1,20 = 120.000 €; Agio = 24.000 € (144.000 € − 120.000 €).\nGrundkapital = 180.000 € (A) + 120.000 € (B) = 300.000 €.\nKapitalrücklage = 36.000 € (Agio A) + 24.000 € (Agio B) = 60.000 €.\nLiquide Mittel = 81.000 € (Bareinzahlung A) − 20.000 € (Vorauszahlung Versicherung) = 61.000 €.\nARA = 20.000 € (vorausbezahlte Versicherung).\nBilanzsumme = 360.000 €."
      },
      {
        "id": "t39",
        "afb": 2,
        "xp": 90,
        "type": "balance",
        "title": "Neugründung: eingefordert oder noch nicht eingefordert?",
        "prompt": "Die EventTech AG wird mit 400.000 € Grundkapital gegründet. Aktionär A übernimmt 200.000 € Nennwert mit 10 % Agio und leistet die gesetzliche Mindesteinzahlung; die restlichen 75 % des Nennwerts sind bereits eingefordert. Aktionärin B übernimmt 200.000 € Nennwert ohne Agio und zahlt 25 %; die restlichen 75 % wurden noch nicht eingefordert. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Nicht eingeforderte Einlagen (Abzug)",
          "Kapitalrücklage"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Ausstehende Einlagen",
              150000
            ],
            [
              "Liquide Mittel",
              120000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              400000
            ],
            [
              "Nicht eingeforderte Einlagen (Abzug)",
              -150000
            ],
            [
              "Kapitalrücklage",
              20000
            ]
          ]
        },
        "solution": "Aktionär A: Agio = 20.000 € (10 % von 200.000 €). Bareinzahlung = 50.000 € (25 % von 200.000 €) + 20.000 € (Agio) = 70.000 €. Bereits eingefordert, aber noch offen = 150.000 € (75 % von 200.000 €) → Forderung auf der Aktivseite.\nAktionärin B: Bareinzahlung = 50.000 € (25 % von 200.000 €). Noch nicht eingefordert = 150.000 € (75 % von 200.000 €) → offener Abzug vom gezeichneten Kapital.\nLiquide Mittel = 70.000 € (A) + 50.000 € (B) = 120.000 €.\nGezeichnetes Kapital = 400.000 €. Kapitalrücklage = 20.000 €.\nPassiva netto = 400.000 € − 150.000 € + 20.000 € = 270.000 €. Aktiva = 150.000 € + 120.000 € = 270.000 €."
      },
      {
        "id": "t40",
        "afb": 3,
        "xp": 125,
        "type": "balance",
        "title": "Neugründung: vollständiger Mischfall",
        "prompt": "Die SensorLab AG wird mit 600.000 € Grundkapital gegründet. Gründer A übernimmt 300.000 € Nennwert als Bareinlage mit 20 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Gründerin B bringt ein Patent im Wert von 240.000 € ein; Ausgabepreis 120 % des Nennwerts. Gründer C bringt eine Maschine im Wert von 125.000 € ein; Ausgabepreis 125 % des Nennwerts. Laut Satzung trägt die AG 50.000 € Gründungskosten, die sofort als Aufwand bezahlt werden. Zusätzlich zahlt sie 25.000 € Versicherung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Patent",
          "Maschine",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Patent",
              240000
            ],
            [
              "Maschine",
              125000
            ],
            [
              "Ausstehende Einlagen",
              225000
            ],
            [
              "Liquide Mittel",
              60000
            ],
            [
              "ARA",
              25000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              600000
            ],
            [
              "Kapitalrücklage",
              125000
            ],
            [
              "Jahresfehlbetrag",
              -50000
            ]
          ]
        },
        "solution": "Gründer A: Agio = 60.000 € (20 % von 300.000 €). Bareinzahlung = 75.000 € (25 % von 300.000 €) + 60.000 € (Agio) = 135.000 €. Ausstehend = 225.000 € (75 % von 300.000 €).\nPatent B: Nennwert = 240.000 € / 1,20 = 200.000 €; Agio = 40.000 €.\nMaschine C: Nennwert = 125.000 € / 1,25 = 100.000 €; Agio = 25.000 €.\nGrundkapital = 300.000 € (A) + 200.000 € (B) + 100.000 € (C) = 600.000 €.\nKapitalrücklage = 60.000 € (A) + 40.000 € (B) + 25.000 € (C) = 125.000 €.\nJahresfehlbetrag = −50.000 € (Gründungskosten als Aufwand).\nARA = 25.000 € (vorausbezahlte Versicherung).\nLiquide Mittel = 135.000 € (Bareinzahlung A) − 50.000 € (Gründungskosten) − 25.000 € (Vorauszahlung) = 60.000 €.\nBilanzsumme = 675.000 €."
      }
    ]
  },
  {
    "id": "c6",
    "num": 6,
    "icon": "🔁",
    "title": "Formwechsel verstehen & Ausgangsbilanz lesen",
    "subtitle": "KG/GmbH: Schlussbilanz, Eigenkapital und Wirksamwerden",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"definition\"><strong>Formwechsel:</strong> Der Rechtsträger bleibt derselbe; nur die Rechtsform ändert sich. Vermögenswerte und Schulden werden deshalb nicht auf eine neue Gesellschaft „verkauft“, sondern bestehen fort. Der Formwechsel wird mit der <strong>Handelsregistereintragung</strong> wirksam.</div>\n      <h3>Von der Schlussbilanz zur AG</h3>\n      <div class=\"diagram\"><div class=\"step\">1 Schlussbilanz lesen</div><div class=\"arrow\">→</div><div class=\"step\">2 Eigenkapital bestimmen</div><div class=\"arrow\">→</div><div class=\"step\">3 Grundkapital / Rücklagen festlegen</div><div class=\"arrow\">→</div><div class=\"step\">4 Vermögen & Schulden fortführen</div><div class=\"arrow\">→</div><div class=\"step\">5 neue Kapitalmaßnahmen ergänzen</div></div>\n      <div class=\"callout\"><strong>KG:</strong> In den Aufgaben werden häufig die Eigenkapitalanteile der bisherigen Gesellschafter in Aktien zum Nennwert überführt.</div>\n      <div class=\"callout\"><strong>GmbH:</strong> Ausgangspunkt sind z. B. Stammkapital und vorhandene Gewinnrücklagen. Der Formwechselbeschluss gibt vor, wie hoch das Grundkapital der AG ist und welche Rücklagen fortgeführt werden.</div>",
    "tasks": [
      {
        "id": "t17",
        "afb": 1,
        "xp": 35,
        "type": "truefalse",
        "title": "Formwechsel: richtig oder falsch?",
        "prompt": "Bewerten Sie die Aussagen.",
        "statements": [
          [
            "Beim Formwechsel bleibt der Rechtsträger bestehen.",
            true
          ],
          [
            "Die AG-Rechtsform gilt bereits mit dem bloßen Gesellschafterbeschluss.",
            false
          ],
          [
            "Die Schulden der KG verschwinden durch den Formwechsel.",
            false
          ],
          [
            "Das Grundkapital muss mindestens 50.000 € betragen.",
            true
          ]
        ],
        "solution": "Richtig: Rechtsträger bleibt bestehen; Grundkapital mindestens 50.000 €. Falsch: Wirksamkeit erst mit Eintragung; Schulden bestehen fort."
      },
      {
        "id": "t18",
        "afb": 2,
        "xp": 55,
        "type": "numeric",
        "title": "Eigenkapital aus Finanzierungsquote",
        "prompt": "Einem Beteiligungsbereich der MotionWerk KG sind 1.500.000 € Vermögen zuzurechnen. Dieser Bereich ist zu 60 % fremdfinanziert. Nennwert je Aktie: 5 €.",
        "fields": [
          {
            "label": "Fremdkapitalanteil (€)",
            "answer": 900000
          },
          {
            "label": "Eigenkapitalanteil (€)",
            "answer": 600000
          },
          {
            "label": "Aktienanzahl",
            "answer": 120000
          }
        ],
        "solution": "Fremdkapital = 1.500.000 × 60 % = 900.000 €. Eigenkapital = 1.500.000 × 40 % = 600.000 €. Aktienzahl = 600.000 / 5 = 120.000 Aktien."
      },
      {
        "id": "t19",
        "afb": 2,
        "xp": 70,
        "type": "balance",
        "title": "Formwechsel + Kapitalerhöhung",
        "prompt": "Eine KG hat 900.000 € Anlagevermögen, 300.000 € Umlaufvermögen und 500.000 € Fremdkapital. Das Eigenkapital von 700.000 € wird vollständig in Grundkapital umgewandelt. Unmittelbar danach zeichnet eine Bank 100.000 € Nennwert mit 20.000 € Agio; sie zahlt 45.000 €, 75.000 € sind eingefordert und offen. Keine weiteren Zahlungen. Erstellen Sie die Bilanz.",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              900000
            ],
            [
              "Umlaufvermögen KG",
              300000
            ],
            [
              "Ausstehende Einlagen",
              75000
            ],
            [
              "Liquide Mittel",
              45000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              800000
            ],
            [
              "Kapitalrücklage",
              20000
            ],
            [
              "Fremdkapital",
              500000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 1.200.000 € Vermögen − 500.000 € Fremdkapital = 700.000 €. Nach Kapitalerhöhung: Grundkapital = 700.000 + 100.000 = 800.000 €. Kapitalrücklage = 20.000 €. Bilanzsumme = 1.320.000 €."
      },
      {
        "id": "t20",
        "afb": 3,
        "xp": 80,
        "type": "free",
        "title": "Sachverhalt fachlich strukturieren",
        "prompt": "Die Gesellschafter sagen: „Wir übertragen beim Formwechsel das Vermögen der KG auf eine neue AG und zahlen danach die alten Schulden aus.“ Erklären Sie, wie der Vorgang fachlich korrekt zu beschreiben ist und welche Folgen das für die Gründungsbilanz hat.",
        "placeholder": "Erklären Sie Rechtsträger, Vermögen, Schulden und Bilanzwirkung.",
        "solution": "Beim Formwechsel bleibt derselbe Rechtsträger bestehen; es findet keine Vermögensübertragung auf eine andere Gesellschaft statt. Mit der Handelsregistereintragung ändert sich die Rechtsform zur AG. Die Vermögenswerte und Schulden der KG bestehen fort und werden in der Bilanz der AG weitergeführt. Das vorhandene Eigenkapital dient zur Deckung des Grundkapitals; zusätzliche Kapitalzufuhr ist als gesonderte Kapitalmaßnahme zu erfassen."
      },
      {
        "id": "t41",
        "afb": 1,
        "xp": 65,
        "type": "balance",
        "title": "KG-Schlussbilanz → AG ohne neues Kapital",
        "prompt": "Die BikeWorks KG wird mit Eintragung in die BikeWorks AG formgewechselt. Das gesamte bisherige Eigenkapital wird als Grundkapital festgesetzt. Es gibt keine Kapitalerhöhung. Erstellen Sie aus der gegebenen Schlussbilanz die Bilanz der AG unmittelbar nach dem Formwechsel.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der BikeWorks KG</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>720.000 €</td><td>EK Komplementär</td><td>260.000 €</td></tr><tr><td>Umlaufvermögen</td><td>280.000 €</td><td>EK Kommanditist</td><td>140.000 €</td></tr><tr><td></td><td></td><td>Langfristiges Fremdkapital</td><td>450.000 €</td></tr><tr><td></td><td></td><td>Verbindlichkeiten aus LL</td><td>150.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>1.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>1.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Gezeichnetes Kapital",
          "Langfristiges Fremdkapital",
          "Verbindlichkeiten aus LL"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              720000
            ],
            [
              "Umlaufvermögen KG",
              280000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              400000
            ],
            [
              "Langfristiges Fremdkapital",
              450000
            ],
            [
              "Verbindlichkeiten aus LL",
              150000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 260.000 € (Komplementär) + 140.000 € (Kommanditist) = 400.000 €.\nGezeichnetes Kapital der AG = 400.000 € (gesamtes bisheriges Eigenkapital laut Formwechselbeschluss).\nAnlagevermögen = 720.000 € und Umlaufvermögen = 280.000 € werden fortgeführt.\nLangfristiges Fremdkapital = 450.000 € und Verbindlichkeiten aus LL = 150.000 € werden fortgeführt.\nBilanzsumme = 1.000.000 €."
      },
      {
        "id": "t42",
        "afb": 1,
        "xp": 65,
        "type": "balance",
        "title": "GmbH-Schlussbilanz → AG mit Gewinnrücklagen",
        "prompt": "Die CodeCraft GmbH wird in die CodeCraft AG formgewechselt. Der Formwechselbeschluss setzt das Grundkapital der AG auf 300.000 € fest; die bestehenden Gewinnrücklagen bleiben in Höhe von 200.000 € erhalten. Es gibt keine neue Kapitalzufuhr. Erstellen Sie die Bilanz der AG unmittelbar nach dem Formwechsel.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der CodeCraft GmbH</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>600.000 €</td><td>Stammkapital</td><td>300.000 €</td></tr><tr><td>Umlaufvermögen</td><td>400.000 €</td><td>Gewinnrücklagen</td><td>200.000 €</td></tr><tr><td></td><td></td><td>Fremdkapital</td><td>500.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>1.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>1.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen GmbH",
          "Umlaufvermögen GmbH",
          "Gezeichnetes Kapital",
          "Gewinnrücklagen",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen GmbH",
              600000
            ],
            [
              "Umlaufvermögen GmbH",
              400000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              300000
            ],
            [
              "Gewinnrücklagen",
              200000
            ],
            [
              "Fremdkapital",
              500000
            ]
          ]
        },
        "solution": "Das vorhandene Eigenkapital der GmbH beträgt 500.000 € = 300.000 € Stammkapital + 200.000 € Gewinnrücklagen.\nDer Formwechselbeschluss setzt das Grundkapital der AG auf 300.000 € fest → gezeichnetes Kapital 300.000 €.\nGewinnrücklagen = 200.000 € werden fortgeführt.\nAnlagevermögen = 600.000 €, Umlaufvermögen = 400.000 € und Fremdkapital = 500.000 € bleiben beim Formwechsel bestehen.\nBilanzsumme = 1.000.000 €."
      }
    ]
  },
  {
    "id": "c7",
    "num": 7,
    "icon": "🏗️",
    "title": "Formwechsel-Werkstatt: KG/GmbH → AG",
    "subtitle": "Aus Schlussbilanzen vollständige AG-Bilanzen erstellen",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"callout ok\"><strong>Schwerpunkt dieses Kapitels:</strong> Sie erhalten eine <strong>Schlussbilanz einer KG oder GmbH</strong> und erstellen daraus die vollständige Bilanz der AG nach dem Formwechsel – häufig kombiniert mit einer anschließenden Kapitalerhöhung.</div>\n      <h3>Prüfroutine für Formwechsel-Fälle</h3>\n      <div class=\"diagram\"><div class=\"step\">1 Ausgangsbilanz abschreiben</div><div class=\"arrow\">→</div><div class=\"step\">2 EK-Struktur klären</div><div class=\"arrow\">→</div><div class=\"step\">3 neue Nennwerte / Agien</div><div class=\"arrow\">→</div><div class=\"step\">4 Einzahlungen</div><div class=\"arrow\">→</div><div class=\"step\">5 ARA / Aufwand</div><div class=\"arrow\">→</div><div class=\"step\">6 vollständige AG-Bilanz</div></div>\n      <div class=\"callout warn\"><strong>Typische Fehlerquelle:</strong> Das vorhandene Fremdkapital verschwindet beim Formwechsel nicht. Ebenso bleibt vorhandenes Vermögen bestehen. Neue Einlagen kommen zusätzlich hinzu.</div>",
    "tasks": [
      {
        "id": "t27",
        "afb": 1,
        "xp": 60,
        "type": "balance",
        "title": "Formwechsel ohne neues Kapital",
        "prompt": "Die EcoPrint KG wird in eine AG formgewechselt. Zum Wirksamwerden bestehen 600.000 € Anlagevermögen, 200.000 € Umlaufvermögen und 300.000 € Fremdkapital. Das gesamte Eigenkapital wird zum Grundkapital der AG. Es gibt keine neue Kapitalzufuhr. Erstellen Sie die vollständige Gründungsbilanz nach dem Formwechsel.",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Gezeichnetes Kapital",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              600000
            ],
            [
              "Umlaufvermögen KG",
              200000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              500000
            ],
            [
              "Fremdkapital",
              300000
            ]
          ]
        },
        "solution": "Eigenkapital der KG = 800.000 € (600.000 € Anlagevermögen + 200.000 € Umlaufvermögen) − 300.000 € (Fremdkapital) = 500.000 €.\nGezeichnetes Kapital = 500.000 € (vollständig aus dem bisherigen Eigenkapital).\nFremdkapital = 300.000 € (wird beim Formwechsel fortgeführt).\nBilanzsumme = 800.000 €."
      },
      {
        "id": "t28",
        "afb": 2,
        "xp": 80,
        "type": "balance",
        "title": "Formwechsel plus Bankbeteiligung",
        "prompt": "Die SolarDock KG besitzt Vermögen von 1.200.000 € und Fremdkapital von 700.000 €. Das Eigenkapital wird beim Formwechsel vollständig Grundkapital. Direkt danach übernimmt eine Bank Aktien im Nennwert von 100.000 € mit 20 % Agio. Die Bank leistet nur die gesetzliche Mindesteinzahlung; der restliche Nennwert ist bereits eingefordert. Weitere Zahlungen gibt es nicht. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              1200000
            ],
            [
              "Ausstehende Einlagen",
              75000
            ],
            [
              "Liquide Mittel",
              45000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              600000
            ],
            [
              "Kapitalrücklage",
              20000
            ],
            [
              "Fremdkapital",
              700000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 1.200.000 € (Vermögen) − 700.000 € (Fremdkapital) = 500.000 €.\nAgio Bank = 20.000 € (20 % von 100.000 € Nennwert).\nBareinzahlung Bank = 25.000 € (25 % von 100.000 € Nennwert) + 20.000 € (vollständiges Agio) = 45.000 €.\nAusstehende, bereits eingeforderte Einlage = 75.000 € (75 % von 100.000 € Nennwert).\nGrundkapital = 500.000 € (Altgesellschafter) + 100.000 € (Bank) = 600.000 €.\nKapitalrücklage = 20.000 € (Agio Bank).\nBilanzsumme = 1.320.000 €."
      },
      {
        "id": "t29",
        "afb": 2,
        "xp": 85,
        "type": "balance",
        "title": "Formwechsel mit Patent, Bank und ARA",
        "prompt": "Die RoboService KG besitzt 2.000.000 € Vermögen und 1.200.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Zusätzlich wird ein Patent im Wert von 240.000 € zu 120 % des Nennwerts eingebracht. Eine Bank übernimmt Aktien zu einem gesamten Ausgabebetrag von 390.000 € bei 130 % Ausgabepreis und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Die AG zahlt 45.000 € Versicherungsprämie im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Die Gesellschafter tragen die Gründungskosten privat. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              2000000
            ],
            [
              "Patent",
              240000
            ],
            [
              "Ausstehende Einlagen",
              225000
            ],
            [
              "Liquide Mittel",
              120000
            ],
            [
              "ARA",
              45000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1300000
            ],
            [
              "Kapitalrücklage",
              130000
            ],
            [
              "Fremdkapital",
              1200000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 2.000.000 € (Vermögen) − 1.200.000 € (Fremdkapital) = 800.000 €.\nPatent-Nennwert = 240.000 € (Patentwert = 120 %) / 1,20 = 200.000 €.\nAgio Patent = 40.000 € (240.000 € − 200.000 €).\nBank-Nennwert = 390.000 € (Ausgabebetrag) / 1,30 = 300.000 €.\nAgio Bank = 90.000 € (390.000 € − 300.000 €).\nBareinzahlung Bank = 75.000 € (25 % von 300.000 €) + 90.000 € (Agio) = 165.000 €.\nAusstehende Einlage = 225.000 € (75 % von 300.000 €).\nGrundkapital = 800.000 € (KG) + 200.000 € (Patent) + 300.000 € (Bank) = 1.300.000 €.\nKapitalrücklage = 40.000 € (Patent) + 90.000 € (Bank) = 130.000 €.\nLiquide Mittel = 165.000 € (Bank) − 45.000 € (Vorauszahlung Versicherung) = 120.000 €.\nARA = 45.000 € (vorausbezahlte Versicherung).\nBilanzsumme = 2.630.000 €."
      },
      {
        "id": "t30",
        "afb": 2,
        "xp": 85,
        "type": "balance",
        "title": "Beteiligungsquoten aus dem KG-Vermögen ableiten",
        "prompt": "Die CargoBike KG besitzt 3.000.000 € Vermögen und ist zu 60 % fremdfinanziert. Davon sind 1.800.000 € Vermögen Gesellschafterin A und 1.200.000 € Gesellschafter B zuzurechnen. Beide erhalten Aktien zum Nennwert entsprechend ihrem Eigenkapitalanteil. Nennwert je Aktie: 4 €. Eine Bank übernimmt zusätzlich 400.000 € Nennwert mit 25 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Vermögen der KG",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              3000000
            ],
            [
              "Ausstehende Einlagen",
              300000
            ],
            [
              "Liquide Mittel",
              200000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1600000
            ],
            [
              "Kapitalrücklage",
              100000
            ],
            [
              "Fremdkapital",
              1800000
            ]
          ]
        },
        "solution": "Fremdkapital = 1.800.000 € (60 % von 3.000.000 €).\nEigenkapital gesamt = 1.200.000 € (40 % von 3.000.000 €).\nEigenkapital A = 720.000 € (40 % von 1.800.000 € zurechenbarem Vermögen) → 180.000 Aktien (720.000 € / 4 €).\nEigenkapital B = 480.000 € (40 % von 1.200.000 €) → 120.000 Aktien (480.000 € / 4 €).\nAgio Bank = 100.000 € (25 % von 400.000 € Nennwert).\nBareinzahlung Bank = 100.000 € (25 % von 400.000 €) + 100.000 € (Agio) = 200.000 €.\nAusstehende Einlage = 300.000 € (75 % von 400.000 €).\nGrundkapital = 720.000 € (A) + 480.000 € (B) + 400.000 € (Bank) = 1.600.000 €.\nKapitalrücklage = 100.000 €.\nBilanzsumme = 3.500.000 €."
      },
      {
        "id": "t32",
        "afb": 2,
        "xp": 90,
        "type": "balance",
        "title": "Großer Formwechsel mit Kapitalerhöhung",
        "prompt": "Die SmartFactory KG besitzt 4.500.000 € Vermögen und 2.700.000 € Fremdkapital. Das gesamte Eigenkapital wird Grundkapital. Eine neue Aktionärin bringt eine Maschine im Wert von 480.000 € zu 120 % des Nennwerts ein. Die Hausbank übernimmt Aktien zu einem Ausgabebetrag von 1.040.000 € bei 130 % Ausgabepreis und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Die AG zahlt 80.000 € Wartung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Gründungskosten tragen die bisherigen Gesellschafter privat. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Maschine",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              4500000
            ],
            [
              "Maschine",
              480000
            ],
            [
              "Ausstehende Einlagen",
              600000
            ],
            [
              "Liquide Mittel",
              360000
            ],
            [
              "ARA",
              80000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              3000000
            ],
            [
              "Kapitalrücklage",
              320000
            ],
            [
              "Fremdkapital",
              2700000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 4.500.000 € (Vermögen) − 2.700.000 € (Fremdkapital) = 1.800.000 €.\nMaschinen-Nennwert = 480.000 € / 1,20 = 400.000 €; Agio Maschine = 80.000 €.\nBank-Nennwert = 1.040.000 € / 1,30 = 800.000 €; Agio Bank = 240.000 €.\nBareinzahlung Bank = 200.000 € (25 % von 800.000 €) + 240.000 € (Agio) = 440.000 €.\nAusstehende Einlage Bank = 600.000 € (75 % von 800.000 €).\nGrundkapital = 1.800.000 € (KG) + 400.000 € (Maschine) + 800.000 € (Bank) = 3.000.000 €.\nKapitalrücklage = 80.000 € (Maschine) + 240.000 € (Bank) = 320.000 €.\nLiquide Mittel = 440.000 € (Bareinzahlung) − 80.000 € (Vorauszahlung Wartung) = 360.000 €.\nARA = 80.000 €.\nBilanzsumme = 6.020.000 €."
      },
      {
        "id": "t43",
        "afb": 2,
        "xp": 90,
        "type": "balance",
        "title": "KG-Schlussbilanz + Kapitalerhöhung durch die Bank",
        "prompt": "Die UrbanTools KG wird in eine AG formgewechselt. Das gesamte bisherige Eigenkapital wird Grundkapital. Unmittelbar danach übernimmt die Hausbank 200.000 € Nennwert mit 20 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist bereits eingefordert. Die Gründungskosten tragen die bisherigen Gesellschafter persönlich. Erstellen Sie die vollständige Bilanz nach Formwechsel und Kapitalerhöhung.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der UrbanTools KG</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>1.200.000 €</td><td>EK Komplementär</td><td>500.000 €</td></tr><tr><td>Umlaufvermögen</td><td>600.000 €</td><td>EK Kommanditist</td><td>300.000 €</td></tr><tr><td></td><td></td><td>Langfristiges Fremdkapital</td><td>700.000 €</td></tr><tr><td></td><td></td><td>Verbindlichkeiten aus LL</td><td>300.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>1.800.000 €</strong></td><td><strong>Summe</strong></td><td><strong>1.800.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Langfristiges Fremdkapital",
          "Verbindlichkeiten aus LL"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              1200000
            ],
            [
              "Umlaufvermögen KG",
              600000
            ],
            [
              "Ausstehende Einlagen",
              150000
            ],
            [
              "Liquide Mittel",
              90000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1000000
            ],
            [
              "Kapitalrücklage",
              40000
            ],
            [
              "Langfristiges Fremdkapital",
              700000
            ],
            [
              "Verbindlichkeiten aus LL",
              300000
            ]
          ]
        },
        "solution": "Altgesellschafter = 500.000 € (EK Komplementär) + 300.000 € (EK Kommanditist) = 800.000 € Grundkapital aus der KG.\nBank: Agio = 40.000 € (20 % von 200.000 € Nennwert).\nBareinzahlung Bank = 50.000 € (25 % von 200.000 €) + 40.000 € (vollständiges Agio) = 90.000 €.\nAusstehende, bereits eingeforderte Einlage = 150.000 € (75 % von 200.000 €).\nGrundkapital = 800.000 € (Altgesellschafter) + 200.000 € (Bank) = 1.000.000 €.\nKapitalrücklage = 40.000 € (Agio Bank).\nFremdkapital wird mit 700.000 € + 300.000 € fortgeführt.\nBilanzsumme = 2.040.000 €."
      },
      {
        "id": "t44",
        "afb": 2,
        "xp": 90,
        "type": "balance",
        "title": "GmbH-Schlussbilanz + Kapitalerhöhung mit Agio",
        "prompt": "Die MedCode GmbH wird in die MedCode AG formgewechselt. Das Grundkapital der AG wird auf 400.000 € festgesetzt; die Gewinnrücklagen von 200.000 € bleiben bestehen. Anschließend übernimmt eine Bank 200.000 € Nennwert mit 25 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist bereits eingefordert. Erstellen Sie die vollständige Bilanz.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der MedCode GmbH</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>900.000 €</td><td>Stammkapital</td><td>400.000 €</td></tr><tr><td>Umlaufvermögen</td><td>600.000 €</td><td>Gewinnrücklagen</td><td>200.000 €</td></tr><tr><td></td><td></td><td>Fremdkapital</td><td>900.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>1.500.000 €</strong></td><td><strong>Summe</strong></td><td><strong>1.500.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen GmbH",
          "Umlaufvermögen GmbH",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Gewinnrücklagen",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen GmbH",
              900000
            ],
            [
              "Umlaufvermögen GmbH",
              600000
            ],
            [
              "Ausstehende Einlagen",
              150000
            ],
            [
              "Liquide Mittel",
              100000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              600000
            ],
            [
              "Kapitalrücklage",
              50000
            ],
            [
              "Gewinnrücklagen",
              200000
            ],
            [
              "Fremdkapital",
              900000
            ]
          ]
        },
        "solution": "Aus dem Formwechsel: gezeichnetes Kapital = 400.000 €; Gewinnrücklagen = 200.000 €; Fremdkapital = 900.000 €.\nBank: Agio = 50.000 € (25 % von 200.000 € Nennwert).\nBareinzahlung Bank = 50.000 € (25 % von 200.000 €) + 50.000 € (vollständiges Agio) = 100.000 €.\nAusstehende, bereits eingeforderte Einlage = 150.000 € (75 % von 200.000 €).\nGezeichnetes Kapital nach Kapitalerhöhung = 400.000 € (Formwechsel) + 200.000 € (Bank) = 600.000 €.\nKapitalrücklage = 50.000 € (Agio Bank).\nBilanzsumme = 1.750.000 €."
      },
      {
        "id": "t45",
        "afb": 2,
        "xp": 100,
        "type": "balance",
        "title": "KG-Schlussbilanz + Patent + Bank + ARA",
        "prompt": "Die ServiceBot KG wird in die ServiceBot AG formgewechselt. Das bisherige Eigenkapital wird vollständig Grundkapital. Eine Ingenieurin bringt anschließend ein Patent im Wert von 300.000 € ein; Ausgabepreis 120 % des Nennwerts. Die Hausbank übernimmt Aktien zu einem Ausgabebetrag von 390.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Die AG zahlt 45.000 € Versicherung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Die Gründungskosten tragen die bisherigen Gesellschafter persönlich. Erstellen Sie die vollständige Bilanz.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der ServiceBot KG</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>2.000.000 €</td><td>EK Gesellschafter A</td><td>700.000 €</td></tr><tr><td>Umlaufvermögen</td><td>1.000.000 €</td><td>EK Gesellschafter B</td><td>500.000 €</td></tr><tr><td></td><td></td><td>Langfristiges Fremdkapital</td><td>1.400.000 €</td></tr><tr><td></td><td></td><td>Verbindlichkeiten aus LL</td><td>400.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>3.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>3.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Langfristiges Fremdkapital",
          "Verbindlichkeiten aus LL"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              2000000
            ],
            [
              "Umlaufvermögen KG",
              1000000
            ],
            [
              "Patent",
              300000
            ],
            [
              "Ausstehende Einlagen",
              225000
            ],
            [
              "Liquide Mittel",
              120000
            ],
            [
              "ARA",
              45000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1750000
            ],
            [
              "Kapitalrücklage",
              140000
            ],
            [
              "Langfristiges Fremdkapital",
              1400000
            ],
            [
              "Verbindlichkeiten aus LL",
              400000
            ]
          ]
        },
        "solution": "Altgesellschafter = 700.000 € + 500.000 € = 1.200.000 € Grundkapital aus der KG.\nPatent: Nennwert = 300.000 € / 1,20 = 250.000 €; Agio = 50.000 €.\nBank: Nennwert = 390.000 € / 1,30 = 300.000 €; Agio = 90.000 €.\nBareinzahlung Bank = 75.000 € (25 % von 300.000 €) + 90.000 € (Agio) = 165.000 €.\nAusstehende Einlage = 225.000 € (75 % von 300.000 €).\nGrundkapital = 1.200.000 € (KG) + 250.000 € (Patent) + 300.000 € (Bank) = 1.750.000 €.\nKapitalrücklage = 50.000 € (Patent) + 90.000 € (Bank) = 140.000 €.\nLiquide Mittel = 165.000 € − 45.000 € (Vorauszahlung Versicherung) = 120.000 €. ARA = 45.000 €.\nBilanzsumme = 3.865.000 €."
      },
      {
        "id": "t46",
        "afb": 2,
        "xp": 100,
        "type": "balance",
        "title": "GmbH-Schlussbilanz + nicht eingeforderte Einlage",
        "prompt": "Die AppForge GmbH wird in die AppForge AG formgewechselt. Das Grundkapital der AG wird auf 500.000 € festgesetzt; Gewinnrücklagen von 300.000 € bleiben bestehen. Danach übernimmt Investor B 400.000 € Nennwert ohne Agio und zahlt 25 %. Die restlichen 75 % wurden noch nicht eingefordert. Erstellen Sie die vollständige Bilanz und behandeln Sie den noch nicht eingeforderten Teil korrekt.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der AppForge GmbH</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>1.400.000 €</td><td>Stammkapital</td><td>500.000 €</td></tr><tr><td>Umlaufvermögen</td><td>600.000 €</td><td>Gewinnrücklagen</td><td>300.000 €</td></tr><tr><td></td><td></td><td>Fremdkapital</td><td>1.200.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>2.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>2.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen GmbH",
          "Umlaufvermögen GmbH",
          "Liquide Mittel",
          "Gezeichnetes Kapital",
          "Nicht eingeforderte Einlagen (Abzug)",
          "Gewinnrücklagen",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen GmbH",
              1400000
            ],
            [
              "Umlaufvermögen GmbH",
              600000
            ],
            [
              "Liquide Mittel",
              100000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              900000
            ],
            [
              "Nicht eingeforderte Einlagen (Abzug)",
              -300000
            ],
            [
              "Gewinnrücklagen",
              300000
            ],
            [
              "Fremdkapital",
              1200000
            ]
          ]
        },
        "solution": "Aus dem Formwechsel: gezeichnetes Kapital = 500.000 €; Gewinnrücklagen = 300.000 €; Fremdkapital = 1.200.000 €.\nInvestor B: Bareinzahlung = 100.000 € (25 % von 400.000 € Nennwert).\nNicht eingeforderte Einlage = 300.000 € (75 % von 400.000 €). Da sie noch nicht eingefordert wurde, ist sie keine Forderung auf der Aktivseite, sondern ein offener Abzug vom gezeichneten Kapital.\nGezeichnetes Kapital vor Abzug = 500.000 € (Formwechsel) + 400.000 € (Investor B) = 900.000 €.\nPassiva = 900.000 € − 300.000 € + 300.000 € + 1.200.000 € = 2.100.000 €.\nAktiva = 1.400.000 € + 600.000 € + 100.000 € = 2.100.000 €."
      },
      {
        "id": "t47",
        "afb": 3,
        "xp": 140,
        "type": "balance",
        "title": "KG-Prüfungsfall aus vollständiger Schlussbilanz",
        "prompt": "Die DriveSystems KG wird in eine AG formgewechselt. Das bisherige Eigenkapital wird vollständig Grundkapital. Zusätzlich wird ein Patent im Wert von 500.000 € zu 125 % des Nennwerts eingebracht. Die Hausbank übernimmt Aktien zu einem Ausgabebetrag von 1.040.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Die AG trägt laut Satzung 80.000 € Gründungskosten als Aufwand und zahlt 60.000 € Versicherung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Gründungsbilanz und bestimmen Sie zusätzlich die Aktienanzahl der beiden bisherigen Gesellschafter bei 5 € Nennwert je Aktie.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der DriveSystems KG</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>3.600.000 €</td><td>EK Gesellschafter A</td><td>1.200.000 €</td></tr><tr><td>Umlaufvermögen</td><td>1.400.000 €</td><td>EK Gesellschafter B</td><td>800.000 €</td></tr><tr><td></td><td></td><td>Langfristiges Fremdkapital</td><td>2.400.000 €</td></tr><tr><td></td><td></td><td>Verbindlichkeiten aus LL</td><td>600.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>5.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>5.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen KG",
          "Umlaufvermögen KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Langfristiges Fremdkapital",
          "Verbindlichkeiten aus LL"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen KG",
              3600000
            ],
            [
              "Umlaufvermögen KG",
              1400000
            ],
            [
              "Patent",
              500000
            ],
            [
              "Ausstehende Einlagen",
              600000
            ],
            [
              "Liquide Mittel",
              300000
            ],
            [
              "ARA",
              60000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              3200000
            ],
            [
              "Kapitalrücklage",
              340000
            ],
            [
              "Jahresfehlbetrag",
              -80000
            ],
            [
              "Langfristiges Fremdkapital",
              2400000
            ],
            [
              "Verbindlichkeiten aus LL",
              600000
            ]
          ]
        },
        "solution": "Altgesellschafter: 1.200.000 € (A) + 800.000 € (B) = 2.000.000 € Grundkapital aus der KG.\nAktien A = 1.200.000 € / 5 € = 240.000 Aktien; Aktien B = 800.000 € / 5 € = 160.000 Aktien.\nPatent: Nennwert = 500.000 € / 1,25 = 400.000 €; Agio = 100.000 €.\nBank: Nennwert = 1.040.000 € / 1,30 = 800.000 €; Agio = 240.000 €.\nBareinzahlung Bank = 200.000 € (25 % von 800.000 €) + 240.000 € (Agio) = 440.000 €. Ausstehend = 600.000 €.\nGrundkapital = 2.000.000 € (KG) + 400.000 € (Patent) + 800.000 € (Bank) = 3.200.000 €.\nKapitalrücklage = 100.000 € (Patent) + 240.000 € (Bank) = 340.000 €.\nJahresfehlbetrag = −80.000 € (Gründungskosten). ARA = 60.000 €.\nLiquide Mittel = 440.000 € − 80.000 € − 60.000 € = 300.000 €.\nBilanzsumme = 6.460.000 €."
      },
      {
        "id": "t48",
        "afb": 3,
        "xp": 145,
        "type": "balance",
        "title": "GmbH-Prüfungsfall mit zwei neuen Kapitalgebern",
        "prompt": "Die FutureOffice GmbH wird in die FutureOffice AG formgewechselt. Der Formwechselbeschluss setzt das Grundkapital der AG auf 1.200.000 € fest; 500.000 € des bisherigen Eigenkapitals werden als Gewinnrücklagen fortgeführt. Investor A übernimmt danach 600.000 € Nennwert mit 20 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist bereits eingefordert. Investor B übernimmt 400.000 € Nennwert ohne Agio und zahlt 25 %; die restlichen 75 % wurden noch nicht eingefordert. Die AG trägt 100.000 € Gründungskosten als Aufwand und zahlt 50.000 € Versicherung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Bilanz.",
        "caseHtml": "<div class=\"task-case\"><strong>Schlussbilanz der FutureOffice GmbH</strong><div class=\"table-scroll\"><table class=\"case-table\"><thead><tr><th>Aktiva</th><th>Betrag</th><th>Passiva</th><th>Betrag</th></tr></thead><tbody><tr><td>Anlagevermögen</td><td>4.000.000 €</td><td>Stammkapital</td><td>1.000.000 €</td></tr><tr><td>Umlaufvermögen</td><td>2.000.000 €</td><td>Gewinnrücklagen / Gewinnvortrag</td><td>700.000 €</td></tr><tr><td></td><td></td><td>Langfristiges Fremdkapital</td><td>3.300.000 €</td></tr><tr><td></td><td></td><td>Verbindlichkeiten aus LL</td><td>1.000.000 €</td></tr><tr class=\"sum-row\"><td><strong>Summe</strong></td><td><strong>6.000.000 €</strong></td><td><strong>Summe</strong></td><td><strong>6.000.000 €</strong></td></tr></tbody></table></div></div>",
        "accounts": [
          "Anlagevermögen GmbH",
          "Umlaufvermögen GmbH",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Nicht eingeforderte Einlagen (Abzug)",
          "Kapitalrücklage",
          "Gewinnrücklagen",
          "Jahresfehlbetrag",
          "Langfristiges Fremdkapital",
          "Verbindlichkeiten aus LL"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Anlagevermögen GmbH",
              4000000
            ],
            [
              "Umlaufvermögen GmbH",
              2000000
            ],
            [
              "Ausstehende Einlagen",
              450000
            ],
            [
              "Liquide Mittel",
              220000
            ],
            [
              "ARA",
              50000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              2200000
            ],
            [
              "Nicht eingeforderte Einlagen (Abzug)",
              -300000
            ],
            [
              "Kapitalrücklage",
              120000
            ],
            [
              "Gewinnrücklagen",
              500000
            ],
            [
              "Jahresfehlbetrag",
              -100000
            ],
            [
              "Langfristiges Fremdkapital",
              3300000
            ],
            [
              "Verbindlichkeiten aus LL",
              1000000
            ]
          ]
        },
        "solution": "Formwechsel: gezeichnetes Kapital = 1.200.000 €; fortgeführte Gewinnrücklagen = 500.000 €. Das entspricht zusammen 1.700.000 € bisherigem Eigenkapital der GmbH.\nInvestor A: Agio = 120.000 € (20 % von 600.000 €). Bareinzahlung = 150.000 € (25 % von 600.000 €) + 120.000 € (Agio) = 270.000 €. Ausstehend, bereits eingefordert = 450.000 €.\nInvestor B: Bareinzahlung = 100.000 € (25 % von 400.000 €). Nicht eingefordert = 300.000 € (75 % von 400.000 €) → offener Abzug vom gezeichneten Kapital.\nGezeichnetes Kapital = 1.200.000 € (Formwechsel) + 600.000 € (Investor A) + 400.000 € (Investor B) = 2.200.000 €.\nKapitalrücklage = 120.000 € (Agio Investor A).\nLiquide Mittel vor Ausgaben = 270.000 € + 100.000 € = 370.000 €.\nLiquide Mittel = 370.000 € − 100.000 € (Gründungskosten) − 50.000 € (Vorauszahlung) = 220.000 €.\nJahresfehlbetrag = −100.000 €. ARA = 50.000 €.\nPassiva = 2.200.000 € − 300.000 € + 120.000 € + 500.000 € − 100.000 € + 3.300.000 € + 1.000.000 € = 6.720.000 €.\nAktiva = 4.000.000 € + 2.000.000 € + 450.000 € + 220.000 € + 50.000 € = 6.720.000 €."
      }
    ]
  },
  {
    "id": "c8",
    "num": 8,
    "icon": "🏆",
    "title": "Bilanz-Meisterschaft",
    "subtitle": "Komplexe Prüfungsfälle selbstständig vollständig lösen",
    "intro": "\n<div class=\"case-banner\">\n  <div class=\"case-logo\">🚲</div>\n  <div><strong>Roter Faden: MotionWerk KG</strong><br>\n  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>\n</div>\n      <div class=\"callout ok\"><strong>Prüfstrategie:</strong> Schreiben Sie nicht sofort die Bilanz. Erstellen Sie zuerst eine Rechentabelle: <em>Ausgangsbilanz → Eigenkapital → Nennwert → Aktienzahl → Agio → Bareinzahlung → ausstehend → ARA/Aufwand</em>. Erst danach bauen Sie Aktiva und Passiva auf.</div>\n      <h3>Kontrollfragen vor der Abgabe</h3>\n      <div class=\"grid2\">\n        <div class=\"mini-card\">✓ Ist jedes Agio in der Kapitalrücklage?</div><div class=\"mini-card\">✓ Wurde das volle Agio eingezahlt?</div>\n        <div class=\"mini-card\">✓ Sind nur bereits eingeforderte Restbeträge Forderungen?</div><div class=\"mini-card\">✓ Ist ARA wirklich eine Vorauszahlung für spätere Zeit?</div>\n        <div class=\"mini-card\">✓ Sind Gründungskosten korrekt behandelt?</div><div class=\"mini-card\">✓ Stimmen Bilanzsumme Aktiva und Passiva?</div>\n      </div>",
    "tasks": [
      {
        "id": "t21",
        "afb": 1,
        "xp": 40,
        "type": "numeric",
        "title": "MotionWerk: Rechentabelle",
        "prompt": "Die Bank übernimmt 80.000 Aktien zu 5 € Nennwert mit 25 % Agio. Das Patent hat 150.000 € Wert und entspricht 125 % des Nennwerts. Ermitteln Sie die Werte, bevor Sie eine Bilanz aufstellen.",
        "fields": [
          {
            "label": "Bank Nennwert (€)",
            "answer": 400000
          },
          {
            "label": "Bank Agio (€)",
            "answer": 100000
          },
          {
            "label": "Bank Bareinzahlung (€)",
            "answer": 200000
          },
          {
            "label": "Bank ausstehend (€)",
            "answer": 300000
          },
          {
            "label": "Patent Nennwert (€)",
            "answer": 120000
          },
          {
            "label": "Patent Agio (€)",
            "answer": 30000
          }
        ],
        "solution": "Bank: Nennwert 80.000 × 5 = 400.000 €; Agio 25 % = 100.000 €; Bareinzahlung 25 % von 400.000 = 100.000 € + 100.000 € Agio = 200.000 €; ausstehend 300.000 €. Patent: 150.000 / 1,25 = 120.000 € Nennwert; Agio 30.000 €."
      },
      {
        "id": "t22",
        "afb": 2,
        "xp": 80,
        "type": "balance",
        "title": "Gründungskosten durch die AG",
        "prompt": "Wie Aufgabe zuvor, aber die AG trägt zusätzlich 60.000 € Gründungskosten als Aufwand und zahlt 40.000 € Versicherung für die Zeit nach dem Bilanzstichtag im Voraus. Aus der KG kommen 2.400.000 € Vermögen und 1.400.000 € Fremdkapital; Altgesellschafter-Nennwert 1.000.000 €. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              2400000
            ],
            [
              "Patent",
              150000
            ],
            [
              "Ausstehende Einlagen",
              300000
            ],
            [
              "Liquide Mittel",
              100000
            ],
            [
              "ARA",
              40000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              1520000
            ],
            [
              "Kapitalrücklage",
              130000
            ],
            [
              "Jahresfehlbetrag",
              -60000
            ],
            [
              "Fremdkapital",
              1400000
            ]
          ]
        },
        "solution": "Bareinzahlung Bank 200.000 €. Liquide Mittel = 200.000 − 60.000 Gründungskosten − 40.000 Vorauszahlung = 100.000 €. ARA = 40.000 €. Gründungskosten sind Aufwand → Jahresfehlbetrag −60.000 €. Bilanzsumme = 2.990.000 €."
      },
      {
        "id": "t23",
        "afb": 2,
        "xp": 80,
        "type": "numeric",
        "title": "Komplexer Kapitalfall",
        "prompt": "Die UrbanPulse KG hat Vermögen 5.000.000 €, davon 55 % fremdfinanziert. Das Eigenkapital wird vollständig Grundkapital. Nennwert je Aktie 10 €. Zusätzlich: Patent 360.000 € zu 120 % des Nennwerts; Bank-Ausgabebetrag 780.000 € zu 130 % des Nennwerts. Bank zahlt nur Mindesteinzahlung; Rest ist eingefordert.",
        "fields": [
          {
            "label": "Eigenkapital KG (€)",
            "answer": 2250000
          },
          {
            "label": "Patent Nennwert (€)",
            "answer": 300000
          },
          {
            "label": "Patent Agio (€)",
            "answer": 60000
          },
          {
            "label": "Bank Nennwert (€)",
            "answer": 600000
          },
          {
            "label": "Bank Agio (€)",
            "answer": 180000
          },
          {
            "label": "Bank Bareinzahlung (€)",
            "answer": 330000
          },
          {
            "label": "Bank ausstehend (€)",
            "answer": 450000
          },
          {
            "label": "Grundkapital gesamt (€)",
            "answer": 3150000
          },
          {
            "label": "Kapitalrücklage gesamt (€)",
            "answer": 240000
          }
        ],
        "solution": "EK KG = 5.000.000 × 45 % = 2.250.000 €. Patent: 360.000 / 1,20 = 300.000 € Nennwert; Agio 60.000 €. Bank: 780.000 / 1,30 = 600.000 € Nennwert; Agio 180.000 €. Bareinzahlung = 150.000 € (25 %) + 180.000 € = 330.000 €. Ausstehend = 450.000 €. Grundkapital = 2.250.000 + 300.000 + 600.000 = 3.150.000 €. Kapitalrücklage = 240.000 €."
      },
      {
        "id": "t24",
        "afb": 3,
        "xp": 120,
        "type": "balance",
        "title": "Finale: vollständige Gründungsbilanz",
        "prompt": "UrbanPulse: Vermögen KG 5.000.000 €, Fremdkapital 2.750.000 €. Patent 360.000 €. Bank: Nennwert 600.000 €, Agio 180.000 €, Bareinzahlung 330.000 €, ausstehend 450.000 €. Grundkapital 3.150.000 €, Kapitalrücklage 240.000 €. Die AG zahlt 90.000 € Gründungskosten als Aufwand und 60.000 € Miete für die Zeit nach dem Bilanzstichtag im Voraus. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              5000000
            ],
            [
              "Patent",
              360000
            ],
            [
              "Ausstehende Einlagen",
              450000
            ],
            [
              "Liquide Mittel",
              180000
            ],
            [
              "ARA",
              60000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              3150000
            ],
            [
              "Kapitalrücklage",
              240000
            ],
            [
              "Jahresfehlbetrag",
              -90000
            ],
            [
              "Fremdkapital",
              2750000
            ]
          ]
        },
        "solution": "Liquide Mittel = 330.000 € Bareinzahlung − 90.000 € Gründungskosten − 60.000 € Vorauszahlung = 180.000 €. ARA = 60.000 €. Gründungskosten → Jahresfehlbetrag −90.000 €. Aktiva = 5.000.000 + 360.000 + 450.000 + 180.000 + 60.000 = 6.050.000 €. Passiva = 3.150.000 + 240.000 − 90.000 + 2.750.000 = 6.050.000 €."
      },
      {
        "id": "t34",
        "afb": 3,
        "xp": 125,
        "type": "balance",
        "title": "Prüfungsfall: Formwechsel mit Aufwand und ARA",
        "prompt": "Die DroneParts KG besitzt 6.000.000 € Vermögen und 3.600.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Ein Patent im Wert von 750.000 € wird zu 125 % des Nennwerts eingebracht. Die Bank übernimmt Aktien zu einem Ausgabebetrag von 1.300.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Laut Satzung trägt die AG 100.000 € Gründungskosten, die sofort als Aufwand bezahlt werden. Zusätzlich werden 50.000 € Versicherung für eine bestimmte Zeit nach dem Bilanzstichtag vorausbezahlt. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              6000000
            ],
            [
              "Patent",
              750000
            ],
            [
              "Ausstehende Einlagen",
              750000
            ],
            [
              "Liquide Mittel",
              400000
            ],
            [
              "ARA",
              50000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              4000000
            ],
            [
              "Kapitalrücklage",
              450000
            ],
            [
              "Jahresfehlbetrag",
              -100000
            ],
            [
              "Fremdkapital",
              3600000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 6.000.000 € − 3.600.000 € = 2.400.000 €.\nPatent-Nennwert = 750.000 € / 1,25 = 600.000 €; Agio Patent = 150.000 €.\nBank-Nennwert = 1.300.000 € / 1,30 = 1.000.000 €; Agio Bank = 300.000 €.\nBareinzahlung Bank = 250.000 € (25 % von 1.000.000 €) + 300.000 € (Agio) = 550.000 €.\nAusstehende Einlage = 750.000 € (75 % von 1.000.000 €).\nGrundkapital = 2.400.000 € (KG) + 600.000 € (Patent) + 1.000.000 € (Bank) = 4.000.000 €.\nKapitalrücklage = 150.000 € (Patent) + 300.000 € (Bank) = 450.000 €.\nJahresfehlbetrag = −100.000 € (Gründungskosten als Aufwand).\nARA = 50.000 € (vorausbezahlte Versicherung).\nLiquide Mittel = 550.000 € (Bareinzahlung) − 100.000 € (Gründungskosten) − 50.000 € (Vorauszahlung) = 400.000 €.\nBilanzsumme = 7.950.000 €."
      },
      {
        "id": "t35",
        "afb": 3,
        "xp": 130,
        "type": "balance",
        "title": "Prüfungsfall mit Beteiligungsberechnung",
        "prompt": "Die E-Mobility Systems KG besitzt 4.000.000 € Vermögen und ist zu 50 % fremdfinanziert. Gesellschafterin A sind 2.400.000 € Vermögen, Gesellschafter B 1.600.000 € zuzurechnen. Beide erhalten Aktien entsprechend ihrem Eigenkapitalanteil; Nennwert je Aktie 5 €. Zusätzlich wird ein Patent im Wert von 375.000 € zu 125 % eingebracht. Eine Bank übernimmt Aktien zu einem Ausgabebetrag von 975.000 € bei 130 % und zahlt nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Die AG trägt 75.000 € Gründungskosten als Aufwand und zahlt 37.500 € Versicherung für die Zeit nach dem Bilanzstichtag voraus. Erstellen Sie die vollständige Bilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              4000000
            ],
            [
              "Patent",
              375000
            ],
            [
              "Ausstehende Einlagen",
              562500
            ],
            [
              "Liquide Mittel",
              300000
            ],
            [
              "ARA",
              37500
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              3050000
            ],
            [
              "Kapitalrücklage",
              300000
            ],
            [
              "Jahresfehlbetrag",
              -75000
            ],
            [
              "Fremdkapital",
              2000000
            ]
          ]
        },
        "solution": "Fremdkapital KG = 2.000.000 € (50 % von 4.000.000 €).\nEigenkapital A = 1.200.000 € (50 % von 2.400.000 €) → 240.000 Aktien (1.200.000 € / 5 €).\nEigenkapital B = 800.000 € (50 % von 1.600.000 €) → 160.000 Aktien.\nPatent-Nennwert = 375.000 € / 1,25 = 300.000 € → 60.000 Aktien; Agio Patent = 75.000 €.\nBank-Nennwert = 975.000 € / 1,30 = 750.000 € → 150.000 Aktien; Agio Bank = 225.000 €.\nBareinzahlung Bank = 187.500 € (25 % von 750.000 €) + 225.000 € (Agio) = 412.500 €.\nAusstehende Einlage = 562.500 € (75 % von 750.000 €).\nGrundkapital = 1.200.000 € (A) + 800.000 € (B) + 300.000 € (Patent) + 750.000 € (Bank) = 3.050.000 €.\nKapitalrücklage = 75.000 € (Patent) + 225.000 € (Bank) = 300.000 €.\nJahresfehlbetrag = −75.000 € (Gründungskosten).\nARA = 37.500 € (Versicherung).\nLiquide Mittel = 412.500 € − 75.000 € − 37.500 € = 300.000 €.\nBilanzsumme = 5.275.000 €."
      },
      {
        "id": "t36",
        "afb": 3,
        "xp": 140,
        "type": "balance",
        "title": "Meisterfall: eingeforderte und nicht eingeforderte Einlagen",
        "prompt": "Die MotionWerk KG besitzt beim Formwechsel 8.000.000 € Vermögen und 4.800.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Ein Patent im Wert von 1.050.000 € wird zu 140 % eingebracht. Bank A übernimmt Aktien zu einem Ausgabebetrag von 1.560.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist bereits eingefordert. Investor B übernimmt 400.000 € Nennwert ohne Agio, zahlt 25 %, die restlichen 75 % wurden noch nicht eingefordert. Die AG trägt 160.000 € Gründungskosten als Aufwand und zahlt 100.000 € Miete im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Gründungsbilanz.",
        "accounts": [
          "Vermögen der KG",
          "Patent",
          "Ausstehende Einlagen",
          "Liquide Mittel",
          "ARA",
          "Gezeichnetes Kapital",
          "Nicht eingeforderte Einlagen (Abzug)",
          "Kapitalrücklage",
          "Jahresfehlbetrag",
          "Fremdkapital"
        ],
        "solutionRows": {
          "aktiva": [
            [
              "Vermögen der KG",
              8000000
            ],
            [
              "Patent",
              1050000
            ],
            [
              "Ausstehende Einlagen",
              900000
            ],
            [
              "Liquide Mittel",
              500000
            ],
            [
              "ARA",
              100000
            ]
          ],
          "passiva": [
            [
              "Gezeichnetes Kapital",
              5550000
            ],
            [
              "Nicht eingeforderte Einlagen (Abzug)",
              -300000
            ],
            [
              "Kapitalrücklage",
              660000
            ],
            [
              "Jahresfehlbetrag",
              -160000
            ],
            [
              "Fremdkapital",
              4800000
            ]
          ]
        },
        "solution": "Eigenkapital KG = 8.000.000 € − 4.800.000 € = 3.200.000 €.\nPatent-Nennwert = 1.050.000 € / 1,40 = 750.000 €; Agio Patent = 300.000 €.\nBank-A-Nennwert = 1.560.000 € / 1,30 = 1.200.000 €; Agio Bank A = 360.000 €.\nBareinzahlung Bank A = 300.000 € (25 % von 1.200.000 €) + 360.000 € (Agio) = 660.000 €; eingefordert ausstehend = 900.000 € (75 %).\nInvestor B: Nennwert 400.000 €; Bareinzahlung = 100.000 € (25 %); nicht eingefordert = 300.000 € (75 %), daher offener Abzug vom gezeichneten Kapital und keine Aktivforderung.\nGrundkapital = 3.200.000 € (KG) + 750.000 € (Patent) + 1.200.000 € (Bank A) + 400.000 € (Investor B) = 5.550.000 €.\nKapitalrücklage = 300.000 € (Patent) + 360.000 € (Bank A) = 660.000 €.\nLiquide Mittel vor Ausgaben = 660.000 € (Bank A) + 100.000 € (Investor B) = 760.000 €.\nLiquide Mittel = 760.000 € − 160.000 € (Gründungskosten) − 100.000 € (Vorauszahlung Miete) = 500.000 €.\nARA = 100.000 €. Jahresfehlbetrag = −160.000 €.\nPassiva: 5.550.000 € (gezeichnetes Kapital) − 300.000 € (nicht eingefordert) + 660.000 € (Kapitalrücklage) − 160.000 € (Jahresfehlbetrag) + 4.800.000 € (Fremdkapital) = 10.550.000 €.\nAktiva: 8.000.000 € + 1.050.000 € + 900.000 € + 500.000 € + 100.000 € = 10.550.000 €."
      }
    ]
  }
];

export const BONUS_TASKS = [
  {
    "id": "b1",
    "afb": 2,
    "xp": 60,
    "type": "numeric",
    "title": "Bonus: Stückaktien",
    "prompt": "Eine AG hat 72 Mio. € Grundkapital und 24 Mio. Stückaktien. Bestimmen Sie den rechnerischen Anteil je Stückaktie.",
    "fields": [
      {
        "label": "Rechnerischer Anteil (€)",
        "answer": 3
      }
    ],
    "solution": "72 Mio. € / 24 Mio. Stück = 3,00 € rechnerischer Anteil je Stückaktie."
  },
  {
    "id": "b2",
    "afb": 3,
    "xp": 90,
    "type": "single",
    "title": "Bonus: Nicht eingeforderte Einlagen",
    "prompt": "Bei einer Bareinlage wurden 25 % gezahlt. Die restlichen 75 % wurden noch nicht eingefordert. Wie ist dieser Rest in der Bilanz zu behandeln?",
    "options": [
      "Immer als Forderung auf der Aktivseite",
      "Offen vom gezeichneten Kapital absetzen",
      "Als Kapitalrücklage",
      "Als ARA"
    ],
    "answer": 1,
    "solution": "Nicht eingeforderte ausstehende Einlagen werden offen vom gezeichneten Kapital abgesetzt. Erst bereits eingeforderte, noch nicht gezahlte Einlagen sind Forderungen."
  },
  {
    "id": "b3",
    "afb": 3,
    "xp": 90,
    "type": "numeric",
    "title": "Bonus: Gründungskosten als Aufwand",
    "prompt": "Eine AG hat vor Gründungskosten 600.000 € Eigenkapital. Sie trägt 35.000 € Gründungskosten selbst als Aufwand. Wie hoch ist das Eigenkapital danach, wenn sonst nichts passiert?",
    "fields": [
      {
        "label": "Eigenkapital nach Aufwand (€)",
        "answer": 565000
      }
    ],
    "solution": "600.000 € − 35.000 € Aufwand = 565.000 € Eigenkapital. Die Gründungskosten werden nicht als ARA aktiviert."
  },
  {
    "id": "b4",
    "afb": 2,
    "xp": 60,
    "type": "multi",
    "title": "Bonus: Börsengang und Geldfluss",
    "prompt": "Welche Aussagen sind richtig?",
    "options": [
      "Bei neuen Aktien fließt der Ausgabebetrag grundsätzlich an die Gesellschaft.",
      "Beim Verkauf bestehender Aktien fließt der Erlös grundsätzlich an die verkaufenden Eigentümer.",
      "Jeder Börsengang erhöht automatisch das Grundkapital.",
      "Ein Börsengang kann neue Anteilseigner bringen."
    ],
    "answer": [
      0,
      1,
      3
    ],
    "solution": "Neue Aktien können der Gesellschaft Eigenkapital zuführen. Beim Verkauf von Altaktien erhält grundsätzlich der bisherige Eigentümer den Verkaufserlös. Ein Börsengang muss nicht zwingend mit einer Kapitalerhöhung verbunden sein."
  },
  {
    "id": "b5",
    "afb": 2,
    "xp": 90,
    "type": "balance",
    "title": "Bonusbilanz: nur Bareinlagen",
    "prompt": "Die PixelWorks AG hat 300.000 € Grundkapital. Zwei Aktionäre übernehmen je 150.000 € Nennwert. Aktionär A zahlt 25 % und 15.000 € Agio; Aktionär B zahlt 25 % ohne Agio. Beide Restnennwerte sind eingefordert. Erstellen Sie die Bilanz.",
    "accounts": [
      "Ausstehende Einlagen",
      "Liquide Mittel",
      "Gezeichnetes Kapital",
      "Kapitalrücklage"
    ],
    "solutionRows": {
      "aktiva": [
        [
          "Ausstehende Einlagen",
          225000
        ],
        [
          "Liquide Mittel",
          90000
        ]
      ],
      "passiva": [
        [
          "Gezeichnetes Kapital",
          300000
        ],
        [
          "Kapitalrücklage",
          15000
        ]
      ]
    },
    "solution": "A: Bareinzahlung = 37.500 € (25 % von 150.000 €) + 15.000 € (Agio) = 52.500 €; ausstehend = 112.500 €. B: Bareinzahlung = 37.500 € (25 % von 150.000 €); ausstehend = 112.500 €. Liquide Mittel = 90.000 €. Ausstehende Einlagen = 225.000 €. Grundkapital = 300.000 €. Kapitalrücklage = 15.000 €. Bilanzsumme = 315.000 €."
  },
  {
    "id": "b6",
    "afb": 2,
    "xp": 95,
    "type": "balance",
    "title": "Bonusbilanz: Sacheinlage mit Aufgeld",
    "prompt": "Die GreenRoof AG wird mit 250.000 € Grundkapital gegründet. 150.000 € Nennwert werden bar mit 20 % Agio übernommen; es wird nur die Mindesteinzahlung geleistet, der Rest ist eingefordert. Außerdem wird eine Maschine im Wert von 120.000 € eingebracht, die 120 % des dafür gewährten Nennwerts entspricht. Erstellen Sie die Bilanz.",
    "accounts": [
      "Maschine",
      "Ausstehende Einlagen",
      "Liquide Mittel",
      "Gezeichnetes Kapital",
      "Kapitalrücklage"
    ],
    "solutionRows": {
      "aktiva": [
        [
          "Maschine",
          120000
        ],
        [
          "Ausstehende Einlagen",
          112500
        ],
        [
          "Liquide Mittel",
          67500
        ]
      ],
      "passiva": [
        [
          "Gezeichnetes Kapital",
          250000
        ],
        [
          "Kapitalrücklage",
          50000
        ]
      ]
    },
    "solution": "Bareinlage: Agio = 30.000 € (20 % von 150.000 €); Einzahlung = 37.500 € (25 %) + 30.000 € = 67.500 €; ausstehend = 112.500 €. Maschine: Nennwert = 120.000 € / 1,20 = 100.000 €; Agio = 20.000 €. Grundkapital = 150.000 € + 100.000 € = 250.000 €. Kapitalrücklage = 30.000 € + 20.000 € = 50.000 €. Bilanzsumme = 300.000 €."
  },
  {
    "id": "b7",
    "afb": 3,
    "xp": 120,
    "type": "balance",
    "title": "Bonusbilanz: Formwechsel mit zwei Kapitalgebern",
    "prompt": "Die RepairTech KG besitzt 2.800.000 € Vermögen und 1.600.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Investor A übernimmt 400.000 € Nennwert mit 25 % Agio und leistet die Mindesteinzahlung; der Rest ist eingefordert. Investor B bringt ein Patent im Wert von 300.000 € zu 120 % ein. Die Gesellschafter tragen Gründungskosten privat. Erstellen Sie die vollständige Bilanz.",
    "accounts": [
      "Vermögen der KG",
      "Patent",
      "Ausstehende Einlagen",
      "Liquide Mittel",
      "Gezeichnetes Kapital",
      "Kapitalrücklage",
      "Fremdkapital"
    ],
    "solutionRows": {
      "aktiva": [
        [
          "Vermögen der KG",
          2800000
        ],
        [
          "Patent",
          300000
        ],
        [
          "Ausstehende Einlagen",
          300000
        ],
        [
          "Liquide Mittel",
          200000
        ]
      ],
      "passiva": [
        [
          "Gezeichnetes Kapital",
          1850000
        ],
        [
          "Kapitalrücklage",
          150000
        ],
        [
          "Fremdkapital",
          1600000
        ]
      ]
    },
    "solution": "Eigenkapital KG = 2.800.000 € − 1.600.000 € = 1.200.000 €. Investor A: Agio = 100.000 € (25 % von 400.000 €); Bareinzahlung = 100.000 € (25 % Nennwert) + 100.000 € Agio = 200.000 €; ausstehend = 300.000 €. Patent B: Nennwert = 300.000 € / 1,20 = 250.000 €; Agio = 50.000 €. Grundkapital = 1.200.000 € + 400.000 € + 250.000 € = 1.850.000 €. Kapitalrücklage = 100.000 € + 50.000 € = 150.000 €. Bilanzsumme = 3.600.000 €."
  },
  {
    "id": "b8",
    "afb": 3,
    "xp": 130,
    "type": "balance",
    "title": "Bonusbilanz: Fehlerquelle ARA und Aufwand",
    "prompt": "Die LogiBot KG besitzt 3.600.000 € Vermögen und 2.100.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Die Bank übernimmt 500.000 € Nennwert mit 20 % Agio, zahlt die Mindesteinzahlung, Rest eingefordert. Die AG zahlt 40.000 € Gründungskosten als Aufwand und 60.000 € Wartung im Voraus für die Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Bilanz.",
    "accounts": [
      "Vermögen der KG",
      "Ausstehende Einlagen",
      "Liquide Mittel",
      "ARA",
      "Gezeichnetes Kapital",
      "Kapitalrücklage",
      "Jahresfehlbetrag",
      "Fremdkapital"
    ],
    "solutionRows": {
      "aktiva": [
        [
          "Vermögen der KG",
          3600000
        ],
        [
          "Ausstehende Einlagen",
          375000
        ],
        [
          "Liquide Mittel",
          125000
        ],
        [
          "ARA",
          60000
        ]
      ],
      "passiva": [
        [
          "Gezeichnetes Kapital",
          2000000
        ],
        [
          "Kapitalrücklage",
          100000
        ],
        [
          "Jahresfehlbetrag",
          -40000
        ],
        [
          "Fremdkapital",
          2100000
        ]
      ]
    },
    "solution": "Eigenkapital KG = 3.600.000 € − 2.100.000 € = 1.500.000 €. Bank: Agio = 100.000 € (20 % von 500.000 €); Einzahlung = 125.000 € (25 % von 500.000 €) + 100.000 € (Agio) = 225.000 €; ausstehend = 375.000 €. Grundkapital = 1.500.000 € + 500.000 € = 2.000.000 €. Liquide Mittel = 225.000 € − 40.000 € (Gründungskosten) − 60.000 € (Vorauszahlung) = 125.000 €. ARA = 60.000 €. Jahresfehlbetrag = −40.000 €. Bilanzsumme = 4.160.000 €."
  }
];

export const SHOP = [
  {
    "id": "theme-sky",
    "type": "theme",
    "name": "Himmelblau",
    "cost": 150,
    "value": "sky",
    "preview": "🌤️"
  },
  {
    "id": "avatar-fox",
    "type": "avatar",
    "name": "Bilanz-Fuchs",
    "cost": 250,
    "value": "fox",
    "preview": "🦊"
  },
  {
    "id": "theme-sunset",
    "type": "theme",
    "name": "Abendrot",
    "cost": 400,
    "value": "sunset",
    "preview": "🌇"
  },
  {
    "id": "avatar-owl",
    "type": "avatar",
    "name": "Prüfungs-Eule",
    "cost": 500,
    "value": "owl",
    "preview": "🦉"
  },
  {
    "id": "outfit-cap",
    "type": "outfit",
    "name": "Finance-Cap",
    "cost": 650,
    "value": "cap",
    "preview": "🧢"
  },
  {
    "id": "theme-midnight",
    "type": "theme",
    "name": "Midnight",
    "cost": 800,
    "value": "midnight",
    "preview": "🌌"
  },
  {
    "id": "avatar-robot",
    "type": "avatar",
    "name": "AG-Bot",
    "cost": 900,
    "value": "robot",
    "preview": "🤖"
  },
  {
    "id": "outfit-crown",
    "type": "outfit",
    "name": "Bilanz-Krone",
    "cost": 1100,
    "value": "crown",
    "preview": "👑"
  }
];

export const AVATARS = {starter:"🙂",fox:"🦊",owl:"🦉",robot:"🤖"};
export const OUTFITS = {none:"",cap:"🧢",crown:"👑"};
