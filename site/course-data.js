export const COURSE_META = {
  title: "AG-Gründung sicher beherrschen",
  subtitle: "Von der Satzung bis zur vollständigen Gründungsbilanz",
  totalRegular: 36,
  redThread: "MotionWerk KG → MotionWerk AG"
};

export const GLOSSARY = [
  ["Aktiengesellschaft (AG)", "Eine **Kapitalgesellschaft** mit eigenem Grundkapital, das in Aktien zerlegt ist."],
  ["Grundkapital", "Das **satzungsmäßige Kapital** der AG. Es beträgt mindestens **50.000 €**."],
  ["Gezeichnetes Kapital", "Bilanzposten für das **Grundkapital** der AG."],
  ["Nennbetragsaktie", "Aktie mit einem **festen Nennbetrag**. Die Summe der Nennbeträge ergibt das Grundkapital."],
  ["Stückaktie", "Aktie **ohne Nennwert**. Jede Stückaktie verkörpert den gleichen rechnerischen Anteil am Grundkapital."],
  ["Agio", "**Aufgeld**: Betrag über dem Nennwert bzw. rechnerischen Anteil. Er fließt in die Kapitalrücklage."],
  ["Kapitalrücklage", "Eigenkapital aus gesetzlich bestimmten Zuzahlungen, insbesondere aus **Agien**."],
  ["Bareinlage", "Einlage in **Geld**. Vor Eintragung sind mindestens 25 % des Nennwerts plus das volle Agio zu leisten."],
  ["Sacheinlage", "Einlage eines **Vermögensgegenstands**, z. B. Patent oder Maschine. Sie ist vollständig einzubringen."],
  ["Ausstehende Einlage", "Noch nicht gezahlter Teil einer zugesagten Einlage. Ist er bereits eingefordert, wird er als **Forderung** ausgewiesen."],
  ["ARA", "**Aktive Rechnungsabgrenzung**: Vorauszahlungen für Aufwand, der wirtschaftlich eine bestimmte Zeit nach dem Bilanzstichtag betrifft."],
  ["Formwechsel", "Die Gesellschaft bleibt derselbe **Rechtsträger**; nur die Rechtsform ändert sich. Wirksam mit Handelsregistereintragung."],
  ["Gründungsbilanz", "Bilanz unmittelbar nach Entstehung bzw. Wirksamwerden der AG-Rechtsform. Sie zeigt Vermögen, Schulden und Eigenkapital."],
  ["Jahresfehlbetrag", "Negatives Jahresergebnis. Trägt die AG Gründungskosten als Aufwand, kann dadurch ein **Verlust** entstehen."],
  ["Komplementär", "Gesellschafter einer KG mit **persönlicher Haftung**."],
  ["Kommanditist", "Gesellschafter einer KG mit grundsätzlich auf die Haftsumme **beschränkter Haftung**."]
];

const motionIntro = `
<div class="case-banner">
  <div class="case-logo">🚲</div>
  <div><strong>Roter Faden: MotionWerk KG</strong><br>
  Die MotionWerk KG fertigt in Leipzig intelligente Antriebsmodule für Lastenräder. Die Nachfrage steigt, eine neue Montagelinie soll finanziert werden. Die Gesellschafterin Aylin Demir und der Gesellschafter Jonas Richter prüfen deshalb den Formwechsel in eine AG. Dieser Fall begleitet Sie durch den gesamten Kurs.</div>
</div>`;

