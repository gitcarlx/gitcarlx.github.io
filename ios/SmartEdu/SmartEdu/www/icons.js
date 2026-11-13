// Icone SVG (griglia 64x64). currentColor = colore primario, .s = tono secondario (duotone)
const W = 'fill="#fff"';
const svg = (body) =>
  `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">${body}</svg>`;
const S = (body) => `<g class="s">${body}</g>`;

const chalkPerson =
  '<circle cx="17" cy="30" r="8"/><path d="M3 58a14 13 0 0 1 14-17h1a14 13 0 0 1 14 17z"/>';

const ICONS = {
  userGraduate: svg(
    S('<path d="M21 17h22v5a11 11 0 0 1-22 0z"/>') +
      '<path d="M32 5l24 7-24 7-24-7z"/><rect x="10" y="13" width="2.6" height="10"/><path d="M8.3 30l3-8 3 8z"/>' +
      '<path d="M11 59a21 18 0 0 1 14-21l7 9 7-9a21 18 0 0 1 14 21z"/>'
  ),
  gradCap: svg(
    '<path d="M32 10l30 10-30 10L2 20z"/><path d="M15 26v11c0 6 8 10 17 10s17-4 17-10V26l-17 6z"/>' +
      S('<rect x="9" y="21" width="3.5" height="14"/><path d="M6 50l4.7-16 4.7 16z"/>')
  ),
  rulerTri: svg(
    S('<path fill-rule="evenodd" d="M8 6l52 52H8zM19 33v14h14z"/>') +
      '<path d="M14.5 15.5l4-4M22 23l4-4M29.5 30.5l4-4M37 38l4-4M44.5 45.5l4-4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>'
  ),
  chartPie: svg(
    S('<path d="M28 15a22 22 0 1 0 22 22H28z"/>') +
      '<path d="M34 7a22 22 0 0 1 22 22H34z"/><path d="M37 35h21a22 22 0 0 1-6.5 15z"/>'
  ),
  chalkboardUser: svg(
    S('<rect x="22" y="7" width="38" height="33" rx="3"/>') +
      '<rect x="26" y="11" width="30" height="25" rx="1"/>' +
      S('<rect x="38" y="30" width="11" height="6"/>') +
      chalkPerson
  ),
  chalkboardOutline: svg(
    '<rect x="25.5" y="9.5" width="32" height="27" rx="2.5" fill="none" stroke="currentColor" stroke-width="5"/>' +
      '<rect x="36" y="30" width="12" height="9"/>' + chalkPerson
  ),
  chalkboardSoft: svg(
    S('<rect x="22" y="7" width="38" height="33" rx="3"/>') +
      '<rect x="30" y="11" width="26" height="25" rx="1"/>' +
      S('<rect x="38" y="30" width="11" height="6"/>') +
      chalkPerson
  ),
  chalkboardTrend: svg(
    '<rect x="25.5" y="9.5" width="32" height="27" rx="2.5" fill="none" stroke="currentColor" stroke-width="5"/>' +
      '<path d="M32 28l7-7 5 4 7-8" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<rect x="36" y="32" width="12" height="7"/>' + chalkPerson
  ),
  squareQuestion: svg(
    S('<rect x="10" y="10" width="44" height="44" rx="6"/>') +
      '<text x="32" y="45" font-size="34" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">?</text>'
  ),
  question: svg(
    '<text x="32" y="56" font-size="64" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">?</text>'
  ),
  chair: svg(
    S(
      '<path d="M19 32V18a13 11 0 0 1 26 0v14" fill="none" stroke="currentColor" stroke-width="4.5"/><path d="M28 8v24M36 8v24" stroke="currentColor" stroke-width="4.5"/>' +
        '<rect x="16" y="40" width="5" height="17" rx="1.5"/><rect x="43" y="40" width="5" height="17" rx="1.5"/>'
    ) + '<rect x="10" y="31" width="44" height="9" rx="4.5"/>'
  ),
  bookOpen: svg(
    '<path d="M3 14h6v33h17a8 8 0 0 1 6 3 8 8 0 0 1 6-3h17V14h6v40H35a3 3 0 0 1-6 0H3z"/>' +
      '<path d="M12 10h12a6 6 0 0 1 6 6v30a9 9 0 0 0-6-2H12zM52 10H40a6 6 0 0 0-6 6v30a9 9 0 0 1 6-2h12z"/>'
  ),
  globe: svg(
    '<circle cx="32" cy="32" r="28"/>' +
      `<path ${W} d="M13 21c5-6 11-7 14-4 2 3-1 6-4 7-3 2-2 6 0 9 2 4-1 7-5 6-5-2-7-12-5-18z"/>` +
      `<path ${W} d="M33 30c8-4 17-2 21 4 1 9-4 15-10 17 1-5-1-9-5-9-5 0-9-4-6-12z"/>` +
      `<path ${W} d="M37 9c6-1 11 2 13 6-4 1-8 1-10-1-2-1-3-3-3-5z"/>`
  ),
  rotate1: svg(
    S(
      '<path d="M12 27a21 15 0 0 1 34-9" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M41 8l12 9-14 5z"/>' +
        '<path d="M52 37a21 15 0 0 1-34 9" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><path d="M23 56l-12-9 14-5z"/>'
    ) +
      '<text x="33" y="41" font-size="22" font-weight="900" text-anchor="middle" font-family="Arial, sans-serif">1</text>'
  ),
  octagonCheck: svg(
    '<path d="M23 5h18a4 4 0 0 1 3 1l13 13a4 4 0 0 1 1 3v20a4 4 0 0 1-1 3L44 58a4 4 0 0 1-3 1H23a4 4 0 0 1-3-1L7 45a4 4 0 0 1-1-3V22a4 4 0 0 1 1-3L20 6a4 4 0 0 1 3-1z"/>' +
      '<path d="M20 33l8 8 16-16" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  idCardDuo: svg(
    S('<rect x="4" y="12" width="56" height="40" rx="6"/>') +
      '<circle cx="21" cy="28" r="6.5"/><path d="M10 46a11 9 0 0 1 22 0z"/>' +
      '<rect x="37" y="23" width="17" height="4" rx="2"/><rect x="37" y="30" width="17" height="4" rx="2"/><rect x="37" y="37" width="17" height="4" rx="2"/>'
  ),
  idCard: svg(
    '<rect x="4" y="12" width="56" height="40" rx="5"/>' +
      `<g ${W}><circle cx="21" cy="28" r="6"/><path d="M11 45a10 8 0 0 1 20 0z"/><rect x="36" y="25" width="17" height="3.5" rx="1.7"/><rect x="36" y="31" width="17" height="3.5" rx="1.7"/><rect x="36" y="37" width="17" height="3.5" rx="1.7"/></g>`
  ),
  mapLocation: svg(
    '<path d="M3 24l15-6 4 2v38l-4-2-15 6zM42 20l4-2 15 6v34l-15-6-4 2zM24 21l8 10 8-10v37l-8 3-8-3z"/>' +
      '<path d="M32 3a11 11 0 0 1 11 11c0 9-11 19-11 19S21 23 21 14A11 11 0 0 1 32 3z" stroke="#fff" stroke-width="2.5"/>'
  ),
  house: svg('<path d="M32 5l28 25h-8v28H38V42H26v16H12V30H4z"/>'),
  flag: svg(
    '<rect x="10" y="5" width="4.5" height="54" rx="2.2"/><path d="M18 9c10-4 18 4 28 0 4-1.5 8-2 11-1v28c-9 4-17-1-26 0-5 .5-9 2-13 3z"/>'
  ),
  envelopes: svg(
    '<rect x="20" y="6" width="38" height="30" rx="3"/>' +
      `<rect x="44" y="14" width="8" height="8" rx="1" ${W}/>` +
      '<rect x="5" y="22" width="38" height="31" rx="3" stroke="#fff" stroke-width="3"/>' +
      '<path d="M6 26l18 13 18-13" fill="none" stroke="#fff" stroke-width="3"/>'
  ),
  camera: svg(
    '<rect x="5" y="16" width="54" height="40" rx="6"/><rect x="18" y="9" width="16" height="10" rx="2"/>' +
      '<circle cx="32" cy="36" r="10" fill="none" stroke="#fff" stroke-width="4.5"/>'
  ),
  wheelchair: svg(
    '<circle cx="24" cy="8" r="5.5"/>' +
      '<path d="M24 17v17h15l7 14h7" fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M15 27a15 15 0 1 0 21 20" fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round"/>'
  ),
  universal: svg(
    '<circle cx="32" cy="32" r="29"/><circle cx="32" cy="17" r="4.5" fill="#fff"/>' +
      '<path d="M18 25h28M32 25v13l-6 14M32 38l6 14" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>'
  ),
  idBadge: svg(
    '<rect x="8" y="14" width="48" height="44" rx="4"/><rect x="23" y="3" width="18" height="16" rx="4"/>' +
      `<g ${W}><rect x="28" y="8" width="8" height="6" rx="1"/><circle cx="32" cy="33" r="6.5"/><path d="M21 50a11 8 0 0 1 22 0z"/></g>`
  ),
  moneyCheckPen: svg(
    '<path d="M42 21H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h46a4 4 0 0 0 4-4V38" fill="none" stroke="currentColor" stroke-width="4"/>' +
      '<path d="M12 34h20M12 44h28" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M53 9l6 6-19 19-8 2 2-8z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>'
  ),
  houseUser: svg(
    '<path d="M32 5l28 25h-7v28H11V30H4zM50 8h6v14l-6-5z"/>' +
      `<g ${W}><circle cx="32" cy="32" r="6"/><path d="M21 50a11 9 0 0 1 22 0z"/></g>`
  ),
  briefcase: svg(
    '<path d="M24 16V9h16v7" fill="none" stroke="currentColor" stroke-width="5"/><rect x="5" y="15" width="54" height="40" rx="5"/>' +
      '<rect x="5" y="31" width="54" height="3" fill="#fff"/><rect x="27" y="27" width="10" height="10" rx="2" stroke="#fff" stroke-width="2.5"/>'
  ),
  loginArrow: svg(
    '<path d="M38 8h12a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H38" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M5 25h17V14l19 18-19 18V39H5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>'
  ),
  userPlus: svg(
    '<circle cx="25" cy="19" r="12"/><path d="M3 58a22 19 0 0 1 44 0z"/>' +
      '<path d="M52 21v16M44 29h16" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>'
  ),
  userPlusDuo: svg(
    S('<circle cx="25" cy="19" r="12"/><path d="M3 58a22 19 0 0 1 44 0z"/>') +
      '<path d="M52 21v16M44 29h16" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>'
  ),
  listCheck: svg(
    '<path d="M7 12l4 4 8-8M7 28l4 4 8-8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle cx="12" cy="46" r="4.5"/><rect x="27" y="9" width="31" height="6" rx="3"/><rect x="27" y="25" width="31" height="6" rx="3"/><rect x="27" y="43" width="31" height="6" rx="3"/>'
  ),
  listDuo: svg(
    '<rect x="8" y="9" width="9" height="9" rx="2"/><rect x="8" y="27" width="9" height="9" rx="2"/><rect x="8" y="45" width="9" height="9" rx="2"/>' +
      S('<rect x="23" y="11" width="34" height="5" rx="2.5"/><rect x="23" y="29" width="34" height="5" rx="2.5"/><rect x="23" y="47" width="34" height="5" rx="2.5"/>')
  ),
  rocket: svg(
    S('<path d="M22 30H11l-7 10 15-2zM34 42v12l-9 6 2-15zM17 44c-6 1-10 6-10 13 7 0 12-4 12-11z"/>') +
      '<path d="M59 5C41 5 28 15 21 30l13 13c15-7 25-20 25-38z"/><circle cx="44" cy="20" r="4.5" fill="#fff"/>'
  ),
  creditCard: svg(
    '<rect x="4" y="12" width="56" height="40" rx="6"/>' +
      `<g ${W}><rect x="44" y="18" width="10" height="7" rx="2"/><rect x="12" y="35" width="40" height="2.6" rx="1.3"/><rect x="12" y="41" width="9" height="2.6" rx="1.3"/><rect x="25" y="41" width="13" height="2.6" rx="1.3"/></g>`
  ),
  userGear: svg(
    S('<circle cx="23" cy="19" r="12"/><path d="M2 56a21 18 0 0 1 36-12v12z"/>') +
      '<circle cx="46" cy="44" r="13" fill="none" stroke="currentColor" stroke-width="6" stroke-dasharray="5.1 5.1"/>' +
      '<circle cx="46" cy="44" r="9" fill="none" stroke="currentColor" stroke-width="6"/>'
  ),
  bell: svg(
    '<path d="M32 5a4 4 0 0 1 4 4v3a17 17 0 0 1 13 17v10l6 7v3H9v-3l6-7V29a17 17 0 0 1 13-17V9a4 4 0 0 1 4-4z"/><path d="M25 53h14a7 6 0 0 1-14 0z"/>'
  ),
  book: svg(
    S('<rect x="10" y="46" width="44" height="12" rx="5"/>') +
      '<path d="M16 4h38v44H18a8 8 0 0 0-8 2V10a6 6 0 0 1 6-6z"/>' +
      `<g ${W}><rect x="23" y="15" width="22" height="4" rx="2"/><rect x="23" y="23" width="22" height="4" rx="2"/></g>`
  ),
  landmark: svg(
    '<path d="M32 3l28 12v7H4v-7z"/><circle cx="32" cy="13" r="3.2" fill="#fff"/>' +
      S('<rect x="9" y="25" width="7" height="22"/><rect x="22" y="25" width="7" height="22"/><rect x="35" y="25" width="7" height="22"/><rect x="48" y="25" width="7" height="22"/><rect x="4" y="50" width="56" height="8" rx="2"/>')
  ),
  userTie: svg(
    S('<circle cx="32" cy="16" r="12"/>') +
      '<path d="M7 60a25 22 0 0 1 50 0z"/>' +
      S('<path d="M29 39h6l2 15-5 5-5-5z"/>')
  ),
  fileCert: svg(
    S('<path d="M24 5h22l13 13v36a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4z"/>') +
      '<path d="M46 5v13h13z"/><path d="M12 44v16l6-4 6 4V44z"/><circle cx="18" cy="34" r="11"/><circle cx="18" cy="34" r="4.5" fill="#fff"/>'
  ),
  fileCertDuoLine: svg(
    '<path d="M28 24V9a4 4 0 0 1 4-4h14l12 12v37a4 4 0 0 1-4 4H30" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round"/>' +
      '<path d="M45 5v13h13" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linejoin="round"/>' +
      '<path d="M12 44v16l6-4 6 4V44z"/><circle cx="18" cy="34" r="11"/>' + S('<circle cx="18" cy="34" r="5"/>')
  ),
  fileCertLine: svg(
    '<path d="M28 24V9a4 4 0 0 1 4-4h14l12 12v37a4 4 0 0 1-4 4H30" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M45 5v13h13" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>' +
      '<path d="M12.5 44v15l5.5-3.5 5.5 3.5V44" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/>' +
      '<circle cx="18" cy="34" r="10" fill="none" stroke="currentColor" stroke-width="4"/>'
  ),
};

