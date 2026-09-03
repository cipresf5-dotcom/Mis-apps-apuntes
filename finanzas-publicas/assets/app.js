/* =========================================================
   Finanzas Públicas — App de estudio
   Lógica: navegación por unidades, render de temas y progreso.
   El progreso se guarda en localStorage (persiste en el equipo).
   ========================================================= */

(function () {
  "use strict";

  const STORE_KEY = "fp_progreso_v1";
  const THEME_KEY = "fp_tema_color";
  const LAST_KEY = "fp_ultima_unidad";

  const CURSO = window.CURSO || { unidades: [] };
  CURSO.unidades.sort((a, b) => a.id - b.id);

  // ---- Estado de progreso (set de ids de tema completados) ----
  let done = new Set();
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) done = new Set(JSON.parse(raw));
  } catch (e) { /* almacenamiento no disponible */ }

  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...done])); } catch (e) {}
  }

  // ---- Helpers ----
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, props = {}, html) => {
    const n = document.createElement(tag);
    Object.assign(n, props);
    if (html != null) n.innerHTML = html;
    return n;
  };

  function unitTemas(u) { return u.temas || []; }
  function unitDoneCount(u) { return unitTemas(u).filter(t => done.has(t.id)).length; }
  function unitPct(u) {
    const total = unitTemas(u).length;
    return total ? Math.round((unitDoneCount(u) / total) * 100) : 0;
  }
  function unitIsDone(u) {
    const total = unitTemas(u).length;
    return total > 0 && unitDoneCount(u) === total;
  }
  function globalPct() {
    let total = 0, hechos = 0;
    CURSO.unidades.forEach(u => { total += unitTemas(u).length; hechos += unitDoneCount(u); });
    return total ? Math.round((hechos / total) * 100) : 0;
  }

  // ---- Sidebar ----
  function renderSidebar(activeId) {
    const list = $("#unit-list");
    list.innerHTML = "";
    CURSO.unidades.forEach(u => {
      const item = el("div", { className: "unit-item" });
      if (u.id === activeId) item.classList.add("active");
      if (unitIsDone(u)) item.classList.add("done");
      item.innerHTML = `
        <div class="unit-num">${u.numero}</div>
        <div class="unit-meta">
          <div class="unit-title">${u.titulo}</div>
          <div class="unit-sub">${unitDoneCount(u)}/${unitTemas(u).length} temas · ${unitPct(u)}%</div>
        </div>
        <div class="unit-check">✓</div>`;
      item.addEventListener("click", () => openUnit(u.id));
      list.appendChild(item);
    });
    $("#progress-global-bar").style.width = globalPct() + "%";
    $("#progress-global-pct").textContent = globalPct() + "%";
  }

  // ---- Home ----
  function renderHome() {
    localStorage.removeItem(LAST_KEY);
    renderSidebar(null);
    setParcialActive(false);
    const view = $("#view");
    view.innerHTML = `
      <div class="home-hero">
        <h1>Finanzas Públicas</h1>
        <p>Programa completo de la cátedra (UNNE, 3er año). Estudiá unidad por unidad
        con el desarrollo teórico de cada tema y marcá tu avance. Tu progreso se guarda
        automáticamente en este equipo.</p>
      </div>
      <div class="home-grid" id="home-grid"></div>`;
    const grid = $("#home-grid");
    CURSO.unidades.forEach(u => {
      const card = el("div", { className: "home-card" });
      card.innerHTML = `
        <div class="hc-num">UNIDAD ${u.numero}</div>
        <div class="hc-title">${u.titulo}</div>
        <div class="bar hc-bar"><div class="bar-fill" style="width:${unitPct(u)}%"></div></div>
        <div class="hc-foot">${unitDoneCount(u)}/${unitTemas(u).length} temas completados</div>`;
      card.addEventListener("click", () => openUnit(u.id));
      grid.appendChild(card);
    });
  }

  // ---- Unidad ----
  function openUnit(id) {
    const u = CURSO.unidades.find(x => x.id === id);
    if (!u) return renderHome();
    localStorage.setItem(LAST_KEY, String(id));
    renderSidebar(id);
    setParcialActive(false);
    $("#content").scrollTop = 0;

    const view = $("#view");
    const biblio = (u.bibliografia && u.bibliografia.length)
      ? `<div class="biblio"><strong>Bibliografía:</strong> ${u.bibliografia.join(" · ")}</div>`
      : "";

    view.innerHTML = `
      <div class="unit-head">
        <div class="eyebrow">Unidad ${u.numero}</div>
        <h1>${u.titulo}</h1>
        ${biblio}
      </div>
      <button class="mark-all" id="mark-all">Marcar toda la unidad como estudiada</button>
      <div id="temas"></div>
      <div class="unit-foot">
        <button class="nav-btn prev">← Unidad anterior</button>
        <button class="nav-btn next">Siguiente unidad →</button>
      </div>`;

    const cont = $("#temas");
    unitTemas(u).forEach(t => cont.appendChild(renderTema(u, t)));

    // Sección de Trabajos Prácticos (si la unidad la tiene)
    if (u.practicos && u.practicos.trim().length) {
      cont.appendChild(renderPracticos(u));
    }

    // Navegación
    const idx = CURSO.unidades.findIndex(x => x.id === id);
    const prev = CURSO.unidades[idx - 1], next = CURSO.unidades[idx + 1];
    const prevBtn = $(".nav-btn.prev"), nextBtn = $(".nav-btn.next");
    if (prev) { prevBtn.textContent = "← " + prev.titulo; prevBtn.onclick = () => openUnit(prev.id); }
    else { prevBtn.disabled = true; }
    if (next) { nextBtn.textContent = next.titulo + " →"; nextBtn.onclick = () => openUnit(next.id); }
    else { nextBtn.disabled = true; }

    $("#mark-all").addEventListener("click", () => {
      const allDone = unitTemas(u).every(t => done.has(t.id));
      unitTemas(u).forEach(t => { if (allDone) done.delete(t.id); else done.add(t.id); });
      saveProgress();
      openUnit(id);
    });
  }

  function renderTema(u, t) {
    const wrap = el("div", { className: "tema" });
    if (done.has(t.id)) wrap.classList.add("done");

    const body = t.contenido && t.contenido.trim().length
      ? t.contenido
      : `<p class="placeholder">Contenido en preparación para este tema.</p>`;

    wrap.innerHTML = `
      <div class="tema-head">
        <div class="tema-toggle-check" title="Marcar como estudiado">✓</div>
        <div class="tema-id">${t.id}</div>
        <div class="tema-title">${t.titulo}</div>
        <div class="tema-chevron">▶</div>
      </div>
      <div class="tema-body">${body}</div>`;

    // Abrir / cerrar (clic en el cuerpo del encabezado, no en el check)
    const head = $(".tema-head", wrap);
    head.addEventListener("click", (ev) => {
      if (ev.target.closest(".tema-toggle-check")) return;
      wrap.classList.toggle("open");
    });

    // Marcar como estudiado
    $(".tema-toggle-check", wrap).addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (done.has(t.id)) done.delete(t.id); else done.add(t.id);
      wrap.classList.toggle("done");
      saveProgress();
      renderSidebar(u.id);
    });

    return wrap;
  }

  // ---- Parciales ----
  function renderParciales(n) {
    n = (n === 2) ? 2 : 1;
    localStorage.removeItem(LAST_KEY);
    renderSidebar(null);
    setParcialActive(n);
    $("#content").scrollTop = 0;

    const p = (n === 2) ? window.CURSO.parcial2 : window.CURSO.parcial1;
    const view = $("#view");
    if (!p) {
      view.innerHTML = `<div class="unit-head"><h1>Parciales</h1></div><p class="placeholder">No hay parciales cargados.</p>`;
      return;
    }

    view.innerHTML = `
      <div class="unit-head">
        <div class="eyebrow">Parcial ${n === 2 ? "2º · Unidades VI a XI" : "1º · Unidades I a V"}</div>
        <h1>${p.titulo}</h1>
        <div class="biblio">${p.intro}</div>
      </div>
      <div class="parcial-tabs">
        <button class="parcial-tab active" data-tab="modelos">📄 Modelos de parcial</button>
        <button class="parcial-tab" data-tab="mc">🔘 Multiple choice</button>
        <button class="parcial-tab" data-tab="tema">🗂 Por tema</button>
      </div>
      <div id="pv-modelos" class="parcial-view">${buildModelos(p)}</div>
      <div id="pv-mc" class="parcial-view" style="display:none">${buildMC(p)}</div>
      <div id="pv-tema" class="parcial-view" style="display:none">${buildTema(p)}</div>`;

    // Cambio de pestañas
    view.querySelectorAll(".parcial-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        view.querySelectorAll(".parcial-tab").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const t = btn.getAttribute("data-tab");
        ["modelos", "mc", "tema"].forEach(k => {
          const el2 = $("#pv-" + k);
          if (el2) el2.style.display = (k === t) ? "block" : "none";
        });
        $("#content").scrollTop = 0;
      });
    });

    // Mostrar / ocultar soluciones en los modelos
    view.querySelectorAll(".ex-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const wrap = btn.closest(".examen-wrap");
        const ex = wrap && wrap.querySelector(".examen");
        if (!ex) return;
        const on = ex.classList.toggle("reveal");
        btn.textContent = on ? "Ocultar soluciones" : "Mostrar soluciones";
      });
    });

    // Multiple choice interactivo
    view.querySelectorAll(".mc-q").forEach(q => {
      const correct = parseInt(q.getAttribute("data-correct"), 10);
      q.querySelectorAll(".mc-op").forEach(op => {
        op.addEventListener("click", () => {
          if (q.classList.contains("answered")) return;
          q.classList.add("answered");
          const i = parseInt(op.getAttribute("data-i"), 10);
          q.querySelectorAll(".mc-op").forEach(o => {
            const oi = parseInt(o.getAttribute("data-i"), 10);
            if (oi === correct) o.classList.add("correct");
            o.disabled = true;
          });
          if (i !== correct) op.classList.add("wrong");
          const exp = q.querySelector(".mc-exp");
          if (exp) exp.classList.add("show");
          updateMCScore(view);
        });
      });
    });
  }

  function buildModelos(p) {
    if (!p.modelos) return "";
    let h = `<p class="muted">Reproducción del formato de la hoja de parcial de la cátedra. Tocá «Mostrar soluciones» para ver las respuestas correctas.</p>`;
    p.modelos.forEach(m => {
      h += `
        <div class="examen-wrap">
          <div class="examen-bar">
            <span class="examen-tit">${m.titulo}</span>
            <button class="ex-toggle ghost-btn">Mostrar soluciones</button>
          </div>
          <div class="examen">${m.html}</div>
        </div>`;
    });
    return h;
  }

  function buildMC(p) {
    if (!p.mc) return "";
    let total = 0;
    p.mc.forEach(u => total += u.preguntas.length);
    let h = `<div class="mc-scorebar">Respondidas <span id="mc-done">0</span>/${total} · Correctas <span id="mc-ok">0</span></div>`;
    p.mc.forEach(u => {
      h += `<h2 class="parcial-unidad">Unidad ${u.unidad} · ${u.titulo}</h2>`;
      u.preguntas.forEach((pr, qi) => {
        let ops = "";
        pr.ops.forEach((o, i) => {
          ops += `<button class="mc-op" data-i="${i}"><b>${String.fromCharCode(97 + i)})</b> ${o}</button>`;
        });
        h += `
          <div class="mc-q" data-correct="${pr.correcta}">
            <div class="q">${qi + 1}. ${pr.q}</div>
            <div class="mc-ops">${ops}</div>
            <div class="mc-exp">${pr.exp}</div>
          </div>`;
      });
    });
    return h;
  }

  function buildTema(p) {
    if (!p.bloques) return "";
    let h = `<p class="muted">Actividades agrupadas por unidad y tema, con la respuesta correcta.</p>`;
    p.bloques.forEach(b => {
      h += `<h2 class="parcial-unidad">Unidad ${b.unidad} · ${b.titulo}</h2>`;
      b.actividades.forEach(a => {
        h += `
          <div class="tp parcial-act">
            <div class="parcial-tags">
              <span class="tema-tag">${a.tema}</span>
              <span class="fuente-tag">${a.fuente}</span>
            </div>
            ${a.html}
          </div>`;
      });
    });
    return h;
  }

  function updateMCScore(view) {
    const answered = view.querySelectorAll(".mc-q.answered");
    let ok = 0;
    answered.forEach(q => { if (!q.querySelector(".mc-op.wrong")) ok++; });
    const d = $("#mc-done"), o = $("#mc-ok");
    if (d) d.textContent = answered.length;
    if (o) o.textContent = ok;
  }

  function setParcialActive(n) {
    ["1", "2"].forEach(k => {
      const btn = $("#parcial" + k + "-btn");
      if (btn) btn.classList.toggle("active", String(n) === k);
    });
  }

  // Inserta los botones de Parciales en la barra lateral (una sola vez)
  (function mountParcialesBtn() {
    if (!window.CURSO) return;
    const list = $("#unit-list");
    if (!list) return;
    let anchor = list;
    if (window.CURSO.parcial1) {
      const b1 = el("button", { id: "parcial1-btn", className: "ghost-btn parciales-btn",
        title: "Primer parcial (Unidades I–V)" }, "📝 1º Parcial · Unid. I–V");
      b1.addEventListener("click", () => renderParciales(1));
      anchor.insertAdjacentElement("afterend", b1); anchor = b1;
    }
    if (window.CURSO.parcial2) {
      const b2 = el("button", { id: "parcial2-btn", className: "ghost-btn parciales-btn",
        title: "Segundo parcial (Unidades VI–XI)" }, "📝 2º Parcial · Unid. VI–XI");
      b2.addEventListener("click", () => renderParciales(2));
      anchor.insertAdjacentElement("afterend", b2);
    }
  })();

  // Bloque colapsable de Trabajos Prácticos (sin checkbox de progreso)
  function renderPracticos(u) {
    const wrap = el("div", { className: "tema practicos" });
    wrap.innerHTML = `
      <div class="tema-head">
        <div class="tp-badge">TP</div>
        <div class="tema-title">Trabajos Prácticos</div>
        <div class="tema-chevron">▶</div>
      </div>
      <div class="tema-body">${u.practicos}</div>`;
    $(".tema-head", wrap).addEventListener("click", () => wrap.classList.toggle("open"));
    return wrap;
  }

  // ---- Tema de color (claro/oscuro) ----
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

  $("#reset-progress").addEventListener("click", () => {
    if (confirm("¿Seguro que querés reiniciar todo tu progreso de estudio?")) {
      done = new Set();
      saveProgress();
      const last = localStorage.getItem(LAST_KEY);
      if (last) openUnit(parseInt(last, 10)); else renderHome();
    }
  });

  // Logo / marca vuelve al inicio
  $(".brand").style.cursor = "pointer";
  $(".brand").addEventListener("click", renderHome);

  // ---- Arranque ----
  const last = localStorage.getItem(LAST_KEY);
  if (last && CURSO.unidades.some(u => u.id === parseInt(last, 10))) {
    openUnit(parseInt(last, 10));
  } else {
    renderHome();
  }
})();