export const CHAPTERS = [
  {
    id:"c1", num:1, icon:"🏢", title:"Die AG verstehen", subtitle:"Rechtsform, Aktien und Eigenkapitalbegriffe",
    intro: `${motionIntro}
      <div class="definition"><strong>Definition:</strong> Die <strong>Aktiengesellschaft (AG)</strong> ist eine Kapitalgesellschaft. Sie besitzt ein festes <strong>Grundkapital</strong>, das in Aktien zerlegt ist. Eine Börsennotierung ist möglich, aber nicht erforderlich.</div>
      <div class="grid3">
        <div class="mini-card"><div class="icon">🛡️</div><strong>Haftung</strong><br>Grundsätzlich haftet das Gesellschaftsvermögen; Aktionäre haften nicht persönlich.</div>
        <div class="mini-card"><div class="icon">💶</div><strong>Grundkapital</strong><br>Mindestens 50.000 €. In der Bilanz: <strong>gezeichnetes Kapital</strong>.</div>
        <div class="mini-card"><div class="icon">📈</div><strong>Aktien</strong><br>Nennbetrags- oder Stückaktien. Aktien sind grundsätzlich übertragbar.</div>
      </div>
      <h3>Nennbetragsaktien und Stückaktien</h3>
      <div class="grid2">
        <div class="callout"><strong>Nennbetragsaktie:</strong> besitzt einen Nennbetrag. Beispiel: 100.000 Aktien × 5 € = 500.000 € Grundkapital.</div>
        <div class="callout"><strong>Stückaktie:</strong> kein Nennwert. Rechnerischer Anteil = Grundkapital ÷ Anzahl Stückaktien.</div>
      </div>
      <div class="formula">rechnerischer Anteil je Stückaktie = Grundkapital / Anzahl der Stückaktien</div>`,
    tasks:[
      {id:"t1",afb:1,xp:30,type:"single",title:"Grundwissen AG",prompt:"Welche Aussage trifft auf eine Aktiengesellschaft zu?",options:["Eine AG muss zwingend börsennotiert sein.","Das Grundkapital beträgt mindestens 50.000 €.","Aktionäre haften immer persönlich.","Eine AG darf keine Sacheinlagen erhalten."],answer:1,solution:"Das Grundkapital einer AG beträgt mindestens 50.000 €. Eine Börsennotierung ist keine Voraussetzung.",hint:"Achten Sie auf die Rechtsformmerkmale, nicht auf den Börsengang."},
      {id:"t2",afb:2,xp:45,type:"multi",title:"Welche Aussagen stimmen?",prompt:"Wählen Sie alle richtigen Aussagen aus.",options:["Gezeichnetes Kapital entspricht dem Grundkapital.","Stückaktien haben einen festen Nennwert.","Aktionäre sind am Grundkapital beteiligt.","Eine AG ist eine Kapitalgesellschaft.","Jede AG muss ihre Aktien an einer Börse handeln lassen."],answer:[0,2,3],solution:"Richtig sind: gezeichnetes Kapital = Grundkapital; Aktionäre sind beteiligt; die AG ist eine Kapitalgesellschaft. Stückaktien haben keinen Nennwert und eine Börsennotierung ist nicht zwingend."},
      {id:"t3",afb:2,xp:45,type:"matching",title:"Begriffe sicher zuordnen",prompt:"Ordnen Sie jedem Begriff die passende Aussage zu.",pairs:[
        ["Grundkapital","satzungsmäßiges Kapital der AG"],["Kapitalrücklage","enthält insbesondere Agien"],["Stückaktie","Aktie ohne Nennwert"],["Gewinnrücklage","einbehaltene Gewinne früherer Perioden"]
      ],solution:"Grundkapital → satzungsmäßiges Kapital; Kapitalrücklage → insbesondere Agien; Stückaktie → ohne Nennwert; Gewinnrücklage → einbehaltene Gewinne."},
      {id:"t4",afb:3,xp:70,type:"free",title:"Börsennotierung erklären",prompt:"Die Geschäftsführung der MotionWerk KG sagt: „Wenn wir eine AG werden, müssen wir automatisch an die Börse.“ Erklären Sie knapp, warum diese Aussage nicht stimmt.",placeholder:"Formulieren Sie eine kurze fachliche Erklärung.",solution:"Eine AG kann auch nicht börsennotiert sein. Die Rechtsform AG entsteht durch die aktienrechtliche Gründung bzw. den wirksamen Formwechsel und die Handelsregistereintragung. Ein Börsengang ist ein zusätzlicher Schritt, aber keine Voraussetzung für die Rechtsform AG."}
    ]
  },
  {
    id:"c2", num:2, icon:"🧭", title:"Von der Idee zur AG", subtitle:"Errichtung, Organe und Handelsregister",
    intro:`${motionIntro}
      <h3>Die Schritte im Überblick</h3>
      <div class="diagram"><div class="step">1 Satzung / Beschluss</div><div class="arrow">→</div><div class="step">2 Aktien übernehmen</div><div class="arrow">→</div><div class="step">3 Bericht & Prüfung</div><div class="arrow">→</div><div class="step">4 Kapital aufbringen</div><div class="arrow">→</div><div class="step">5 Organe</div><div class="arrow">→</div><div class="step">6 Anmeldung & Eintragung</div></div>
      <div class="definition"><strong>Vor Eintragung:</strong> Die AG ist noch keine juristische Person. Wer in ihrem Namen handelt, haftet persönlich. <strong>Mit Eintragung</strong> entsteht die AG als juristische Person.</div>
      <div class="grid2">
        <div class="callout"><strong>Erster Aufsichtsrat & Abschlussprüfer:</strong> werden von den Gründern bestellt.</div>
        <div class="callout"><strong>Erster Vorstand:</strong> wird anschließend vom Aufsichtsrat bestellt.</div>
      </div>
      <div class="callout warn"><strong>Formwechsel KG → AG:</strong> Der Rechtsträger bleibt bestehen. Die neue Rechtsform wird erst mit der Eintragung in das Handelsregister wirksam.</div>`,
    tasks:[
      {id:"t5",afb:1,xp:35,type:"order",title:"Ablauf ordnen",prompt:"Bringen Sie die Schritte in eine sinnvolle Reihenfolge.",items:["Satzung bzw. Formwechselbeschluss","Übernahme bzw. Zuteilung der Aktien","Gründungsbericht und Gründungsprüfung","Aufbringung des Kapitals","Bestellung der Organe","Anmeldung und Eintragung ins Handelsregister"],answer:[0,1,2,3,4,5],solution:"Satzung/Beschluss → Aktienübernahme/Zuteilung → Bericht/Prüfung → Kapitalaufbringung → Organe → Anmeldung/Eintragung."},
      {id:"t6",afb:2,xp:45,type:"sort",title:"Wer macht was?",prompt:"Ordnen Sie die Aussagen der richtigen Kategorie zu.",buckets:["Gründer","Aufsichtsrat","Handelsregister / Eintragung"],items:[
        ["erster Aufsichtsrat wird bestellt",0],["erster Vorstand wird bestellt",1],["AG entsteht als juristische Person",2],["Eintragung hat konstitutive Wirkung",2],["Abschlussprüfer wird zunächst bestellt",0]
      ],solution:"Gründer: erster Aufsichtsrat und Abschlussprüfer. Aufsichtsrat: erster Vorstand. Eintragung: AG entsteht; konstitutive Wirkung."},
      {id:"t7",afb:2,xp:45,type:"single",title:"Wann wird der Formwechsel wirksam?",prompt:"Die MotionWerk KG beschließt am 5. Mai den Formwechsel. Die Eintragung erfolgt am 20. Mai. Ab wann gilt die neue Rechtsform AG?",options:["ab 5. Mai","ab 20. Mai","erst mit dem ersten Jahresabschluss","erst mit einem Börsengang"],answer:1,solution:"Der Formwechsel wird mit der Handelsregistereintragung wirksam. Bis dahin bleibt der Geschäftsbetrieb der KG bestehen."},
      {id:"t8",afb:3,xp:70,type:"free",title:"Formwechsel beurteilen",prompt:"MotionWerk wächst stark und benötigt zusätzliches Eigenkapital. Aylin möchte ihr persönliches Haftungsrisiko begrenzen, zugleich aber Einfluss behalten. Beurteilen Sie den Formwechsel in eine AG: Nennen Sie mindestens zwei Vorteile und zwei mögliche Nachteile.",placeholder:"Strukturieren Sie Ihre Beurteilung in Vorteile und Nachteile.",solution:"Mögliche Vorteile: erleichterte Eigenkapitalaufnahme durch Aktien; Haftungsbeschränkung der Aktionäre; Trennung von Eigentum und Unternehmensleitung; professionellere Organisationsstruktur. Mögliche Nachteile: höhere Gründungs- und Verwaltungskosten; strengere Publizitäts- und Organisationspflichten; bei Ausgabe neuer Aktien kann der Einfluss bisheriger Eigentümer verwässert werden. Einfluss kann durch einen ausreichend hohen Stimmrechtsanteil erhalten bleiben."}
    ]
  },
  {
    id:"c3", num:3, icon:"🪙", title:"Aktien, Agio und Einlagen rechnen", subtitle:"Die Rechenbasis jeder Gründungsbilanz",
    intro:`${motionIntro}
      <div class="definition"><strong>Gesetzliche Mindesteinzahlung bei Bareinlagen:</strong> mindestens <strong>25 % des Nennwerts</strong> bzw. geringsten Ausgabebetrags plus <strong>vollständiges Agio</strong>.</div>
      <div class="formula">Bareinzahlung = 25 % × Nennwert + vollständiges Agio</div>
      <div class="formula">bereits eingeforderte ausstehende Einlage = 75 % × Nennwert</div>
      <div class="definition"><strong>Sacheinlage:</strong> muss vollständig eingebracht werden. Liegt der Wert über dem Nennwert der ausgegebenen Aktien, ist die Differenz ein <strong>Agio</strong>.</div>
      <div class="grid2">
        <div class="mini-card"><strong>Beispiel Bar</strong><br>Nennwert 80.000 €, Agio 20.000 € → sofort 20.000 € + 20.000 € = 40.000 €.</div>
        <div class="mini-card"><strong>Beispiel Patent</strong><br>Patentwert 120.000 € = 120 % des Nennwerts → Nennwert 100.000 €, Agio 20.000 €.</div>
      </div>`,
    tasks:[
      {id:"t9",afb:1,xp:35,type:"numeric",title:"Mindesteinzahlung abrufen",prompt:"Eine Bank übernimmt Aktien mit 200.000 € Nennwert und 40.000 € Agio. Wie hoch ist die gesetzliche Mindesteinzahlung?",fields:[{label:"Mindesteinzahlung in €",answer:90000,tolerance:0}],solution:"25 % von 200.000 € = 50.000 €. Hinzu kommt das vollständige Agio von 40.000 €. Mindesteinzahlung = 90.000 €."},
      {id:"t10",afb:2,xp:50,type:"numeric",title:"Bareinlage zerlegen",prompt:"Ein Investor übernimmt 50.000 Aktien zu 2 € Nennwert mit 30 % Agio. Der restliche Nennwert ist bereits eingefordert.",fields:[
        {label:"Nennwert gesamt (€)",answer:100000},{label:"Agio (€)",answer:30000},{label:"Bareinzahlung sofort (€)",answer:55000},{label:"Ausstehende Einlage (€)",answer:75000}
      ],solution:"Nennwert = 50.000 × 2 € = 100.000 €. Agio = 30 % von 100.000 € = 30.000 €. Sofort = 25.000 € (25 %) + 30.000 € Agio = 55.000 €. Ausstehend = 75 % von 100.000 € = 75.000 €."},
      {id:"t11",afb:2,xp:50,type:"numeric",title:"Sacheinlage mit Agio",prompt:"Eine Ingenieurin bringt ein Patent im Wert von 187.500 € ein. Die Aktien werden zu 125 % des Nennwerts ausgegeben. Nennwert je Aktie: 5 €.",fields:[
        {label:"Nennwertanteil (€)",answer:150000},{label:"Agio (€)",answer:37500},{label:"Aktienanzahl",answer:30000}
      ],solution:"Nennwertanteil = 187.500 € / 1,25 = 150.000 €. Agio = 187.500 € − 150.000 € = 37.500 €. Aktienzahl = 150.000 € / 5 € = 30.000 Aktien."},
      {id:"t12",afb:3,xp:75,type:"numeric",title:"MotionWerk: Kapitalstruktur ableiten",prompt:"Aylin erhält Aktien zum Nennwert von 600.000 €, Jonas 400.000 €. Eine Bank übernimmt 80.000 Aktien zu 5 € Nennwert mit 25 % Agio. Eine Ingenieurin bringt ein Patent im Wert von 150.000 € ein; Ausgabepreis 125 % des Nennwerts.",fields:[
        {label:"Nennwert Bank (€)",answer:400000},{label:"Agio Bank (€)",answer:100000},{label:"Nennwert Patent (€)",answer:120000},{label:"Agio Patent (€)",answer:30000},{label:"Grundkapital gesamt (€)",answer:1520000},{label:"Kapitalrücklage gesamt (€)",answer:130000}
      ],solution:"Bank: 80.000 × 5 € = 400.000 € Nennwert; 25 % Agio = 100.000 €. Patent: 150.000 € / 1,25 = 120.000 € Nennwert; Agio = 30.000 €. Grundkapital = 600.000 + 400.000 + 400.000 + 120.000 = 1.520.000 €. Kapitalrücklage = 100.000 + 30.000 = 130.000 €."}
    ]
  },
  {
    id:"c4", num:4, icon:"⚖️", title:"Die Gründungsbilanz erstellen", subtitle:"Aktiva, Passiva und die vollständige Kontrollrechnung",
    intro:`${motionIntro}
      <h3>Das 6-Schritte-Schema</h3>
      <div class="diagram"><div class="step">1 Sachverhalt markieren</div><div class="arrow">→</div><div class="step">2 Nennwert & Agio</div><div class="arrow">→</div><div class="step">3 Einzahlungen</div><div class="arrow">→</div><div class="step">4 Vermögen/Schulden</div><div class="arrow">→</div><div class="step">5 Bilanz</div><div class="arrow">→</div><div class="step">6 Summe prüfen</div></div>
      <div class="grid2">
        <div class="callout"><strong>Aktiva:</strong> Anlagevermögen, Umlaufvermögen, Patent, liquide Mittel, bereits eingeforderte ausstehende Einlagen, ARA.</div>
        <div class="callout"><strong>Passiva:</strong> gezeichnetes Kapital, Kapitalrücklage, ggf. Jahresfehlbetrag, Fremdkapital/Verbindlichkeiten.</div>
      </div>
      <div class="definition"><strong>ARA:</strong> nur für Vorauszahlungen, die Aufwand für eine bestimmte Zeit <strong>nach</strong> dem Bilanzstichtag darstellen, z. B. vorausbezahlte Versicherung oder Miete. <strong>Gründungskosten sind keine ARA.</strong></div>
      <div class="callout warn"><strong>Wichtig:</strong> Nicht eingeforderte ausstehende Einlagen werden vom gezeichneten Kapital abgesetzt. Nur bereits eingeforderte, noch nicht gezahlte Einlagen werden als Forderung auf der Aktivseite gezeigt.</div>`,
    tasks:[
      {id:"t13",afb:1,xp:35,type:"sort",title:"Aktiva oder Passiva?",prompt:"Ordnen Sie die Bilanzposten zu.",buckets:["Aktiva","Passiva"],items:[
        ["Patent",0],["Kapitalrücklage",1],["Liquide Mittel",0],["Gezeichnetes Kapital",1],["ARA",0],["Fremdkapital",1],["bereits eingeforderte ausstehende Einlagen",0]
      ],solution:"Aktiva: Patent, liquide Mittel, ARA, bereits eingeforderte ausstehende Einlagen. Passiva: gezeichnetes Kapital, Kapitalrücklage, Fremdkapital."},
      {id:"t14",afb:2,xp:45,type:"sort",title:"ARA oder nicht?",prompt:"Ordnen Sie die Sachverhalte richtig ein.",buckets:["ARA","Aufwand / keine ARA","Kein Aufwand der AG"],items:[
        ["Versicherungsprämie im Voraus für die Zeit nach dem Bilanzstichtag",0],["Notarkosten der Gründung, von der AG getragen",1],["Gründungskosten, privat von den Gesellschaftern getragen",2],["Miete für die kommenden drei Monate im Voraus",0]
      ],solution:"ARA: vorausbezahlte Versicherung und Miete für künftige Zeit. Von der AG getragene Gründungskosten sind Aufwand. Privat getragene Gründungskosten erscheinen nicht in der AG-Bilanz."},
      {id:"t15",afb:2,xp:55,type:"numeric",title:"Einfache Gründungsbilanz vorbereiten",prompt:"Eine AG hat 100.000 € Patent, 70.000 € Bank, 30.000 € bereits eingeforderte ausstehende Einlagen und 10.000 € ARA. Passiva: Grundkapital 180.000 €, Kapitalrücklage 30.000 €, kein Fremdkapital. Prüfen Sie die Bilanzsumme.",fields:[{label:"Summe Aktiva (€)",answer:210000},{label:"Summe Passiva (€)",answer:210000}],solution:"Aktiva = 100.000 + 70.000 + 30.000 + 10.000 = 210.000 €. Passiva = 180.000 + 30.000 = 210.000 €. Die Bilanz ist ausgeglichen."},
      {id:"t16",afb:3,xp:90,type:"balance",title:"MotionWerk: vollständige Gründungsbilanz",prompt:"Die MotionWerk AG übernimmt aus der KG 2.400.000 € Vermögen und 1.400.000 € Fremdkapital. Zusätzlich: Patent 150.000 €, Bank zeichnet 400.000 € Nennwert mit 100.000 € Agio und zahlt die Mindesteinzahlung; 300.000 € sind bereits eingefordert und noch offen. 50.000 € Versicherungsprämie werden im Voraus gezahlt. Die bisherigen Gesellschafter erhalten 1.000.000 € Nennwert. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",2400000],["Patent",150000],["Ausstehende Einlagen",300000],["Liquide Mittel",150000],["ARA",50000]],
        passiva:[["Gezeichnetes Kapital",1520000],["Kapitalrücklage",130000],["Fremdkapital",1400000]]
      },solution:"Bareinzahlung Bank = 100.000 € (25 % von 400.000 €) + 100.000 € Agio = 200.000 €. Liquide Mittel = 200.000 € − 50.000 € Vorauszahlung = 150.000 €. Grundkapital = 1.000.000 € Altgesellschafter + 400.000 € Bank + 120.000 € Patent = 1.520.000 €. Kapitalrücklage = 100.000 € Bank + 30.000 € Patent = 130.000 €. Bilanzsumme = 3.050.000 €."}
    ]
  },
  {
    id:"c5", num:5, icon:"🔁", title:"KG → AG: Formwechsel mit Bilanz", subtitle:"Eigenkapital übernehmen und die neue Kapitalstruktur aufbauen",
    intro:`${motionIntro}
      <div class="definition"><strong>Formwechsel:</strong> Die KG wird nicht aufgelöst und neu übertragen. Der <strong>Rechtsträger bleibt derselbe</strong>; Vermögen und Schulden bestehen fort. Mit der Handelsregistereintragung gilt die neue Rechtsform AG.</div>
      <div class="formula">Eigenkapital KG = Vermögen KG − Fremdkapital KG</div>
      <div class="formula">Grundkapital beim Formwechsel ≤ vorhandenes Eigenkapital / Reinvermögen der KG</div>
      <h3>Typischer Rechenweg</h3>
      <ol>
        <li>Vermögen und Fremdkapital der KG bestimmen.</li>
        <li>Eigenkapital und Beteiligungsanteile der bisherigen Gesellschafter ermitteln.</li>
        <li>Diese Nennwertanteile in Aktien umrechnen.</li>
        <li>Neue Investoren oder Sacheinlagen als anschließende Kapitalerhöhung getrennt berechnen.</li>
        <li>Alle fortbestehenden Vermögens- und Fremdkapitalposten in die Bilanz übernehmen.</li>
      </ol>`,
    tasks:[
      {id:"t17",afb:1,xp:35,type:"truefalse",title:"Formwechsel: richtig oder falsch?",prompt:"Bewerten Sie die Aussagen.",statements:[
        ["Beim Formwechsel bleibt der Rechtsträger bestehen.",true],["Die AG-Rechtsform gilt bereits mit dem bloßen Gesellschafterbeschluss.",false],["Die Schulden der KG verschwinden durch den Formwechsel.",false],["Das Grundkapital muss mindestens 50.000 € betragen.",true]
      ],solution:"Richtig: Rechtsträger bleibt bestehen; Grundkapital mindestens 50.000 €. Falsch: Wirksamkeit erst mit Eintragung; Schulden bestehen fort."},
      {id:"t18",afb:2,xp:55,type:"numeric",title:"Eigenkapital aus Finanzierungsquote",prompt:"Einem Beteiligungsbereich der MotionWerk KG sind 1.500.000 € Vermögen zuzurechnen. Dieser Bereich ist zu 60 % fremdfinanziert. Nennwert je Aktie: 5 €.",fields:[
        {label:"Fremdkapitalanteil (€)",answer:900000},{label:"Eigenkapitalanteil (€)",answer:600000},{label:"Aktienanzahl",answer:120000}
      ],solution:"Fremdkapital = 1.500.000 × 60 % = 900.000 €. Eigenkapital = 1.500.000 × 40 % = 600.000 €. Aktienzahl = 600.000 / 5 = 120.000 Aktien."},
      {id:"t19",afb:2,xp:70,type:"balance",title:"Formwechsel + Kapitalerhöhung",prompt:"Eine KG hat 900.000 € Anlagevermögen, 300.000 € Umlaufvermögen und 500.000 € Fremdkapital. Das Eigenkapital von 700.000 € wird vollständig in Grundkapital umgewandelt. Unmittelbar danach zeichnet eine Bank 100.000 € Nennwert mit 20.000 € Agio; sie zahlt 45.000 €, 75.000 € sind eingefordert und offen. Keine weiteren Zahlungen. Erstellen Sie die Bilanz.",accounts:["Anlagevermögen KG","Umlaufvermögen KG","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Anlagevermögen KG",900000],["Umlaufvermögen KG",300000],["Ausstehende Einlagen",75000],["Liquide Mittel",45000]],
        passiva:[["Gezeichnetes Kapital",800000],["Kapitalrücklage",20000],["Fremdkapital",500000]]
      },solution:"Eigenkapital KG = 1.200.000 € Vermögen − 500.000 € Fremdkapital = 700.000 €. Nach Kapitalerhöhung: Grundkapital = 700.000 + 100.000 = 800.000 €. Kapitalrücklage = 20.000 €. Bilanzsumme = 1.320.000 €."},
      {id:"t20",afb:3,xp:80,type:"free",title:"Sachverhalt fachlich strukturieren",prompt:"Die Gesellschafter sagen: „Wir übertragen beim Formwechsel das Vermögen der KG auf eine neue AG und zahlen danach die alten Schulden aus.“ Erklären Sie, wie der Vorgang fachlich korrekt zu beschreiben ist und welche Folgen das für die Gründungsbilanz hat.",placeholder:"Erklären Sie Rechtsträger, Vermögen, Schulden und Bilanzwirkung.",solution:"Beim Formwechsel bleibt derselbe Rechtsträger bestehen; es findet keine Vermögensübertragung auf eine andere Gesellschaft statt. Mit der Handelsregistereintragung ändert sich die Rechtsform zur AG. Die Vermögenswerte und Schulden der KG bestehen fort und werden in der Bilanz der AG weitergeführt. Das vorhandene Eigenkapital dient zur Deckung des Grundkapitals; zusätzliche Kapitalzufuhr ist als gesonderte Kapitalmaßnahme zu erfassen."}
    ]
  },
  {
    id:"c6", num:6, icon:"🏆", title:"Bilanz-Meisterschaft", subtitle:"Komplexe Fälle selbstständig vollständig lösen",
    intro:`${motionIntro}
      <div class="callout ok"><strong>Prüfstrategie:</strong> Schreiben Sie nicht sofort die Bilanz. Erstellen Sie zuerst eine Rechentabelle: <em>Nennwert → Aktienzahl → Agio → Bareinzahlung → ausstehend</em>. Erst danach bauen Sie Aktiva und Passiva auf.</div>
      <h3>Kontrollfragen vor der Abgabe</h3>
      <div class="grid2">
        <div class="mini-card">✓ Ist jedes Agio in der Kapitalrücklage?</div><div class="mini-card">✓ Wurde das volle Agio eingezahlt?</div>
        <div class="mini-card">✓ Sind nur bereits eingeforderte Restbeträge Forderungen?</div><div class="mini-card">✓ Ist ARA wirklich eine Vorauszahlung für spätere Zeit?</div>
        <div class="mini-card">✓ Sind Gründungskosten korrekt behandelt?</div><div class="mini-card">✓ Stimmen Bilanzsumme Aktiva und Passiva?</div>
      </div>`,
    tasks:[
      {id:"t21",afb:1,xp:40,type:"numeric",title:"MotionWerk: Rechentabelle",prompt:"Die Bank übernimmt 80.000 Aktien zu 5 € Nennwert mit 25 % Agio. Das Patent hat 150.000 € Wert und entspricht 125 % des Nennwerts. Ermitteln Sie die Werte, bevor Sie eine Bilanz aufstellen.",fields:[
        {label:"Bank Nennwert (€)",answer:400000},{label:"Bank Agio (€)",answer:100000},{label:"Bank Bareinzahlung (€)",answer:200000},{label:"Bank ausstehend (€)",answer:300000},{label:"Patent Nennwert (€)",answer:120000},{label:"Patent Agio (€)",answer:30000}
      ],solution:"Bank: Nennwert 80.000 × 5 = 400.000 €; Agio 25 % = 100.000 €; Bareinzahlung 25 % von 400.000 = 100.000 € + 100.000 € Agio = 200.000 €; ausstehend 300.000 €. Patent: 150.000 / 1,25 = 120.000 € Nennwert; Agio 30.000 €."},
      {id:"t22",afb:2,xp:80,type:"balance",title:"Gründungskosten durch die AG",prompt:"Wie Aufgabe zuvor, aber die AG trägt zusätzlich 60.000 € Gründungskosten als Aufwand und zahlt 40.000 € Versicherung für die Zeit nach dem Bilanzstichtag im Voraus. Aus der KG kommen 2.400.000 € Vermögen und 1.400.000 € Fremdkapital; Altgesellschafter-Nennwert 1.000.000 €. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",2400000],["Patent",150000],["Ausstehende Einlagen",300000],["Liquide Mittel",100000],["ARA",40000]],
        passiva:[["Gezeichnetes Kapital",1520000],["Kapitalrücklage",130000],["Jahresfehlbetrag",-60000],["Fremdkapital",1400000]]
      },solution:"Bareinzahlung Bank 200.000 €. Liquide Mittel = 200.000 − 60.000 Gründungskosten − 40.000 Vorauszahlung = 100.000 €. ARA = 40.000 €. Gründungskosten sind Aufwand → Jahresfehlbetrag −60.000 €. Bilanzsumme = 2.990.000 €."},
      {id:"t23",afb:2,xp:80,type:"numeric",title:"Komplexer Kapitalfall",prompt:"Die UrbanPulse KG hat Vermögen 5.000.000 €, davon 55 % fremdfinanziert. Das Eigenkapital wird vollständig Grundkapital. Nennwert je Aktie 10 €. Zusätzlich: Patent 360.000 € zu 120 % des Nennwerts; Bank-Ausgabebetrag 780.000 € zu 130 % des Nennwerts. Bank zahlt nur Mindesteinzahlung; Rest ist eingefordert.",fields:[
        {label:"Eigenkapital KG (€)",answer:2250000},{label:"Patent Nennwert (€)",answer:300000},{label:"Patent Agio (€)",answer:60000},{label:"Bank Nennwert (€)",answer:600000},{label:"Bank Agio (€)",answer:180000},{label:"Bank Bareinzahlung (€)",answer:330000},{label:"Bank ausstehend (€)",answer:450000},{label:"Grundkapital gesamt (€)",answer:3150000},{label:"Kapitalrücklage gesamt (€)",answer:240000}
      ],solution:"EK KG = 5.000.000 × 45 % = 2.250.000 €. Patent: 360.000 / 1,20 = 300.000 € Nennwert; Agio 60.000 €. Bank: 780.000 / 1,30 = 600.000 € Nennwert; Agio 180.000 €. Bareinzahlung = 150.000 € (25 %) + 180.000 € = 330.000 €. Ausstehend = 450.000 €. Grundkapital = 2.250.000 + 300.000 + 600.000 = 3.150.000 €. Kapitalrücklage = 240.000 €."},
      {id:"t24",afb:3,xp:120,type:"balance",title:"Finale: vollständige Gründungsbilanz",prompt:"UrbanPulse: Vermögen KG 5.000.000 €, Fremdkapital 2.750.000 €. Patent 360.000 €. Bank: Nennwert 600.000 €, Agio 180.000 €, Bareinzahlung 330.000 €, ausstehend 450.000 €. Grundkapital 3.150.000 €, Kapitalrücklage 240.000 €. Die AG zahlt 90.000 € Gründungskosten als Aufwand und 60.000 € Miete für die Zeit nach dem Bilanzstichtag im Voraus. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",5000000],["Patent",360000],["Ausstehende Einlagen",450000],["Liquide Mittel",180000],["ARA",60000]],
        passiva:[["Gezeichnetes Kapital",3150000],["Kapitalrücklage",240000],["Jahresfehlbetrag",-90000],["Fremdkapital",2750000]]
      },solution:"Liquide Mittel = 330.000 € Bareinzahlung − 90.000 € Gründungskosten − 60.000 € Vorauszahlung = 180.000 €. ARA = 60.000 €. Gründungskosten → Jahresfehlbetrag −90.000 €. Aktiva = 5.000.000 + 360.000 + 450.000 + 180.000 + 60.000 = 6.050.000 €. Passiva = 3.150.000 + 240.000 − 90.000 + 2.750.000 = 6.050.000 €."}
    ]
  }
  ,{
    id:"c7", num:7, icon:"🧱", title:"Gründungsbilanz-Werkstatt", subtitle:"Viele vollständige Bilanzen – vom Grundfall bis zum Prüfungsniveau",
    intro:`${motionIntro}
      <div class="callout ok"><strong>Ziel dieses Kapitels:</strong> Sie erstellen immer wieder <strong>vollständige Gründungsbilanzen</strong>. Rechnen Sie zuerst alle Beteiligungen und Einzahlungen aus und tragen Sie erst danach die Bilanzposten ein.</div>
      <h3>Arbeitsroutine für jede vollständige Gründungsbilanz</h3>
      <div class="diagram"><div class="step">1 Vermögen & Schulden der KG</div><div class="arrow">→</div><div class="step">2 Eigenkapital / Nennwerte</div><div class="arrow">→</div><div class="step">3 Agio</div><div class="arrow">→</div><div class="step">4 Einzahlung / ausstehend</div><div class="arrow">→</div><div class="step">5 ARA / Aufwand</div><div class="arrow">→</div><div class="step">6 Bilanz & Kontrolle</div></div>
      <div class="grid2">
        <div class="mini-card"><strong>Aktiva prüfen</strong><br>Übernommenes Vermögen, Sacheinlagen, liquide Mittel, eingeforderte ausstehende Einlagen und ggf. ARA.</div>
        <div class="mini-card"><strong>Passiva prüfen</strong><br>Gezeichnetes Kapital, Kapitalrücklage, Fremdkapital und ggf. Jahresfehlbetrag bzw. nicht eingeforderte Einlagen als Abzug.</div>
      </div>
      <div class="callout warn"><strong>Kontrollregel:</strong> Eine Bilanz ist erst fertig, wenn <strong>Summe Aktiva = Summe Passiva</strong> gilt. Nutzen Sie die Differenz nicht zum „Ausgleichen“, sondern suchen Sie den sachlichen Fehler.</div>`,
    tasks:[
      {id:"t25",afb:1,xp:55,type:"balance",title:"Grundfall: Bar- und Sacheinlage",prompt:"Die CityCharge AG wird mit 120.000 € Grundkapital gegründet. Gründerin A übernimmt 80.000 € Nennwert als Bareinlage und leistet 25 %; die restlichen 75 % sind bereits eingefordert. Gründer B bringt ein Patent im Wert von 40.000 € zum Nennwert ein. Es gibt kein Agio und keine weiteren Geschäftsvorfälle. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Patent","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital"],solutionRows:{
        aktiva:[["Patent",40000],["Ausstehende Einlagen",60000],["Liquide Mittel",20000]],
        passiva:[["Gezeichnetes Kapital",120000]]
      },solution:"Nennwert Bareinlage = 80.000 € (Gründerin A).\nMindesteinzahlung = 20.000 € (25 % von 80.000 €).\nAusstehende, bereits eingeforderte Einlage = 60.000 € (75 % von 80.000 €).\nSacheinlage = 40.000 € (Patent von Gründer B).\nGezeichnetes Kapital = 80.000 € (A) + 40.000 € (B) = 120.000 €.\nBilanzsumme = 40.000 € (Patent) + 60.000 € (ausstehende Einlage) + 20.000 € (liquide Mittel) = 120.000 €."},

      {id:"t26",afb:1,xp:55,type:"balance",title:"Grundfall mit Agio",prompt:"Die FreshBox AG besitzt 200.000 € Grundkapital. Eine Gründerin übernimmt 100.000 € Nennwert als Bareinlage mit 10 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Ein zweiter Gründer bringt eine Maschine im Wert von 100.000 € zum Nennwert ein. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Maschine","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage"],solutionRows:{
        aktiva:[["Maschine",100000],["Ausstehende Einlagen",75000],["Liquide Mittel",35000]],
        passiva:[["Gezeichnetes Kapital",200000],["Kapitalrücklage",10000]]
      },solution:"Agio = 10.000 € (10 % von 100.000 € Nennwert der Bareinlage).\nMindesteinzahlung = 25.000 € (25 % von 100.000 €) + 10.000 € (vollständiges Agio) = 35.000 €.\nAusstehende, bereits eingeforderte Einlage = 75.000 € (75 % von 100.000 €).\nGezeichnetes Kapital = 100.000 € (Bareinlage) + 100.000 € (Maschine) = 200.000 €.\nKapitalrücklage = 10.000 € (Agio der Bareinlage).\nBilanzsumme = 210.000 €."},

      {id:"t27",afb:1,xp:60,type:"balance",title:"Formwechsel ohne neues Kapital",prompt:"Die EcoPrint KG wird in eine AG formgewechselt. Zum Wirksamwerden bestehen 600.000 € Anlagevermögen, 200.000 € Umlaufvermögen und 300.000 € Fremdkapital. Das gesamte Eigenkapital wird zum Grundkapital der AG. Es gibt keine neue Kapitalzufuhr. Erstellen Sie die vollständige Gründungsbilanz nach dem Formwechsel.",accounts:["Anlagevermögen KG","Umlaufvermögen KG","Gezeichnetes Kapital","Fremdkapital"],solutionRows:{
        aktiva:[["Anlagevermögen KG",600000],["Umlaufvermögen KG",200000]],
        passiva:[["Gezeichnetes Kapital",500000],["Fremdkapital",300000]]
      },solution:"Eigenkapital der KG = 800.000 € (600.000 € Anlagevermögen + 200.000 € Umlaufvermögen) − 300.000 € (Fremdkapital) = 500.000 €.\nGezeichnetes Kapital = 500.000 € (vollständig aus dem bisherigen Eigenkapital).\nFremdkapital = 300.000 € (wird beim Formwechsel fortgeführt).\nBilanzsumme = 800.000 €."},

      {id:"t28",afb:2,xp:80,type:"balance",title:"Formwechsel plus Bankbeteiligung",prompt:"Die SolarDock KG besitzt Vermögen von 1.200.000 € und Fremdkapital von 700.000 €. Das Eigenkapital wird beim Formwechsel vollständig Grundkapital. Direkt danach übernimmt eine Bank Aktien im Nennwert von 100.000 € mit 20 % Agio. Die Bank leistet nur die gesetzliche Mindesteinzahlung; der restliche Nennwert ist bereits eingefordert. Weitere Zahlungen gibt es nicht. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",1200000],["Ausstehende Einlagen",75000],["Liquide Mittel",45000]],
        passiva:[["Gezeichnetes Kapital",600000],["Kapitalrücklage",20000],["Fremdkapital",700000]]
      },solution:"Eigenkapital KG = 1.200.000 € (Vermögen) − 700.000 € (Fremdkapital) = 500.000 €.\nAgio Bank = 20.000 € (20 % von 100.000 € Nennwert).\nBareinzahlung Bank = 25.000 € (25 % von 100.000 € Nennwert) + 20.000 € (vollständiges Agio) = 45.000 €.\nAusstehende, bereits eingeforderte Einlage = 75.000 € (75 % von 100.000 € Nennwert).\nGrundkapital = 500.000 € (Altgesellschafter) + 100.000 € (Bank) = 600.000 €.\nKapitalrücklage = 20.000 € (Agio Bank).\nBilanzsumme = 1.320.000 €."},

      {id:"t29",afb:2,xp:85,type:"balance",title:"Formwechsel mit Patent, Bank und ARA",prompt:"Die RoboService KG besitzt 2.000.000 € Vermögen und 1.200.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Zusätzlich wird ein Patent im Wert von 240.000 € zu 120 % des Nennwerts eingebracht. Eine Bank übernimmt Aktien zu einem gesamten Ausgabebetrag von 390.000 € bei 130 % Ausgabepreis und leistet nur die gesetzliche Mindesteinzahlung; der Restnennwert ist eingefordert. Die AG zahlt 45.000 € Versicherungsprämie im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Die Gesellschafter tragen die Gründungskosten privat. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",2000000],["Patent",240000],["Ausstehende Einlagen",225000],["Liquide Mittel",120000],["ARA",45000]],
        passiva:[["Gezeichnetes Kapital",1300000],["Kapitalrücklage",130000],["Fremdkapital",1200000]]
      },solution:"Eigenkapital KG = 2.000.000 € (Vermögen) − 1.200.000 € (Fremdkapital) = 800.000 €.\nPatent-Nennwert = 240.000 € (Patentwert = 120 %) / 1,20 = 200.000 €.\nAgio Patent = 40.000 € (240.000 € − 200.000 €).\nBank-Nennwert = 390.000 € (Ausgabebetrag) / 1,30 = 300.000 €.\nAgio Bank = 90.000 € (390.000 € − 300.000 €).\nBareinzahlung Bank = 75.000 € (25 % von 300.000 €) + 90.000 € (Agio) = 165.000 €.\nAusstehende Einlage = 225.000 € (75 % von 300.000 €).\nGrundkapital = 800.000 € (KG) + 200.000 € (Patent) + 300.000 € (Bank) = 1.300.000 €.\nKapitalrücklage = 40.000 € (Patent) + 90.000 € (Bank) = 130.000 €.\nLiquide Mittel = 165.000 € (Bank) − 45.000 € (Vorauszahlung Versicherung) = 120.000 €.\nARA = 45.000 € (vorausbezahlte Versicherung).\nBilanzsumme = 2.630.000 €."},

      {id:"t30",afb:2,xp:85,type:"balance",title:"Beteiligungsquoten aus dem KG-Vermögen ableiten",prompt:"Die CargoBike KG besitzt 3.000.000 € Vermögen und ist zu 60 % fremdfinanziert. Davon sind 1.800.000 € Vermögen Gesellschafterin A und 1.200.000 € Gesellschafter B zuzurechnen. Beide erhalten Aktien zum Nennwert entsprechend ihrem Eigenkapitalanteil. Nennwert je Aktie: 4 €. Eine Bank übernimmt zusätzlich 400.000 € Nennwert mit 25 % Agio und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Vermögen der KG","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",3000000],["Ausstehende Einlagen",300000],["Liquide Mittel",200000]],
        passiva:[["Gezeichnetes Kapital",1600000],["Kapitalrücklage",100000],["Fremdkapital",1800000]]
      },solution:"Fremdkapital = 1.800.000 € (60 % von 3.000.000 €).\nEigenkapital gesamt = 1.200.000 € (40 % von 3.000.000 €).\nEigenkapital A = 720.000 € (40 % von 1.800.000 € zurechenbarem Vermögen) → 180.000 Aktien (720.000 € / 4 €).\nEigenkapital B = 480.000 € (40 % von 1.200.000 €) → 120.000 Aktien (480.000 € / 4 €).\nAgio Bank = 100.000 € (25 % von 400.000 € Nennwert).\nBareinzahlung Bank = 100.000 € (25 % von 400.000 €) + 100.000 € (Agio) = 200.000 €.\nAusstehende Einlage = 300.000 € (75 % von 400.000 €).\nGrundkapital = 720.000 € (A) + 480.000 € (B) + 400.000 € (Bank) = 1.600.000 €.\nKapitalrücklage = 100.000 €.\nBilanzsumme = 3.500.000 €."},

      {id:"t31",afb:2,xp:85,type:"balance",title:"Neugründung mit zwei Bareinlagen und Patent",prompt:"Die MedLog AG wird neu gegründet. Gründer A übernimmt 200.000 € Nennwert mit 10 % Agio, Gründerin B 150.000 € Nennwert mit 20 % Agio. Beide leisten nur die gesetzliche Mindesteinzahlung; die Restnennwerte sind bereits eingefordert. Gründer C bringt ein Patent im Wert von 180.000 € ein; der Ausgabepreis beträgt 120 % des Nennwerts. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Patent","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage"],solutionRows:{
        aktiva:[["Patent",180000],["Ausstehende Einlagen",262500],["Liquide Mittel",137500]],
        passiva:[["Gezeichnetes Kapital",500000],["Kapitalrücklage",80000]]
      },solution:"Agio A = 20.000 € (10 % von 200.000 € Nennwert).\nBareinzahlung A = 50.000 € (25 % von 200.000 €) + 20.000 € (Agio) = 70.000 €; ausstehend A = 150.000 € (75 %).\nAgio B = 30.000 € (20 % von 150.000 €).\nBareinzahlung B = 37.500 € (25 % von 150.000 €) + 30.000 € (Agio) = 67.500 €; ausstehend B = 112.500 € (75 %).\nPatent-Nennwert C = 180.000 € (Patentwert = 120 %) / 1,20 = 150.000 €; Agio C = 30.000 €.\nGrundkapital = 200.000 € (A) + 150.000 € (B) + 150.000 € (C) = 500.000 €.\nKapitalrücklage = 20.000 € (A) + 30.000 € (B) + 30.000 € (C) = 80.000 €.\nLiquide Mittel = 70.000 € (A) + 67.500 € (B) = 137.500 €.\nAusstehende Einlagen = 150.000 € (A) + 112.500 € (B) = 262.500 €.\nBilanzsumme = 580.000 €."},

      {id:"t32",afb:2,xp:90,type:"balance",title:"Großer Formwechsel mit Kapitalerhöhung",prompt:"Die SmartFactory KG besitzt 4.500.000 € Vermögen und 2.700.000 € Fremdkapital. Das gesamte Eigenkapital wird Grundkapital. Eine neue Aktionärin bringt eine Maschine im Wert von 480.000 € zu 120 % des Nennwerts ein. Die Hausbank übernimmt Aktien zu einem Ausgabebetrag von 1.040.000 € bei 130 % Ausgabepreis und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Die AG zahlt 80.000 € Wartung im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Gründungskosten tragen die bisherigen Gesellschafter privat. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Maschine","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",4500000],["Maschine",480000],["Ausstehende Einlagen",600000],["Liquide Mittel",360000],["ARA",80000]],
        passiva:[["Gezeichnetes Kapital",3000000],["Kapitalrücklage",320000],["Fremdkapital",2700000]]
      },solution:"Eigenkapital KG = 4.500.000 € (Vermögen) − 2.700.000 € (Fremdkapital) = 1.800.000 €.\nMaschinen-Nennwert = 480.000 € / 1,20 = 400.000 €; Agio Maschine = 80.000 €.\nBank-Nennwert = 1.040.000 € / 1,30 = 800.000 €; Agio Bank = 240.000 €.\nBareinzahlung Bank = 200.000 € (25 % von 800.000 €) + 240.000 € (Agio) = 440.000 €.\nAusstehende Einlage Bank = 600.000 € (75 % von 800.000 €).\nGrundkapital = 1.800.000 € (KG) + 400.000 € (Maschine) + 800.000 € (Bank) = 3.000.000 €.\nKapitalrücklage = 80.000 € (Maschine) + 240.000 € (Bank) = 320.000 €.\nLiquide Mittel = 440.000 € (Bareinzahlung) − 80.000 € (Vorauszahlung Wartung) = 360.000 €.\nARA = 80.000 €.\nBilanzsumme = 6.020.000 €."},

      {id:"t33",afb:2,xp:90,type:"balance",title:"Sonderfall: Rest noch nicht eingefordert",prompt:"Die NovaCare AG wird mit 200.000 € Grundkapital gegründet. Ein Aktionär übernimmt 120.000 € Nennwert als Bareinlage und zahlt 25 %. Die restlichen 75 % wurden noch nicht eingefordert. Eine zweite Aktionärin bringt ein Patent im Wert von 80.000 € zum Nennwert ein. Es gibt kein Agio. Stellen Sie die vollständige Gründungsbilanz auf. Verwenden Sie für den noch nicht eingeforderten Teil den offenen Abzug vom gezeichneten Kapital.",accounts:["Patent","Liquide Mittel","Gezeichnetes Kapital","Nicht eingeforderte Einlagen (Abzug)"],solutionRows:{
        aktiva:[["Patent",80000],["Liquide Mittel",30000]],
        passiva:[["Gezeichnetes Kapital",200000],["Nicht eingeforderte Einlagen (Abzug)",-90000]]
      },solution:"Bareinzahlung = 30.000 € (25 % von 120.000 € Nennwert).\nNoch nicht eingeforderte Einlage = 90.000 € (75 % von 120.000 €). Weil sie noch nicht eingefordert wurde, ist sie keine Forderung auf der Aktivseite, sondern wird offen vom gezeichneten Kapital abgesetzt.\nGezeichnetes Kapital = 120.000 € (Bareinlage) + 80.000 € (Patent) = 200.000 €.\nOffener Abzug = −90.000 €.\nNetto-Eigenkapital aus gezeichnetem Kapital = 110.000 €.\nAktiva = 80.000 € (Patent) + 30.000 € (Bank) = 110.000 €; Passiva = 200.000 € − 90.000 € = 110.000 €."},

      {id:"t34",afb:3,xp:125,type:"balance",title:"Prüfungsfall: Formwechsel mit Aufwand und ARA",prompt:"Die DroneParts KG besitzt 6.000.000 € Vermögen und 3.600.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Ein Patent im Wert von 750.000 € wird zu 125 % des Nennwerts eingebracht. Die Bank übernimmt Aktien zu einem Ausgabebetrag von 1.300.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Laut Satzung trägt die AG 100.000 € Gründungskosten, die sofort als Aufwand bezahlt werden. Zusätzlich werden 50.000 € Versicherung für eine bestimmte Zeit nach dem Bilanzstichtag vorausbezahlt. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",6000000],["Patent",750000],["Ausstehende Einlagen",750000],["Liquide Mittel",400000],["ARA",50000]],
        passiva:[["Gezeichnetes Kapital",4000000],["Kapitalrücklage",450000],["Jahresfehlbetrag",-100000],["Fremdkapital",3600000]]
      },solution:"Eigenkapital KG = 6.000.000 € − 3.600.000 € = 2.400.000 €.\nPatent-Nennwert = 750.000 € / 1,25 = 600.000 €; Agio Patent = 150.000 €.\nBank-Nennwert = 1.300.000 € / 1,30 = 1.000.000 €; Agio Bank = 300.000 €.\nBareinzahlung Bank = 250.000 € (25 % von 1.000.000 €) + 300.000 € (Agio) = 550.000 €.\nAusstehende Einlage = 750.000 € (75 % von 1.000.000 €).\nGrundkapital = 2.400.000 € (KG) + 600.000 € (Patent) + 1.000.000 € (Bank) = 4.000.000 €.\nKapitalrücklage = 150.000 € (Patent) + 300.000 € (Bank) = 450.000 €.\nJahresfehlbetrag = −100.000 € (Gründungskosten als Aufwand).\nARA = 50.000 € (vorausbezahlte Versicherung).\nLiquide Mittel = 550.000 € (Bareinzahlung) − 100.000 € (Gründungskosten) − 50.000 € (Vorauszahlung) = 400.000 €.\nBilanzsumme = 7.950.000 €."},

      {id:"t35",afb:3,xp:130,type:"balance",title:"Prüfungsfall mit Beteiligungsberechnung",prompt:"Die E-Mobility Systems KG besitzt 4.000.000 € Vermögen und ist zu 50 % fremdfinanziert. Gesellschafterin A sind 2.400.000 € Vermögen, Gesellschafter B 1.600.000 € zuzurechnen. Beide erhalten Aktien entsprechend ihrem Eigenkapitalanteil; Nennwert je Aktie 5 €. Zusätzlich wird ein Patent im Wert von 375.000 € zu 125 % eingebracht. Eine Bank übernimmt Aktien zu einem Ausgabebetrag von 975.000 € bei 130 % und zahlt nur die gesetzliche Mindesteinzahlung; der Rest ist eingefordert. Die AG trägt 75.000 € Gründungskosten als Aufwand und zahlt 37.500 € Versicherung für die Zeit nach dem Bilanzstichtag voraus. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",4000000],["Patent",375000],["Ausstehende Einlagen",562500],["Liquide Mittel",300000],["ARA",37500]],
        passiva:[["Gezeichnetes Kapital",3050000],["Kapitalrücklage",300000],["Jahresfehlbetrag",-75000],["Fremdkapital",2000000]]
      },solution:"Fremdkapital KG = 2.000.000 € (50 % von 4.000.000 €).\nEigenkapital A = 1.200.000 € (50 % von 2.400.000 €) → 240.000 Aktien (1.200.000 € / 5 €).\nEigenkapital B = 800.000 € (50 % von 1.600.000 €) → 160.000 Aktien.\nPatent-Nennwert = 375.000 € / 1,25 = 300.000 € → 60.000 Aktien; Agio Patent = 75.000 €.\nBank-Nennwert = 975.000 € / 1,30 = 750.000 € → 150.000 Aktien; Agio Bank = 225.000 €.\nBareinzahlung Bank = 187.500 € (25 % von 750.000 €) + 225.000 € (Agio) = 412.500 €.\nAusstehende Einlage = 562.500 € (75 % von 750.000 €).\nGrundkapital = 1.200.000 € (A) + 800.000 € (B) + 300.000 € (Patent) + 750.000 € (Bank) = 3.050.000 €.\nKapitalrücklage = 75.000 € (Patent) + 225.000 € (Bank) = 300.000 €.\nJahresfehlbetrag = −75.000 € (Gründungskosten).\nARA = 37.500 € (Versicherung).\nLiquide Mittel = 412.500 € − 75.000 € − 37.500 € = 300.000 €.\nBilanzsumme = 5.275.000 €."},

      {id:"t36",afb:3,xp:140,type:"balance",title:"Meisterfall: eingeforderte und nicht eingeforderte Einlagen",prompt:"Die MotionWerk KG besitzt beim Formwechsel 8.000.000 € Vermögen und 4.800.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Ein Patent im Wert von 1.050.000 € wird zu 140 % eingebracht. Bank A übernimmt Aktien zu einem Ausgabebetrag von 1.560.000 € bei 130 % und leistet nur die gesetzliche Mindesteinzahlung; der Rest ist bereits eingefordert. Investor B übernimmt 400.000 € Nennwert ohne Agio, zahlt 25 %, die restlichen 75 % wurden noch nicht eingefordert. Die AG trägt 160.000 € Gründungskosten als Aufwand und zahlt 100.000 € Miete im Voraus für eine bestimmte Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Gründungsbilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Nicht eingeforderte Einlagen (Abzug)","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{
        aktiva:[["Vermögen der KG",8000000],["Patent",1050000],["Ausstehende Einlagen",900000],["Liquide Mittel",500000],["ARA",100000]],
        passiva:[["Gezeichnetes Kapital",5550000],["Nicht eingeforderte Einlagen (Abzug)",-300000],["Kapitalrücklage",660000],["Jahresfehlbetrag",-160000],["Fremdkapital",4800000]]
      },solution:"Eigenkapital KG = 8.000.000 € − 4.800.000 € = 3.200.000 €.\nPatent-Nennwert = 1.050.000 € / 1,40 = 750.000 €; Agio Patent = 300.000 €.\nBank-A-Nennwert = 1.560.000 € / 1,30 = 1.200.000 €; Agio Bank A = 360.000 €.\nBareinzahlung Bank A = 300.000 € (25 % von 1.200.000 €) + 360.000 € (Agio) = 660.000 €; eingefordert ausstehend = 900.000 € (75 %).\nInvestor B: Nennwert 400.000 €; Bareinzahlung = 100.000 € (25 %); nicht eingefordert = 300.000 € (75 %), daher offener Abzug vom gezeichneten Kapital und keine Aktivforderung.\nGrundkapital = 3.200.000 € (KG) + 750.000 € (Patent) + 1.200.000 € (Bank A) + 400.000 € (Investor B) = 5.550.000 €.\nKapitalrücklage = 300.000 € (Patent) + 360.000 € (Bank A) = 660.000 €.\nLiquide Mittel vor Ausgaben = 660.000 € (Bank A) + 100.000 € (Investor B) = 760.000 €.\nLiquide Mittel = 760.000 € − 160.000 € (Gründungskosten) − 100.000 € (Vorauszahlung Miete) = 500.000 €.\nARA = 100.000 €. Jahresfehlbetrag = −160.000 €.\nPassiva: 5.550.000 € (gezeichnetes Kapital) − 300.000 € (nicht eingefordert) + 660.000 € (Kapitalrücklage) − 160.000 € (Jahresfehlbetrag) + 4.800.000 € (Fremdkapital) = 10.550.000 €.\nAktiva: 8.000.000 € + 1.050.000 € + 900.000 € + 500.000 € + 100.000 € = 10.550.000 €."}
    ]
  }

];