// Icone della barra inferiore
const NAV_ICONS = {
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4l-8 8 8 8"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3 11.2L12 3.5l9 7.7"/><path d="M5.2 9.5V20.5h4.6v-6.3h4.4v6.3h4.6V9.5"/></svg>',
  homeSolid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l10.6 9.3-1.3 1.5-1.3-1.1v9.4h-5.5v-6.3h-5v6.3H4V12.3l-1.3 1.1-1.3-1.5z"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.2 13.5A8 8 0 1 0 6.3 6.3"/><path d="M3.5 4v4.5H8"/><path d="M12 8v4.5l3 2"/></svg>',
  cogs: '<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M8.4 1.5h1.8l.4 1.8 1.2.5 1.6-1 1.3 1.3-1 1.6.5 1.2 1.8.4v1.8l-1.8.4-.5 1.2 1 1.6-1.3 1.3-1.6-1-1.2.5-.4 1.8H8.4L8 13.5l-1.2-.5-1.6 1-1.3-1.3 1-1.6-.5-1.2-1.8-.4V7.7l1.8-.4.5-1.2-1-1.6 1.3-1.3 1.6 1L8 3.3zm.9 5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2z"/><path fill-rule="evenodd" d="M17.4 11.6h1.4l.3 1.3.9.4 1.1-.7 1 1-.7 1.1.4.9 1.3.3v1.4l-1.3.3-.4.9.7 1.1-1 1-1.1-.7-.9.4-.3 1.3h-1.4l-.3-1.3-.9-.4-1.1.7-1-1 .7-1.1-.4-.9-1.3-.3v-1.4l1.3-.3.4-.9-.7-1.1 1-1 1.1.7.9-.4zm.7 3.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l3 3v4H6z" opacity=".45"/><path d="M4 9h16a2 2 0 0 1 2 2v6h-4v-3H6v3H2v-6a2 2 0 0 1 2-2zm14 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M6 15h12v7H6z" opacity=".45"/></svg>',
  rotL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v5h5"/><path d="M5.5 9A8 8 0 1 1 6 16.5"/></svg>',
  rotR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 4v5h-5"/><path d="M18.5 9A8 8 0 1 0 18 16.5"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5a1 1 0 0 1 1-1h11l4 4v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M8 4v4h7V4"/><circle cx="12" cy="14" r="2" fill="currentColor"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7l1.2-2.5h4.6L15.5 7"/><circle cx="12" cy="13.5" r="3.5"/><path d="M5.5 10h1.5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 4v16M4 12h16"/></svg>',
};
