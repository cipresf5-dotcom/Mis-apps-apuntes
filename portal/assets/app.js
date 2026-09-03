(function () {
  "use strict";

  const THEME_KEY = "portal_tema_color";
  const ANIOS = (window.PORTAL && window.PORTAL.anios) || [];

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, props = {}, html) => {
    const n = document.createElement(tag);
    Object.assign(n, props);
    if (html != null) n.innerHTML = html;
    return n;
  };

  function renderHome() {
    location.hash = "";
    const view = $("#view");
    view.innerHTML = `
      <div class="hero">
        <h1>Mis Apuntes</h1>
        <p>Elegí el año para ver sus materias. Las que ya tienen app propia se abren directo; el resto va a ir sumándose.</p>
      </div>
      <div class="anio-grid" id="anio-grid"></div>`;
    const grid = $("#anio-grid");
    ANIOS.forEach(a => {
      const card = el("div", { className: "anio-card" });
      card.innerHTML = `
        <div class="ac-num">${a.numero}</div>
        <div class="ac-tit">${a.titulo}</div>
        <div class="ac-count">${a.materias.length} materias</div>`;
      card.addEventListener("click", () => renderAnio(a.id));
      grid.appendChild(card);
    });
  }

  function renderAnio(id) {
    const anio = ANIOS.find(a => a.id === id);
    if (!anio) return renderHome();
    location.hash = id;
    const view = $("#view");
    view.innerHTML = `
      <div class="breadcrumb">
        <button id="bc-home">Inicio</button>
        <span>›</span>
        <span>${anio.titulo}</span>
      </div>
      <div class="hero">
        <h1>${anio.titulo}</h1>
        <p>Tocá una materia con app para abrirla. Las marcadas «Próximamente» todavía no tienen app propia.</p>
      </div>
      <div class="materia-grid" id="materia-grid"></div>`;
    $("#bc-home").addEventListener("click", renderHome);

    const grid = $("#materia-grid");
    anio.materias.forEach(m => {
      const hasApp = m.estado === "app";
      const card = el("div", { className: "materia-card " + (hasApp ? "is-app" : "is-pronto") });
      card.innerHTML = `
        ${hasApp ? '<span class="mc-arrow">→</span>' : ""}
        <div class="mc-nombre">${m.nombre}</div>
        ${m.desc ? `<div class="mc-desc">${m.desc}</div>` : ""}
        <div class="mc-badge ${hasApp ? "app" : "pronto"}">${hasApp ? "Abrir app" : "Próximamente"}</div>`;
      if (hasApp) card.addEventListener("click", () => window.open(m.url, "_blank", "noopener"));
      grid.appendChild(card);
    });
  }

  // ---- Tema claro/oscuro ----
  function applyTheme(mode) {
    if (mode === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
  }
  let colorMode = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(colorMode);
  $("#theme-toggle").addEventListener("click", () => {
    colorMode = colorMode === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, colorMode);
    applyTheme(colorMode);
  });

  $("#brand-home").addEventListener("click", renderHome);

  // ---- Arranque (respeta el año en el hash de la URL, si lo hay) ----
  const initial = location.hash.replace("#", "");
  if (initial && ANIOS.some(a => a.id === initial)) renderAnio(initial);
  else renderHome();
})();
