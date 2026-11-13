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

  const PARENT = { dati: "home", carriera: "home", immatricolazioni: "home", anagrafica: "dati", piano: "carriera" };
  const LEVEL = { home: 0, dati: 1, carriera: 1, immatricolazioni: 1, anagrafica: 2, piano: 2 };
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

  const ROUTES = {
    home: () => grid(MENUS.home),
    dati: () => grid(MENUS.dati),
    carriera: () => grid(MENUS.carriera),
    immatricolazioni: () => grid(MENUS.immatricolazioni),
    anagrafica,
    piano,
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
