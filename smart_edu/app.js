(() => {
  const view = document.getElementById("view");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- barra inferiore ----------
  const nav = {
    back: document.getElementById("nav-back"),
    home: document.getElementById("nav-home"),
    history: document.getElementById("nav-history"),
    settings: document.getElementById("nav-settings"),
  };
  nav.back.innerHTML = `<span>${NAV_ICONS.back}</span>`;
  nav.history.innerHTML = `<span>${NAV_ICONS.history}</span>`;
  nav.settings.innerHTML = `<span>${NAV_ICONS.cogs}</span>`;

  const PARENT = { dati: "home", carriera: "home", immatricolazioni: "home", anagrafica: "dati", residenza: "dati", cittadinanza: "dati", contatti: "dati", foto: "dati", piano: "carriera", esami: "carriera", appelli: "carriera" };
  const LEVEL = { home: 0, dati: 1, carriera: 1, immatricolazioni: 1, anagrafica: 2, residenza: 2, cittadinanza: 2, contatti: 2, foto: 2, piano: 2, esami: 2, appelli: 2 };
  nav.back.onclick = () => {
    const r = route();
    if (r === "home") return;
    if (pushed > 0) history.back();
    else go(PARENT[r] || "home", true);
  };
  nav.home.onclick = () => route() !== "home" && go("home");
  nav.history.onclick = () => {};
  nav.settings.onclick = () => {};

  // ---------- render ----------
  const grid = (items) =>
    `<div class="card"><div class="grid">${items
      .map(
        ([label, icon, color, to, variant], i) => `
      <button class="tile ${variant || ""}" data-i="${i}" ${to ? `data-to="${to}"` : ""}>
        <div class="box" style="color:${color}">${ICONS[icon] || ""}</div>
        <div class="label">${esc(label)}</div>
      </button>`
      )
      .join("")}</div></div>`;

  const anagrafica = () =>
    `<div class="card"><div class="form">${STUDENTE.anagrafica
      .map(([k, v]) =>
        v
          ? `<div class="field"><div class="k">${esc(k)}</div><div class="v${k === "Genere" ? " keep" : ""}">${esc(v)}</div></div>`
          : `<div class="field empty"><div class="k">${esc(k)}</div></div>`
      )
      .join("")}</div></div>`;

  const piano = () => {
    const rows = STUDENTE.piano
      .map(
        ({ anno, esami }) =>
          `<tr class="year"><td colspan="2">Insegnamenti del ${anno}° anno</td></tr>` +
          esami
            .map(
              ([cod, nome, ssd, cfu], i) => `
          <tr class="row${i % 2 ? " alt" : ""}${ssd ? "" : " nossd"}">
            <td class="main"><span class="code">${esc(cod)}</span> ${esc(nome)}${ssd ? `<span class="ssd">${esc(ssd)}</span>` : ""}</td>
            <td class="cfu">${esc(cfu)}</td>
          </tr>`
            )
            .join("")
      )
      .join("");

    return `<div class="card"><div class="piano">
      <div class="actions">
        <button class="btn-gray" id="altre">Altre azioni <span class="caret"></span></button>
        <div class="dropdown" id="dd">
          <a href="#" data-print><span class="pr">${NAV_ICONS.print}</span> Stampa piano</a>
          <a href="#" data-print><span class="pr">${NAV_ICONS.print}</span> Download Plan (ENG)</a>
          <a href="#"><span>${NAV_ICONS.plus}</span> Nuovo piano curriculare</a>
        </div>
      </div>
      <table class="info">${STUDENTE.carriera
        .map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`)
        .join("")}</table>
      <h2 class="title">Piano di studi - ${esc(STUDENTE.pianoStato)}</h2>
      <table class="plan">
        <thead><tr><th>Esame</th><th class="r">Crediti</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <h2 class="title">Storico dei piani</h2>
      <table class="plan storico">
        <thead><tr><th>Dettaglio</th></tr></thead>
        <tbody>${STUDENTE.storicoPiani.map((s) => `<tr><td>${esc(s)}</td></tr>`).join("")}</tbody>
      </table>
    </div></div>`;
  };


  const corso = () => (STUDENTE.carriera.find((r) => r[0] === "Corso di studi") || ["", ""])[1];
  const infoTable = () =>
    `<table class="info">${STUDENTE.carriera.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("")}</table>`;
  const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';

  const esami = () => {
    const np = STUDENTE.esamiNonInPiano;
    const tot = np.reduce((a, r) => a + (parseFloat(r[3]) || 0), 0);
    return `<div class="card"><div class="piano esami">
      <h2 class="title big">${esc(corso())}</h2>
      ${infoTable()}
      <button class="btn-blue wide">Visualizza certificati / dichiarazioni sostitutive</button>
      <h2 class="title np">Esami non in piano</h2>
      <table class="plan np">
        <thead><tr><th>Esame</th><th colspan="2">Crediti</th></tr></thead>
        <tbody>${np
          .map(
            ([nome, tipo, voto, cfu]) => `<tr class="row alt"><td class="main">${esc(nome)}${tipo ? ` <span class="badge">${esc(tipo)}</span>` : ""}${voto ? `<br>${esc(voto)}` : ""}</td><td class="c2">${esc(cfu)}</td><td class="ch">${CHEVRON}</td></tr>`
          )
          .join("")}
          <tr class="tot"><td>TOTALE</td><td colspan="2">${tot}</td></tr>
        </tbody>
      </table>
      <hr class="sep" />
      <table class="legend">
        <thead><tr><th colspan="2">Tipo</th><th>Voto</th></tr></thead>
        <tbody>
          <tr class="alt"><td>S: Esame sostenuto</td><td>C: Esame convalidato</td><td>I: Idoneo</td></tr>
          <tr><td>C/E: Esame convalidato ERASMUS</td><td>D: Esame dispensato</td><td></td></tr>
          <tr class="alt"><td colspan="3">I: Esame convalidato con integrazione (la data si riferisce all'integrazione)</td></tr>
        </tbody>
      </table>
    </div></div>`;
  };

  const LEGENDA = [
    "A: Attivita' formative di base",
    "B: Attività formative caratterizzanti",
    "C: Attività formative affini ed integrative",
    "D: Attività formative a scelta dello studente (art.10, comma 5, lettera a)",
    "E: Per la prova finale",
    "F: Ulteriori attività formative (art.10, comma 5, lettera d)",
    "L: Attivita' caratterizzanti elettive a scelta dello studente",
    "P: Attivita' professionalizzanti",
    "R: Affini e ambito di sede classe LMG/01",
    "S: Per stages e tirocini presso imprese, enti pubblici o privati, ordini professionali (art.10, comma 5, lettera e)",
    "T: Attività caratterizzanti",
    "X: Attività per ambito aggregato per crediti di sede",
  ];

  const appelli = () => {
    const nomeCorso = (corso().match(/^\S+\s+R?\s*(.+?)\s+regolamento/i) || [, corso()])[1];
    return `<div class="card narrow"><div class="piano appelli">
      <h2 class="title center">${esc(nomeCorso)}</h2>
      <h3 class="subtitle">Elenco esami sostenibili</h3>
      <table class="plan ap">
        <thead><tr><th colspan="2">Insegnamento</th></tr></thead>
        <tbody>${STUDENTE.piano
          .map(
            ({ anno, esami }) =>
              `<tr class="year"><td colspan="2">${anno}° anno</td></tr>` +
              esami
                .map(
                  ([cod, nome, , cfu, taf, nomeAp], i) => `<tr class="row${i % 2 ? " alt" : ""}">
                    <td class="main"><span class="cod">${esc(cod)}</span><span class="nm">${esc(nomeAp || nome)}</span><span class="cr">${esc(cfu)} Crediti - <b>(${esc(taf || "")})</b></span></td>
                    <td class="ch">${CHEVRON}</td></tr>`
                )
                .join("")
          )
          .join("")}</tbody>
      </table>
      <h2 class="title legenda">Legenda</h2>
      <div class="legenda-list">${LEGENDA.map((l) => `<div>${esc(l)}</div>`).join("")}</div>
    </div></div>`;
  };

  const DICH = (cosa) =>
    `<p class="dich">Io sottoscritto, sotto la mia responsabilità valendomi delle disposizioni di cui all'art. 46 del D.P.R. 28 dicembre 2000, n. 445 e consapevole che in caso di falso vedrò decadere i benefici ottenuti ai sensi dell'art.75 del D.P.R. sopradetto e incorrerò nelle sanzioni penali previste per le false dichiarazioni dall'art. 76, del D.P.R. sopradetto, dichiaro la seguente ${cosa}:</p>`;
  const fld = (label, value, cls = "") =>
    `<label class="fl ${cls}${value ? "" : " empty"}"><span>${esc(label)}</span><input value="${esc(value)}" oninput="this.parentNode.classList.toggle('empty', !this.value)" /></label>`;
  const sel = (label, value, opts) =>
    `<div class="sl"><div class="sl-l">${esc(label)}</div><div class="sl-b"><select>${[value, ...opts.filter((o) => o !== value)]
      .map((o) => `<option>${esc(o)}</option>`)
      .join("")}</select><span class="sl-c"></span></div></div>`;
  const salva = '<div class="salva-row"><button class="btn-blue salva">Salva</button></div>';

  const residenza = () => {
    const r = STUDENTE.residenza;
    return `<div class="card"><div class="frm">${DICH("residenza")}
      ${sel("Comune o stato estero", r.comune, [])}
      ${fld("CAP", r.cap, "ind")}
      ${sel("Denominazione Urbanistica Generica (Dug es: Via,Viale,Piazza)", r.dug, ["VIA", "VIALE", "PIAZZA", "CORSO", "LARGO", "VICOLO", "CONTRADA", "LOCALITA'"])}
      ${fld("Indirizzo", r.indirizzo)}
      ${fld("Civico", r.civico, "ind")}
      ${salva}</div></div>`;
  };

  const cittadinanza = () =>
    `<div class="card"><div class="frm">${DICH("cittadinanza")}
      <div class="sl"><div class="sl-l">Stato di cittadinanza</div><div class="sl-b ios"><select>${[STUDENTE.cittadinanza, "Italia", "Altro"]
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((o) => `<option>${esc(o)}</option>`)
        .join("")}</select><span class="sl-ud"></span></div></div>
      ${salva}</div></div>`;

  const contatti = () => {
    const c = STUDENTE.contatti;
    const cf = (STUDENTE.anagrafica.find((r) => r[0] === "Codice fiscale") || ["", ""])[1];
    return `<div class="card"><div class="frm ct">
      ${fld("Email *", c.email)}
      <div class="tel-l">Cellulare<sup>*</sup></div>
      <div class="tel"><span class="cc"><span class="flag"></span>+39 <i class="caret"></i></span><input type="tel" placeholder="Inserisci il tuo numero di cellulare" value="${esc(c.cellulare)}" /></div>
      ${fld("Recapito telefonico", c.telefono)}
      ${fld("Email istituzionale", cf ? cf.toUpperCase() + "@STUDIUM.UNICT.IT" : "")}
      ${salva}</div></div>`;
  };

  const foto = () =>
    `<div class="card"><div class="foto">
      <div class="ftool"><button>${NAV_ICONS.rotL}Rotate<br>Left</button><button>${NAV_ICONS.rotR}Rotate<br>Right</button><button class="sv">${NAV_ICONS.save}Save</button></div>
      <div class="fbody">
        <div class="fimg" id="fimg"><div class="crop"><i></i><i></i><i></i><i></i><b></b></div></div>
        <div class="fside">
          <div class="fst">Status</div>
          <label class="fl empty"><span>Status</span><input readonly /></label>
          <label class="fl empty"><span>Messaggi</span><input readonly /></label>
          ${STUDENTE.fotoMessaggio ? `<p class="fmsg">${esc(STUDENTE.fotoMessaggio)}</p>` : ""}
        </div>
      </div>
      <label class="btn-blue cam">${NAV_ICONS.camera}<input type="file" accept="image/*" id="fin" hidden /></label>
    </div></div>`;

  const ROUTES = {
    home: () => grid(MENUS.home),
    dati: () => grid(MENUS.dati),
    carriera: () => grid(MENUS.carriera),
    immatricolazioni: () => grid(MENUS.immatricolazioni),
    anagrafica,
    piano,
    esami,
    appelli,
    residenza,
    cittadinanza,
    contatti,
    foto,
  };

  // ---------- router ----------
  let pushed = 0;
  let prevLevel = null;
  const route = () => {
    const r = location.hash.replace(/^#\/?/, "");
    return ROUTES[r] ? r : "home";
  };
  const go = (r, replace) => {
    if (replace) location.replace("#/" + r);
    else { pushed++; location.hash = "#/" + r; }
  };

  const render = () => {
    const r = route();
    const backward = prevLevel !== null && LEVEL[r] < prevLevel;
    if (backward) pushed = Math.max(0, pushed - 1);
    prevLevel = LEVEL[r];

    view.innerHTML = `<div class="page${backward ? " back" : ""}">${ROUTES[r]()}</div>`;
    window.scrollTo(0, 0);

    const isHome = r === "home";
    nav.home.classList.toggle("on", isHome);
    nav.home.innerHTML = `<span>${isHome ? NAV_ICONS.homeSolid : NAV_ICONS.home}</span>`;

    view.querySelectorAll(".tile").forEach((t) =>
      t.addEventListener("click", () => {
        view.querySelectorAll(".tile.active").forEach((x) => x !== t && x.classList.remove("active"));
        t.classList.add("active");
        const to = t.dataset.to;
        if (to) setTimeout(() => go(to), 140);
      })
    );

    const fin = document.getElementById("fin");
    if (fin)
      fin.onchange = () => {
        const f = fin.files && fin.files[0];
        if (!f) return;
        const url = URL.createObjectURL(f);
        const box = document.getElementById("fimg");
        box.style.backgroundImage = `url(${url})`;
        box.classList.add("has");
      };
    view.querySelectorAll(".salva").forEach((b) =>
      b.addEventListener("click", () => {
        b.textContent = "Salvato";
        setTimeout(() => (b.textContent = "Salva"), 1200);
      })
    );

    const btn = document.getElementById("altre");
    if (btn) {
      const dd = document.getElementById("dd");
      btn.onclick = (e) => { e.stopPropagation(); dd.classList.toggle("open"); };
      dd.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", (e) => {
          e.preventDefault();
          dd.classList.remove("open");
          if (a.hasAttribute("data-print")) window.print();
        })
      );
      document.addEventListener("click", () => dd.classList.remove("open"), { once: true });
    }
  };

  window.addEventListener("hashchange", render);
  render();
})();