export const BONUS_TASKS = [
  {id:"b1",afb:2,xp:60,type:"numeric",title:"Bonus: Stückaktien",prompt:"Eine AG hat 72 Mio. € Grundkapital und 24 Mio. Stückaktien. Bestimmen Sie den rechnerischen Anteil je Stückaktie.",fields:[{label:"Rechnerischer Anteil (€)",answer:3}],solution:"72 Mio. € / 24 Mio. Stück = 3,00 € rechnerischer Anteil je Stückaktie."},
  {id:"b2",afb:3,xp:90,type:"single",title:"Bonus: Nicht eingeforderte Einlagen",prompt:"Bei einer Bareinlage wurden 25 % gezahlt. Die restlichen 75 % wurden noch nicht eingefordert. Wie ist dieser Rest in der Bilanz zu behandeln?",options:["Immer als Forderung auf der Aktivseite","Offen vom gezeichneten Kapital absetzen","Als Kapitalrücklage","Als ARA"],answer:1,solution:"Nicht eingeforderte ausstehende Einlagen werden offen vom gezeichneten Kapital abgesetzt. Erst bereits eingeforderte, noch nicht gezahlte Einlagen sind Forderungen."},
  {id:"b3",afb:3,xp:90,type:"numeric",title:"Bonus: Gründungskosten als Aufwand",prompt:"Eine AG hat vor Gründungskosten 600.000 € Eigenkapital. Sie trägt 35.000 € Gründungskosten selbst als Aufwand. Wie hoch ist das Eigenkapital danach, wenn sonst nichts passiert?",fields:[{label:"Eigenkapital nach Aufwand (€)",answer:565000}],solution:"600.000 € − 35.000 € Aufwand = 565.000 € Eigenkapital. Die Gründungskosten werden nicht als ARA aktiviert."},
  {id:"b4",afb:2,xp:60,type:"multi",title:"Bonus: Börsengang und Geldfluss",prompt:"Welche Aussagen sind richtig?",options:["Bei neuen Aktien fließt der Ausgabebetrag grundsätzlich an die Gesellschaft.","Beim Verkauf bestehender Aktien fließt der Erlös grundsätzlich an die verkaufenden Eigentümer.","Jeder Börsengang erhöht automatisch das Grundkapital.","Ein Börsengang kann neue Anteilseigner bringen."],answer:[0,1,3],solution:"Neue Aktien können der Gesellschaft Eigenkapital zuführen. Beim Verkauf von Altaktien erhält grundsätzlich der bisherige Eigentümer den Verkaufserlös. Ein Börsengang muss nicht zwingend mit einer Kapitalerhöhung verbunden sein."},
  {id:"b5",afb:2,xp:90,type:"balance",title:"Bonusbilanz: nur Bareinlagen",prompt:"Die PixelWorks AG hat 300.000 € Grundkapital. Zwei Aktionäre übernehmen je 150.000 € Nennwert. Aktionär A zahlt 25 % und 15.000 € Agio; Aktionär B zahlt 25 % ohne Agio. Beide Restnennwerte sind eingefordert. Erstellen Sie die Bilanz.",accounts:["Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage"],solutionRows:{aktiva:[["Ausstehende Einlagen",225000],["Liquide Mittel",90000]],passiva:[["Gezeichnetes Kapital",300000],["Kapitalrücklage",15000]]},solution:"A: Bareinzahlung = 37.500 € (25 % von 150.000 €) + 15.000 € (Agio) = 52.500 €; ausstehend = 112.500 €. B: Bareinzahlung = 37.500 € (25 % von 150.000 €); ausstehend = 112.500 €. Liquide Mittel = 90.000 €. Ausstehende Einlagen = 225.000 €. Grundkapital = 300.000 €. Kapitalrücklage = 15.000 €. Bilanzsumme = 315.000 €."},
  {id:"b6",afb:2,xp:95,type:"balance",title:"Bonusbilanz: Sacheinlage mit Aufgeld",prompt:"Die GreenRoof AG wird mit 250.000 € Grundkapital gegründet. 150.000 € Nennwert werden bar mit 20 % Agio übernommen; es wird nur die Mindesteinzahlung geleistet, der Rest ist eingefordert. Außerdem wird eine Maschine im Wert von 120.000 € eingebracht, die 120 % des dafür gewährten Nennwerts entspricht. Erstellen Sie die Bilanz.",accounts:["Maschine","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage"],solutionRows:{aktiva:[["Maschine",120000],["Ausstehende Einlagen",112500],["Liquide Mittel",67500]],passiva:[["Gezeichnetes Kapital",250000],["Kapitalrücklage",50000]]},solution:"Bareinlage: Agio = 30.000 € (20 % von 150.000 €); Einzahlung = 37.500 € (25 %) + 30.000 € = 67.500 €; ausstehend = 112.500 €. Maschine: Nennwert = 120.000 € / 1,20 = 100.000 €; Agio = 20.000 €. Grundkapital = 150.000 € + 100.000 € = 250.000 €. Kapitalrücklage = 30.000 € + 20.000 € = 50.000 €. Bilanzsumme = 300.000 €."},
  {id:"b7",afb:3,xp:120,type:"balance",title:"Bonusbilanz: Formwechsel mit zwei Kapitalgebern",prompt:"Die RepairTech KG besitzt 2.800.000 € Vermögen und 1.600.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Investor A übernimmt 400.000 € Nennwert mit 25 % Agio und leistet die Mindesteinzahlung; der Rest ist eingefordert. Investor B bringt ein Patent im Wert von 300.000 € zu 120 % ein. Die Gesellschafter tragen Gründungskosten privat. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Patent","Ausstehende Einlagen","Liquide Mittel","Gezeichnetes Kapital","Kapitalrücklage","Fremdkapital"],solutionRows:{aktiva:[["Vermögen der KG",2800000],["Patent",300000],["Ausstehende Einlagen",300000],["Liquide Mittel",200000]],passiva:[["Gezeichnetes Kapital",1850000],["Kapitalrücklage",150000],["Fremdkapital",1600000]]},solution:"Eigenkapital KG = 2.800.000 € − 1.600.000 € = 1.200.000 €. Investor A: Agio = 100.000 € (25 % von 400.000 €); Bareinzahlung = 100.000 € (25 % Nennwert) + 100.000 € Agio = 200.000 €; ausstehend = 300.000 €. Patent B: Nennwert = 300.000 € / 1,20 = 250.000 €; Agio = 50.000 €. Grundkapital = 1.200.000 € + 400.000 € + 250.000 € = 1.850.000 €. Kapitalrücklage = 100.000 € + 50.000 € = 150.000 €. Bilanzsumme = 3.600.000 €."},
  {id:"b8",afb:3,xp:130,type:"balance",title:"Bonusbilanz: Fehlerquelle ARA und Aufwand",prompt:"Die LogiBot KG besitzt 3.600.000 € Vermögen und 2.100.000 € Fremdkapital. Das Eigenkapital wird Grundkapital. Die Bank übernimmt 500.000 € Nennwert mit 20 % Agio, zahlt die Mindesteinzahlung, Rest eingefordert. Die AG zahlt 40.000 € Gründungskosten als Aufwand und 60.000 € Wartung im Voraus für die Zeit nach dem Bilanzstichtag. Erstellen Sie die vollständige Bilanz.",accounts:["Vermögen der KG","Ausstehende Einlagen","Liquide Mittel","ARA","Gezeichnetes Kapital","Kapitalrücklage","Jahresfehlbetrag","Fremdkapital"],solutionRows:{aktiva:[["Vermögen der KG",3600000],["Ausstehende Einlagen",375000],["Liquide Mittel",125000],["ARA",60000]],passiva:[["Gezeichnetes Kapital",2000000],["Kapitalrücklage",100000],["Jahresfehlbetrag",-40000],["Fremdkapital",2100000]]},solution:"Eigenkapital KG = 3.600.000 € − 2.100.000 € = 1.500.000 €. Bank: Agio = 100.000 € (20 % von 500.000 €); Einzahlung = 125.000 € (25 % von 500.000 €) + 100.000 € (Agio) = 225.000 €; ausstehend = 375.000 €. Grundkapital = 1.500.000 € + 500.000 € = 2.000.000 €. Liquide Mittel = 225.000 € − 40.000 € (Gründungskosten) − 60.000 € (Vorauszahlung) = 125.000 €. ARA = 60.000 €. Jahresfehlbetrag = −40.000 €. Bilanzsumme = 4.160.000 €."}
];

export const SHOP = [
  {id:"theme-sky",type:"theme",name:"Himmelblau",cost:150,value:"sky",preview:"🌤️"},
  {id:"avatar-fox",type:"avatar",name:"Bilanz-Fuchs",cost:250,value:"fox",preview:"🦊"},
  {id:"theme-sunset",type:"theme",name:"Abendrot",cost:400,value:"sunset",preview:"🌇"},
  {id:"avatar-owl",type:"avatar",name:"Prüfungs-Eule",cost:500,value:"owl",preview:"🦉"},
  {id:"outfit-cap",type:"outfit",name:"Finance-Cap",cost:650,value:"cap",preview:"🧢"},
  {id:"theme-midnight",type:"theme",name:"Midnight",cost:800,value:"midnight",preview:"🌌"},
  {id:"avatar-robot",type:"avatar",name:"AG-Bot",cost:900,value:"robot",preview:"🤖"},
  {id:"outfit-crown",type:"outfit",name:"Bilanz-Krone",cost:1100,value:"crown",preview:"👑"}
];

export const AVATARS = {starter:"🙂",fox:"🦊",owl:"🦉",robot:"🤖"};
export const OUTFITS = {none:"",cap:"🧢",crown:"👑"};
