// ====== DATI MODIFICABILI ======
// I campi lasciati vuoti ("") vengono mostrati come nell'app originale (solo etichetta grigia).
const STUDENTE = {
  anagrafica: [
    ["Nome", "CARLO"],
    ["Cognome", "LA COLLA"],
    ["Data di nascita", "30/10/2007"],
    ["Provincia di nascita", "CATANIA"],
    ["Comune o stato estero di nascita", "GIARRE"],
    ["Località di nascita", ""],
    ["Genere", "Maschio"],
    ["Codice fiscale", "LCLCRL07R30E017W"],
  ],
  carriera: [
    ["Matricola", ""],
    ["Immatricolazione", "2026/2027"],
    ["Corso di studi", "L-33 R Economia regolamento 2026/2027"],
    ["Ultima iscrizione", "2026/2027"],
    ["Status", "Carriera attiva"],
  ],
  pianoStato: "Approvato",
  // Carriera > Esami e certificati > "Esami non in piano"  [nome, tipo, voto, crediti]
  esamiNonInPiano: [["DEBITO FORMATIVO", "S", "I", ""]],
  // Dati > Residenza
  residenza: { comune: "", cap: "", dug: "VIA", indirizzo: "", civico: "" },
  // Dati > Contatti
  contatti: { email: "", cellulare: "", telefono: "" },
  cittadinanza: "Italia",
  // Dati > La mia foto: messaggio rosso a destra (lascia "" per non mostrarlo)
  fotoMessaggio: "",
  storicoPiani: ["Curriculum unico -  (Approvato)"],
  // [codice, nome, SSD, crediti, tipo attività (A/B/C...), nome come appare in Appelli (opzionale)]
  piano: [
    {
      anno: 1,
      esami: [
        ["9798804", "STORIA ECONOMICA", "STEC-01/B", 9, "C", "Storia economica"],
        ["9798965", "LINGUA INGLESE", "", 9, "E"],
        ["9798814", "MATEMATICA GENERALE", "STAT-04/A", 9, "A"],
        ["9798807", "CONTABILITÀ E BILANCIO", "ECON-06/A", 9, "A", "Contabilità e bilancio"],
        ["72898", "MICROECONOMIA", "ECON-01/A", 9, "A"],
        ["9798805", "ISTITUZIONI DI DIRITTO PRIVATO", "GIUR-01/A", 9, "A", "Istituzioni di diritto privato"],
        ["9798811", "ECONOMIA E GESTIONE DELLE IMPRESE", "ECON-07/A", 9, "B"],
      ],
    },
    {
      anno: 2,
      esami: [
        ["1000065", "POLITICA ECONOMICA", "ECON-02/A", 9, "B"],
        ["9796122", "ENVIRONMENTAL ECONOMICS AND POLICY", "ECON-02/A", 6, "D"],
        ["1000060", "MACROECONOMIA", "ECON-01/A", 9, "B"],
        ["9798809", "STATISTICA", "STAT-01/A", 9, "B"],
        ["1000056", "DIRITTO PUBBLICO", "GIUR-06/A", 9, "B"],
        ["72900", "GEOGRAFIA ECONOMICA", "GEOG-01/B", 6, "B"],
        ["9794211", "MATEMATICA FINANZIARIA E ATTUARIALE", "STAT-04/A", 9, "B"],
      ],
    },
    {
      anno: 3,
      esami: [
        ["9797656", "IMPRESA, FINANZA E ETICA", "SECS-P/08", 6, "D"],
        ["9800501", "PERFORMANCE ECONOMICO FINANZIARIE E CONTROLLO", "ECON-06/A", 6, "C"],
        ["1000140", "SCIENZA DELLE FINANZE", "ECON-03/A", 9, "B"],
        ["1002231", "ABILITA' INFORMATICHE E TELEMATICHE", "", 6, "F"],
        ["9800500", "REGIONAL ECONOMICS", "ECON-04/A", 6, "B"],
        ["9798808", "DIRITTO COMMERCIALE", "GIUR-02/A", 9, "C", "Diritto commerciale"],
        ["1000058", "STATISTICA ECONOMICA", "STAT-02/A", 6, "B"],
        ["9798810", "ECONOMIA E GESTIONE DEGLI INTERMEDIARI FINANZIARI", "ECON-09/B", 9, "B"],
        ["9795514", "PROVA FINALE", "", 3, "E"],
      ],
    },
  ],
};

// ====== MENU ======
// [etichetta, icona, colore, destinazione (route) | null, varianti]
const C = {
  orange: "#fd7e14",
  purple: "#a35fcf",
  blue: "#3d7be8",
  idBlue: "#3d7be8",
  green: "#12c13d",
  teal: "#20c997",
  mint: "#2ec27e",
  red: "#dc3545",
  cyan: "#29abe2",
  royal: "#2f6fe4",
};

const MENUS = {
  home: [
    ["Studenti incoming", "globe", C.cyan],
    ["Dati", "idCardDuo", C.idBlue, "dati"],
    ["Procedure di ammissione", "loginArrow", C.green],
    ["Carriera", "userGraduate", C.orange, "carriera"],
    ["Immatricolazioni e test", "userPlus", C.purple, "immatricolazioni"],
    ["Rinnovo dell'Iscrizione", "listCheck", C.purple],
    ["Tirocini e Stage", "rocket", C.teal],
    ["Tasse", "creditCard", C.red],
    ["Impostazioni", "userGear", C.mint],
    ["Avvisi", "bell", "#fff", null, "dark"],
    ["Autorizzazione e acquisto libri", "book", C.royal],
    ["Mobilità nazionale", "landmark", C.royal],
  ],
  carriera: [
    ["Piano di studi", "rulerTri", C.orange, "piano"],
    ["Esami e certificati", "userGraduate", C.orange, "esami"],
    ["Appelli", "chalkboardUser", C.orange, "appelli"],
    ["Prove intermedie", "chalkboardOutline", C.orange],
    ["Domande", "squareQuestion", C.orange],
    ["Questionari", "question", C.orange],
    ["Prenotazione aule", "chair", C.orange],
    ["Prenotazione aule studio", "bookOpen", C.orange],
    ["Conseguimento", "gradCap", C.orange],
    ["Mobilità", "globe", C.orange],
    ["Cambio corso da primo a primo", "rotate1", C.orange],
    ["Presenza", "octagonCheck", C.orange],
  ],
  dati: [
    ["Anagrafica", "idCard", C.blue, "anagrafica"],
    ["Residenza", "mapLocation", C.blue, "residenza"],
    ["Domicilio", "house", C.blue],
    ["Cittadinanza", "flag", C.blue, "cittadinanza"],
    ["Contatti", "envelopes", C.blue, "contatti"],
    ["La mia foto", "camera", C.blue, "foto"],
    ["Invalidità", "wheelchair", C.blue],
    ["DSA", "universal", C.blue],
    ["Documento", "idBadge", C.blue],
    ["Iban", "moneyCheckPen", C.blue],
    ["Familiari", "houseUser", C.blue],
    ["Contatto aziende", "briefcase", C.blue],
  ],
  immatricolazioni: [
    ["Triennali e ciclo unico", "userGraduate", C.purple],
    ["Magistrali", "gradCap", C.purple],
    ["Master primo liv.", "fileCertDuoLine", C.purple],
    ["Master secondo liv.", "fileCertLine", C.purple],
    ["24 CFU", "chalkboardOutline", C.purple],
    ["Esami di Stato", "fileCert", C.purple],
    ["Corsi Singoli", "listDuo", C.purple],
    ["Aggiornamento profess.", "userTie", C.purple],
    ["Certificazione linguistica", "globe", C.purple],
    ["Corsi di perfezionamento", "chalkboardSoft", C.purple],
    ["Alta formazione", "chalkboardTrend", C.purple],
  ],
};
