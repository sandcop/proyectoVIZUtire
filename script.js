/* VIZUtire — JS */

// Activa smoothscroll-polyfill para Safari < 15.4 e iOS antiguos
if (typeof window.smoothscroll !== 'undefined') window.smoothscroll.polyfill();



// ========= PRELOADER =========
// Espera: mínimo 1.2s (animación visible) + imágenes críticas decodificadas.
// Máximo: 2.5s por si algo falla en red. Luego fade out y remove.
(function () {
  var pre = document.getElementById('preloader');
  if (!pre) return;

  // Bloquea scroll mientras el preloader está visible
  document.body.style.overflow = 'hidden';

  function dismiss() {
    document.body.style.overflow = '';
    pre.classList.add('done');
    // Inicia el video solo en desktop — en móvil el scanner se muestra via CSS
    var vid = document.getElementById('heroVideo');
    if (vid && window.innerWidth > 900) vid.play().catch(function () {});
    setTimeout(function () { pre.remove(); }, 650);
  }

  // Decodifica imágenes críticas antes de mostrar la página
  var imgs = Array.from(document.querySelectorAll('.diag-tire-img, .diag-card-thumb img'));
  var decoded = Promise.all(imgs.map(function (img) {
    if (img.complete) return Promise.resolve();
    if (img.decode) return img.decode().catch(function () {});
    return new Promise(function (r) { img.onload = r; img.onerror = r; });
  }));

  var minWait = new Promise(function (r) { setTimeout(r, 1800); });
  var maxTimer = setTimeout(dismiss, 3500);

  Promise.all([minWait, decoded]).then(function () {
    clearTimeout(maxTimer);
    dismiss();
  });
})();


// ========= MOBILE DRAWER (patrón Kairal) =========
var _panel   = document.querySelector('.side-panel');
var _overlay = document.querySelector('.side-panel-overlay');
var _toggle  = document.querySelector('.menu-toggle');
var _close   = document.getElementById('drawerClose');

function toggleSidePanel() {
  if (!_panel) return;
  var isOpening = !_panel.classList.contains('active');
  requestAnimationFrame(function () {
    _panel.classList.toggle('active');
    _overlay.classList.toggle('active');
    _toggle.classList.toggle('open');
    document.body.style.overflow = isOpening ? 'hidden' : '';
  });
}

if (_toggle)  _toggle.addEventListener('click', toggleSidePanel);
if (_overlay) _overlay.addEventListener('click', toggleSidePanel);
if (_close)   _close.addEventListener('click', function () {
  _close.classList.add('spinning');
  toggleSidePanel();
  // Quitar la clase cuando termine la transición del panel
  _panel.addEventListener('transitionend', function reset() {
    _close.classList.remove('spinning');
    _panel.removeEventListener('transitionend', reset);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && _panel && _panel.classList.contains('active')) toggleSidePanel();
});

// ========= DOT REVEAL — coordenadas locales por sección =========
const dotSections = document.querySelectorAll('.hero, .scroll-story, .cta-section');
document.addEventListener('mousemove', e => {
  dotSections.forEach(sec => {
    const r = sec.getBoundingClientRect();
    sec.style.setProperty('--local-x', (e.clientX - r.left) + 'px');
    sec.style.setProperty('--local-y', (e.clientY - r.top)  + 'px');
  });
}, { passive: true });

// ========= CUSTOM SELECT — Cargo / Área =========
(function () {
  const wrap    = document.getElementById('cargoSelect');
  const trigger = document.getElementById('cargoTrigger');
  const valueEl = document.getElementById('cargoValue');
  const hidden  = document.getElementById('cargo');
  if (!wrap) return;

  function open()  { wrap.classList.add('open');    trigger.setAttribute('aria-expanded', 'true'); }
  function close() { wrap.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    wrap.classList.contains('open') ? close() : open();
  });

  wrap.querySelectorAll('.cs-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val   = opt.dataset.value;
      const label = opt.querySelector('.cs-opt-unit, .cs-opt-range').textContent;
      hidden.value        = val;
      valueEl.textContent = label;
      trigger.classList.add('has-value');
      wrap.querySelectorAll('.cs-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      close();
    });
  });

  document.addEventListener('click', () => close());
  wrap.addEventListener('click', e => e.stopPropagation());
})();

// ========= CUSTOM SELECT — Flota OTR =========
(function () {
  const wrap    = document.getElementById('flotaSelect');
  const trigger = document.getElementById('flotaTrigger');
  const valueEl = document.getElementById('flotaValue');
  const hidden  = document.getElementById('flota');
  if (!wrap) return;

  function open()  { wrap.classList.add('open');    trigger.setAttribute('aria-expanded', 'true'); }
  function close() { wrap.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    wrap.classList.contains('open') ? close() : open();
  });

  wrap.querySelectorAll('.cs-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val   = opt.dataset.value;
      const range = opt.querySelector('.cs-opt-range').textContent;
      hidden.value       = val;
      valueEl.textContent = range + ' neumáticos';
      trigger.classList.add('has-value');
      wrap.querySelectorAll('.cs-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      close();
    });
  });

  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) close();
  }, { passive: true });
})();

// ========= NAVBAR SCROLL =========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ========= HAMBURGER =========
const hamburgerCheck = document.getElementById('hamburgerCheck');
const navLinks = document.querySelector('.nav-links');

function closeMobileMenu() {
  if (hamburgerCheck) hamburgerCheck.checked = false;
  navLinks.classList.remove('mobile-open');
}

if (hamburgerCheck) {
  hamburgerCheck.addEventListener('change', () => {
    navLinks.classList.toggle('mobile-open', hamburgerCheck.checked);
  });
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => { if (hamburgerCheck?.checked) closeMobileMenu(); });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && hamburgerCheck?.checked) closeMobileMenu();
});

// ========= SCROLL REVEAL =========
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => observer.observe(el));

// ========= HERO TEXT CYCLE — persiana =========
(function () {
  const cycle = document.getElementById('heroCycle');
  if (!cycle) return;

  const items = Array.from(cycle.querySelectorAll('.hero-cycle-item'));
  const bar   = document.getElementById('cycleBar');
  if (items.length < 1) return;

  /* Sin animación si el usuario prefiere movimiento reducido */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items[0].classList.add('is-visible');
    return;
  }

  const STAGGER_MS      = 45;   // ms de retraso entre palabras (entrada)
  const WORD_DUR_MS     = 550;  // ms de duración por palabra (entrada)
  const STAGGER_EXIT_MS = 22;   // ms de retraso entre palabras (salida — más rápido)
  const WORD_EXIT_DUR   = 400;  // ms de duración por palabra (salida)
  // Tiempo de lectura por ítem → definido en data-dwell del HTML

  /* ── 1. Dividir cada párrafo en <span class="cycle-word"> ── */
  items.forEach(el => {
    const words = el.textContent.trim().split(/\s+/).filter(Boolean);
    el.innerHTML = words
      .map(w => `<span class="cycle-word">${w}</span>`)
      .join(' ');
  });

  /* ── 2a. Alinear max-width del primer párrafo con la línea más ancha del título ── */
  function syncCycleToTitle() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    /* Range.getClientRects() devuelve un rect por cada línea de texto */
    const range = document.createRange();
    range.selectNodeContents(title);
    const rects    = Array.from(range.getClientRects());
    const maxLineW = Math.max(...rects.map(r => r.width));
    /* Solo items[0] queda acotado; el segundo párrafo puede extenderse más */
    if (maxLineW > 0) items[0].style.maxWidth = Math.ceil(maxLineW) + 'px';
  }

  /* ── 2b. Medir altura del contenedor con ambos textos ── */
  /* Usamos propiedades individuales para no borrar el maxWidth de items[0] */
  function measureHeight() {
    // Fase escritura — forzar posición natural para medir
    items.forEach(el => {
      el.style.position  = 'static';
      el.style.opacity   = '0';
      el.style.margin    = '0';
      el.style.animation = 'none';
    });
    // Fase lectura en rAF — el browser ya recalculó el layout, sin reflow forzado
    requestAnimationFrame(() => {
      const h = Math.max(...items.map(el => el.offsetHeight));
      // Fase escritura de vuelta
      items.forEach(el => {
        el.style.position  = '';
        el.style.opacity   = '';
        el.style.margin    = '';
        el.style.animation = '';
        el.classList.remove('is-first');
      });
      cycle.style.height = (h + 14) + 'px'; /* +14 para barra de progreso */
    });
  }

  /* syncCycleToTitle() debe correr ANTES de medir: fija el max-width de items[0]
     al ancho de la línea del título, y ese ancho cambia cuántas líneas ocupa el
     texto. Si se miden por separado (p. ej. measureHeight() de inmediato y
     syncCycleToTitle() al ratito, tras cargar fuentes) la altura queda calculada
     con el ancho viejo (más angosto/ancho de la caja completa) y el texto
     reflowea después a más líneas de las que caben → queda cortado por el
     overflow:hidden del contenedor. Por eso van encadenados. */
  const resync = () => { syncCycleToTitle(); measureHeight(); };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(resync);
  /* Plus Jakarta Sans/Inter se cargan con el truco preload→rel=stylesheet
     (ver <link rel="preload" ... onload="this.rel='stylesheet'"> en el <head>):
     mientras el <link> sigue en modo preload, sus @font-face ni existen para
     el navegador, así que el document.fonts.ready de arriba puede resolver
     de inmediato usando la tipografía de reemplazo — más angosta que Plus
     Jakarta Sans — y medir corto. Por eso volvemos a esperar fonts.ready
     DESPUÉS de que ese <link> termine de activarse (ahí recién existen los
     @font-face reales); y de respaldo, también al terminar de cargar toda
     la página, por si algo más cambia el layout del título más tarde. */
  const fontLink = document.querySelector('link[href*="fonts.googleapis.com"][as="style"]');
  if (fontLink) {
    fontLink.addEventListener('load', () => {
      (document.fonts ? document.fonts.ready : Promise.resolve()).then(resync);
    }, { once: true });
  }
  window.addEventListener('load', resync, { once: true });

  /* Recalcula altura Y max-width al redimensionar */
  let resizeTO = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      syncCycleToTitle();
      measureHeight();
    }, 200);
  }, { passive: true });

  /* ── Barra de progreso de lectura ── */
  let barRAF = null;
  function runBar(duration, onDone) {
    if (barRAF) cancelAnimationFrame(barRAF);
    if (!bar) { setTimeout(onDone, duration); return; }
    bar.style.width = '0%';
    const t0 = performance.now();
    (function tick(now) {
      const pct = Math.min((now - t0) / duration * 100, 100);
      bar.style.width = pct + '%';
      if (pct < 100) barRAF = requestAnimationFrame(tick);
      else           onDone();
    })(t0);
  }

  /* ── Mostrar ítem: stagger palabra a palabra ── */
  function showItem(idx, done) {
    const el    = items[idx];
    const words = el.querySelectorAll('.cycle-word');

    /* Delay escalonado por cada palabra */
    words.forEach((w, i) => {
      w.style.animationDelay = (i * STAGGER_MS) + 'ms';
    });

    el.classList.remove('is-leaving');
    el.classList.add('is-entering');

    /* Esperar que la última palabra termine de entrar */
    const totalEnterMs = (words.length - 1) * STAGGER_MS + WORD_DUR_MS;
    setTimeout(() => {
      el.classList.remove('is-entering');
      el.classList.add('is-visible');
      words.forEach(w => { w.style.animationDelay = ''; });
      if (done) done();
    }, totalEnterMs);
  }

  /* ── Ocultar ítem: stagger palabra a palabra (espejo de la entrada) ── */
  function hideItem(idx, done) {
    const el    = items[idx];
    const words = el.querySelectorAll('.cycle-word');

    /* Delay escalonado por cada palabra */
    words.forEach((w, i) => {
      w.style.animationDelay = (i * STAGGER_EXIT_MS) + 'ms';
    });

    el.classList.remove('is-visible', 'is-entering');
    el.classList.add('is-leaving');
    if (bar) bar.style.width = '0%';

    /* Esperar que la última palabra termine de salir */
    const totalExitMs = (words.length - 1) * STAGGER_EXIT_MS + WORD_EXIT_DUR;
    setTimeout(() => {
      el.classList.remove('is-leaving');
      words.forEach(w => { w.style.animationDelay = ''; });
      if (done) done();
    }, totalExitMs);
  }

  /* ── Ciclo normal: entrada animada + dwell + salida ── */
  let current = 0;
  function step() {
    const dwell = parseInt(items[current].dataset.dwell, 10) || 8000;
    showItem(current, () => {
      runBar(dwell, () => {
        hideItem(current, () => {
          current = (current + 1) % items.length;
          step();
        });
      });
    });
  }

  /* ── Inicio desde el primer ítem ya visible (sin re-animar la entrada) ── */
  function startFromVisible() {
    current = 0;
    const dwell = parseInt(items[0].dataset.dwell, 10) || 8000;
    runBar(dwell, () => {
      hideItem(0, () => {
        current = 1;
        step();
      });
    });
  }

  /* ── Un solo párrafo: no hay a qué rotar → solo animación de entrada, sin ciclo ── */
  if (items.length === 1) {
    const heroVideo   = document.getElementById('heroVideo');
    let   cycleActive = false;

    function kickoffSingle() {
      if (cycleActive) return;
      cycleActive = true;
      showItem(0);
    }

    if (window.innerWidth <= 900) {
      kickoffSingle();
      return;
    }

    if (heroVideo && !heroVideo.ended) {
      heroVideo.addEventListener('ended', kickoffSingle, { once: true });
      const fallbackTO = setTimeout(kickoffSingle, 25000);
      heroVideo.addEventListener('ended', () => clearTimeout(fallbackTO), { once: true });
    } else {
      kickoffSingle();
    }
    return;
  }

  /* ── El primer párrafo se muestra estático durante el vídeo ── */
  items[0].classList.add('is-visible');

  /* ── Esperar al fin del vídeo para arrancar el ciclo ── */
  const heroVideo   = document.getElementById('heroVideo');
  let   cycleActive = false;

  function kickoff() {
    if (cycleActive) return;
    cycleActive = true;
    startFromVisible();
  }

  /* ── Móvil: sin vídeo → arrancar ciclo inmediatamente ── */
  if (window.innerWidth <= 900) {
    kickoff();
    return;
  }

  if (heroVideo && !heroVideo.ended) {
    heroVideo.addEventListener('ended', kickoff, { once: true });
    /* Fallback: si el vídeo no termina en 25s (autoplay bloqueado, etc.) */
    const fallbackTO = setTimeout(kickoff, 25000);
    heroVideo.addEventListener('ended', () => clearTimeout(fallbackTO), { once: true });
  } else {
    kickoff(); /* vídeo ya terminó o no existe */
  }
})();

// ========= PILARES — flip de tarjeta =========
(function () {
  const isEN = document.documentElement.lang === 'en';
  document.querySelectorAll('.pilar-flip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.pilar-card').classList.add('is-flipped');
    });
  });
  document.querySelectorAll('.pilar-flip-back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.pilar-card');
      card.classList.remove('is-flipped');
      // Cerrar acordeón al volver para que quede limpio al re-abrir
      card.querySelectorAll('.pilar-acc-toggle[aria-expanded="true"]').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.querySelector('.pilar-acc-label').textContent = isEN ? 'View variables' : 'Ver variables';
      });
    });
  });

  // Acordeón de variables dentro del back
  document.querySelectorAll('.pilar-acc-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.querySelector('.pilar-acc-label').textContent = open
        ? (isEN ? 'View variables' : 'Ver variables')
        : (isEN ? 'Hide variables' : 'Ocultar variables');
    });
  });
})();

// ========= PILARES — staggered scale-in =========
(function () {
  const grid = document.querySelector('.pilares-grid.pilar-animate');
  if (!grid) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    grid.classList.add('is-visible');
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  obs.observe(grid);
})();

// ========= SCROLL STORY (Apple-style) =========
const scrollStory = document.querySelector('.scroll-story');
const storyCards = document.querySelectorAll('.story-card');
const appleNavItems = document.querySelectorAll('.apple-nav-item');

let activeCardIndex = -1;

function setActiveCard(index) {
  storyCards.forEach((card, i) => {
    card.classList.remove('active', 'past');
    if (i < index) card.classList.add('past');
    else if (i === index) card.classList.add('active');
  });
  appleNavItems.forEach((item, i) => item.classList.toggle('active', i === index));
  activeCardIndex = index;
}

function clearActiveCard() {
  storyCards.forEach(card => card.classList.remove('active', 'past'));
  appleNavItems.forEach(item => item.classList.remove('active'));
  activeCardIndex = -1;
}

function updateScrollStory() {
  // scroll-driven card switching disabled
}

window.addEventListener('load', () => {
  setActiveCard(0);
});

appleNavItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      if (window.carouselGoTo) window.carouselGoTo(i);
    } else {
      if (activeCardIndex === i) {
        clearActiveCard();
      } else {
        setActiveCard(i);
      }
    }
  });
});

// ========= CONTADORES ANIMADOS =========
function countUp(el, target, duration = 1600) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (!el.dataset.done) {
        el.dataset.done = '1';
        countUp(el, parseInt(el.dataset.target, 10));
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.rcount').forEach(el => counterObs.observe(el));

// ========= SMOOTH SCROLL — nativo via scroll-behavior:smooth en CSS =========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

// ========= MOBILE CAROUSEL =========
(function () {
  const cards   = document.querySelectorAll('.story-card');
  const dots    = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const window_ = document.querySelector('.carousel-window');
  let current = 0;
  let touchStartX = 0;

  const overlay = document.getElementById('mobileNavOverlay');

  function setOverlay(idx) {
    if (!overlay || !appleNavItems[idx]) return;
    const name    = appleNavItems[idx].querySelector('.ani-name')?.textContent || '';
    const desc    = appleNavItems[idx].querySelector('.ani-desc')?.textContent || '';
    const card    = cards[idx];
    const intro   = card?.querySelector('.sc-intro')?.textContent   || '';
    const explain = card?.querySelector('.sc-explain')?.textContent || '';
    const kpiNum  = card?.querySelector('.sc-proof-num')?.textContent  || '';
    const kpiLbl  = card?.querySelector('.sc-proof-label')?.textContent || '';

    const bodyHTML = (intro || explain)
      ? `<div class="mob-ov-body">` +
          `<div class="mob-ov-divider"></div>` +
          (intro   ? `<p class="mob-ov-intro">${intro}</p>` : '') +
          (explain ? `<p class="mob-ov-explain-body">${explain}</p>` : '') +
          (kpiNum  ? `<div class="mob-ov-kpi"><span class="mob-ov-kpi-num">${kpiNum}</span><span class="mob-ov-kpi-lbl">${kpiLbl}</span></div>` : '') +
        `</div>`
      : '';

    overlay.innerHTML =
      `<div class="mob-ov-row mob-ov-toggle">` +
        `<svg class="mob-ov-plus" width="16" height="16" viewBox="0 0 16 16" fill="none">` +
          `<path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>` +
        `</svg>` +
        `<span class="mob-ov-name">${name}</span>` +
        `<svg class="mob-ov-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">` +
          `<path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `</svg>` +
      `</div>` +
      `<p class="mob-ov-desc">${desc}</p>` +
      bodyHTML;

    overlay.querySelector('.mob-ov-toggle')?.addEventListener('click', () => {
      overlay.classList.toggle('mob-ov-open');
    });
  }

  function goTo(i, skipAnim) {
    const newI = Math.max(0, Math.min(cards.length - 1, i));
    const direction = newI > current ? 1 : -1;
    current = newI;
    cards.forEach((c, j) => {
      c.classList.remove('active', 'past');
      if (j === current)     c.classList.add('active');
      else if (j < current) c.classList.add('past');
    });
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
    appleNavItems.forEach((item, j) => item.classList.toggle('active', j === current));
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === cards.length - 1;
    if (!overlay) return;
    if (skipAnim) {
      setOverlay(current);
      return;
    }
    const exitClass  = direction > 0 ? 'mob-ov-out-left'  : 'mob-ov-out-right';
    const enterClass = direction > 0 ? 'mob-ov-out-right' : 'mob-ov-out-left';
    overlay.classList.add(exitClass);
    setTimeout(() => {
      setOverlay(current);
      overlay.classList.remove(exitClass);
      overlay.classList.add(enterClass);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        overlay.classList.remove(enterClass);
      }));
    }, 300);
  }
  window.carouselGoTo = goTo;

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, j) => d.addEventListener('click', () => goTo(j)));

  // Touch swipe
  if (window_) {
    window_.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    window_.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 44) goTo(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  // Init on load; reset when resizing to mobile
  function init() {
    if (window.innerWidth <= 900) goTo(current, true);
  }
  window.addEventListener('load', init);
  window.addEventListener('resize', init);
})();

// ========= SECTION SCROLL HIGHLIGHT =========
const sectionHighlightObs = new IntersectionObserver((entries) => {
  entries.forEach(e => e.target.classList.toggle('in-view', e.isIntersecting));
}, { threshold: 0.05 });

document.querySelectorAll('section[id], .diag-solution').forEach(s => sectionHighlightObs.observe(s));

// ========= IFRAMES — suspender cuando están fuera del viewport =========
// Evita que el RAF loop interno del iframe consuma recursos innecesarios
(function () {
  const iframes = document.querySelectorAll('.hitos-iframe, .hitos-iframe-mobile, .clientes-iframe');
  if (!iframes.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      // visibility:hidden detiene el rendering del iframe pero mantiene el layout
      e.target.style.visibility = e.isIntersecting ? 'visible' : 'hidden';
    });
  }, { rootMargin: '200px 0px' }); // margen de 200px para pre-cargar antes de entrar
  iframes.forEach(f => obs.observe(f));
})();

// ========= BANNER TRACK PAUSE ON HOVER =========
const bannerTrack = document.querySelector('.banner-track');
if (bannerTrack) {
  bannerTrack.addEventListener('mouseenter', () => bannerTrack.style.animationPlayState = 'paused');
  bannerTrack.addEventListener('mouseleave', () => bannerTrack.style.animationPlayState = 'running');
}

// ========= CAPTCHA ANTIBOT =========
(function () {
  const qEl   = document.getElementById('captchaQuestion');
  const aEl   = document.getElementById('captchaAnswer');
  const rBtn  = document.getElementById('captchaRefresh');
  const errEl = document.getElementById('captchaError');
  if (!qEl) return;

  const ops = [
    (a, b) => ({ q: `¿Cuánto es ${a} + ${b}?`,     ans: a + b }),
    (a, b) => ({ q: `¿Cuánto es ${a + b} − ${b}?`, ans: a }),
    (a, b) => ({ q: `${a} × ${b} = ?`,              ans: a * b }),
  ];

  function gen() {
    const a  = Math.floor(Math.random() * 9) + 1;
    const b  = Math.floor(Math.random() * 9) + 1;
    const op = ops[Math.floor(Math.random() * ops.length)](a, b);
    qEl.textContent = op.q;
    window._captchaAns = op.ans;
    if (aEl)   aEl.value = '';
    if (errEl) errEl.textContent = '';
  }

  gen();
  if (rBtn) rBtn.addEventListener('click', gen);

  window._captchaValid = function () {
    const val = parseInt(aEl?.value, 10);
    if (isNaN(val) || val !== window._captchaAns) {
      if (errEl) errEl.textContent = 'Respuesta incorrecta. Intenta de nuevo.';
      gen();
      return false;
    }
    return true;
  };
})();

// ========= FORMULARIO =========
const form = document.getElementById('contactForm');
if (form) {
  const emailEl = document.getElementById('email');

  // Quitar estado de error mientras el usuario escribe
  if (emailEl) {
    emailEl.addEventListener('input', () => {
      emailEl.closest('.form-group')?.classList.remove('form-group--error', 'form-group--shake');
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Correo obligatorio antes de continuar
    const emailVal   = (emailEl?.value || '').trim();
    const emailGroup = emailEl?.closest('.form-group');
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      emailGroup?.classList.add('form-group--error', 'form-group--shake');
      setTimeout(() => emailGroup?.classList.remove('form-group--shake'), 420);
      emailEl?.focus();
      return;
    }
    emailGroup?.classList.remove('form-group--error');

    if (window._captchaValid && !window._captchaValid()) return;

    const data = Object.fromEntries(new FormData(form));

    // Guardar datos básicos para pre-rellenar el formulario de captación
    localStorage.setItem('vizutire_prefill', JSON.stringify({
      nombre:  data.nombre  || '',
      empresa: data.empresa || '',
      correo:  data.email   || '',
      cargo:   data.cargo   || '',
    }));

    // Token de acceso — válido 2 horas, heredado por la nueva pestaña via sessionStorage
    sessionStorage.setItem('viz_access', JSON.stringify({
      t: 'viz_' + Date.now(),
      exp: Date.now() + 7200000
    }));

    // Abrir el formulario de captación en nueva página
    window.open('formulario-captacion.html', '_blank');
  });
}

// ========= HERO TIRE — 3D tilt + cursor reveal =========
(function () {
  const stage = document.getElementById('heroStage');
  const wrap  = document.getElementById('heroTireWrap');
  if (!stage || !wrap) return;

  const cfg = { tiltDeg: 5.5, floatPx: 0, revealRadius: 235, revealFeather: 108 };

  let rafId = null;
  let targetRX = 0, targetRY = 0, targetTX = 0, targetTY = 0;
  let curRX = 0, curRY = 0, curTX = 0, curTY = 0;
  let isHover = false;

  function sv(n, v) { stage.style.setProperty(n, v); }

  function onMove(e) {
    const r  = stage.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const nx = (px / r.width)  * 2 - 1;
    const ny = (py / r.height) * 2 - 1;
    targetRY =  nx * cfg.tiltDeg;
    targetRX = -ny * cfg.tiltDeg;
    targetTX =  nx * cfg.floatPx * 0.4;
    targetTY =  ny * cfg.floatPx * 0.4;
    isHover  = true;
    stage.classList.add('hovering');
    sv('--htire-x', px + 'px');
    sv('--htire-y', py + 'px');
    sv('--htire-r', cfg.revealRadius + 'px');
    sv('--htire-f', cfg.revealFeather + 'px');
    schedule();
  }

  function onLeave() {
    isHover = false;
    targetRX = targetRY = targetTX = targetTY = 0;
    sv('--htire-x', '-9999px');
    sv('--htire-y', '-9999px');
    stage.classList.remove('hovering');
    schedule();
  }

  function schedule() {
    if (rafId != null) return;
    rafId = requestAnimationFrame(tick);
  }

  function tick() {
    rafId = null;
    const k = 0.12;
    curRX += (targetRX - curRX) * k;
    curRY += (targetRY - curRY) * k;
    curTX += (targetTX - curTX) * k;
    curTY += (targetTY - curTY) * k;
    wrap.style.transform =
      `translate3d(${curTX.toFixed(2)}px,${curTY.toFixed(2)}px,0) ` +
      `rotateX(${curRX.toFixed(2)}deg) rotateY(${curRY.toFixed(2)}deg)`;
    const d = Math.abs(targetRX - curRX) + Math.abs(targetRY - curRY) +
              Math.abs(targetTX - curTX) + Math.abs(targetTY - curTY);
    if (d > 0.02) schedule();
  }

  stage.addEventListener('pointermove',  onMove);
  stage.addEventListener('pointerenter', onMove);
  stage.addEventListener('pointerleave', onLeave);

  // Respiración idle suave
  const t0 = performance.now();
  (function idle() {
    if (!isHover) {
      const t = (performance.now() - t0) / 1000;
      targetRX = Math.sin(t * 0.6) * 1.2;
      targetRY = Math.cos(t * 0.5) * 1.6;
      schedule();
    }
    requestAnimationFrame(idle);
  })();
})();

// ========= MARCADORES DE FALLA — hover (desktop) / tap con overlay (móvil) =========
(function () {
  const markers = document.querySelectorAll('.fault-marker[data-fault]');
  const cards   = document.querySelectorAll('.diag-info-card[data-card]');
  if (!markers.length || !cards.length) return;

  let hoverTimer    = null;
  let activeFaultId = null;

  const isMobile = () => window.innerWidth <= 900;

  function activate(faultId) {
    activeFaultId = faultId;
    markers.forEach(m => m.classList.toggle('fault-marker--active', m.dataset.fault === faultId));
    cards.forEach(c => c.classList.toggle('active', c.dataset.card === faultId));
  }

  function deactivate() {
    activeFaultId = null;
    markers.forEach(m => m.classList.remove('fault-marker--active'));
    cards.forEach(c => c.classList.remove('active'));
  }

  // ── Inicialización inmediata ──────────────────────────────────────────────
  // Móvil: quitar la clase "active" del HTML antes de pintar — ninguna tarjeta visible al cargar
  // Desktop: la primera tarjeta se activa al cargar
  if (isMobile()) {
    deactivate();
  }

  window.addEventListener('load', () => {
    if (!isMobile() && markers[0]) activate(markers[0].dataset.fault);
  });

  // X — cerrar tarjeta activa en mobile
  document.querySelectorAll('.diag-card-close').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      deactivate();
    });
  });

  // ── Interacciones ─────────────────────────────────────────────────────────
  markers.forEach(marker => {
    // Desktop: hover activa la tarjeta
    marker.addEventListener('mouseenter', () => {
      if (isMobile()) return;
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => activate(marker.dataset.fault), 80);
    });

    // Móvil: click (touch-action:manipulation en CSS elimina el delay de 300 ms)
    // El mismo marcador cierra, otro marcador cambia
    marker.addEventListener('click', (e) => {
      if (!isMobile()) return;
      e.stopPropagation();
      if (activeFaultId === marker.dataset.fault) {
        deactivate();
      } else {
        activate(marker.dataset.fault);
      }
    });
  });

  // Móvil: tap fuera de la tarjeta activa la cierra
  document.addEventListener('click', (e) => {
    if (!isMobile() || !activeFaultId) return;
    const activeCard = document.querySelector('.diag-info-card.active');
    if (activeCard && !activeCard.contains(e.target) && !e.target.closest('.fault-marker')) {
      deactivate();
    }
  });
})();

// ========= IFRAME HISTORIA — redirige wheel al scroll nativo de la página =========
(function () {
  const historiaFrame = document.querySelector('.historia-frame');
  if (!historiaFrame) return;
  historiaFrame.addEventListener('wheel', (e) => {
    e.preventDefault();
    window.scrollBy({ top: e.deltaY, behavior: 'auto' });
  }, { passive: false });
})();

// ========= WAVE INPUTS — label arriba cuando textarea/input tiene contenido =========
(function () {
  document.querySelectorAll('.wave-group .input').forEach(el => {
    const sync = () => el.value
      ? el.classList.add('has-value')
      : el.classList.remove('has-value');
    el.addEventListener('input', sync);
    el.addEventListener('blur',  sync);
    sync(); // por si el navegador autocompletó
  });
})();

// ========= HERO SCANNER — aparece al terminar el vídeo =========
(function () {
  const video   = document.getElementById('heroVideo');
  const scanner = document.getElementById('heroScanner');
  if (!video || !scanner) return;

  const source  = video.querySelector('source');
  // Acepta data-src (sin carga inicial) o src convencional
  const origSrc = source
    ? (source.getAttribute('data-src') || source.getAttribute('src') || null)
    : null;

  function onEnded() { scanner.classList.add('visible'); }

  function setupDesktop() {
    // Asigna src la primera vez (o lo restaura tras modo móvil)
    if (origSrc && source && !source.getAttribute('src')) {
      source.setAttribute('src', origSrc);
      video.load();
      video.play().catch(() => {});
    }
    video.removeEventListener('ended', onEnded);
    video.addEventListener('ended', onEnded);
  }

  function teardownMobile() {
    video.removeEventListener('ended', onEnded);
    scanner.classList.remove('visible');
    video.pause();
    if (source) source.removeAttribute('src');
    video.load(); // sin src → el navegador no registra sesión de media
  }

  const mqScanner = window.matchMedia('(max-width: 900px)');
  if (mqScanner.matches) teardownMobile(); else setupDesktop();
  mqScanner.addEventListener('change', e => e.matches ? teardownMobile() : setupDesktop());
})();

// ========= HERO TEXT + LOGO — disparo único, permanente =========
// Cuando el vídeo muestra fondo claro (luminancia > THRESHOLD):
//   • Texto pasa a oscuro (.hero--ended) y se queda así para siempre.
//   • Logo cambia de negativo (blanco) → positivo (oscuro) al mismo tiempo.
// Una vez disparado, el muestreo se detiene; no hay reversión.
(function () {
  const hero  = document.querySelector('.hero');
  const video = document.getElementById('heroVideo');
  if (!hero || !video) return;

  let triggered    = false;
  let rafId        = null;
  let canvasFailed = false;

  function trigger(reason) {
    if (triggered) return;
    triggered = true;
    hero.classList.add('hero--ended');
    console.info('[VIZUtire hero] Trigger —', reason);
    stopRAF();
  }

  const canvas = document.createElement('canvas');
  canvas.width = 32; canvas.height = 18;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const THRESHOLD    = 128;
  const BRIGHT_START = 3.4;
  const TIMER_TRIGGER = 3.4;

  function readLuminance() {
    if (canvasFailed || video.readyState < 2) return null;
    try {
      ctx.drawImage(video, 0, 0, 32, 18);
      const d = ctx.getImageData(0, 0, 32, 18).data;
      let s = 0;
      for (let i = 0; i < d.length; i += 4)
        s += d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114;
      return s / (d.length / 4);
    } catch (e) {
      canvasFailed = true;
      return null;
    }
  }

  function sampleFrame() {
    if (triggered || video.paused || video.ended || video.readyState < 2) return;
    const lum = readLuminance();
    if (lum !== null) {
      if (lum > THRESHOLD) trigger('canvas lum=' + lum.toFixed(1) + ' t=' + video.currentTime.toFixed(2) + 's');
    } else if (canvasFailed) {
      if (video.currentTime >= BRIGHT_START) trigger('fallback t=' + video.currentTime.toFixed(2) + 's');
    }
  }

  function startRAF() {
    if (rafId || triggered) return;
    (function loop() {
      sampleFrame();
      rafId = (!triggered && !video.paused && !video.ended)
        ? requestAnimationFrame(loop)
        : null;
    })();
  }
  function stopRAF() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function onTimeUpdate() {
    if (video.currentTime >= TIMER_TRIGGER) {
      trigger('timeupdate ' + TIMER_TRIGGER + 's');
      video.removeEventListener('timeupdate', onTimeUpdate);
    }
  }

  function setupDesktop() {
    if (triggered) return;
    // Elimina primero por si setupDesktop se llama varias veces
    video.removeEventListener('play',    startRAF);
    video.removeEventListener('pause',   stopRAF);
    video.removeEventListener('ended',   stopRAF);
    video.removeEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('play',    startRAF);
    video.addEventListener('pause',   stopRAF);
    video.addEventListener('ended',   stopRAF);
    video.addEventListener('timeupdate', onTimeUpdate);
    // Fallback garantizado: si ningún mecanismo disparó antes, el 'ended' lo hace
    video.addEventListener('ended', () => trigger('video ended fallback'), { once: true });
  }

  function teardownMobile() {
    stopRAF();
    video.removeEventListener('play',       startRAF);
    video.removeEventListener('pause',      stopRAF);
    video.removeEventListener('ended',      stopRAF);
    video.removeEventListener('timeupdate', onTimeUpdate);
  }

  const mqHero = window.matchMedia('(max-width: 900px)');
  if (!mqHero.matches) setupDesktop();
  mqHero.addEventListener('change', e => {
    if (e.matches) teardownMobile(); else setupDesktop();
  });

  window.addEventListener('pageshow', stopRAF);
})();

// ========= CASOS DE ÉXITO — EMBLA CAROUSEL (MOBILE) =========
(function () {
  if (typeof EmblaCarousel === 'undefined') return;

  const viewportEl = document.getElementById('casosEmbla');
  const dotsEl = document.getElementById('casosDots');
  if (!viewportEl) return;

  let embla = null;
  let dotBtns = [];

  function buildDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    dotBtns = embla.slideNodes().map((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'embla__dot';
      btn.setAttribute('aria-label', 'Slide ' + (i + 1));
      btn.addEventListener('click', () => embla.scrollTo(i));
      dotsEl.appendChild(btn);
      return btn;
    });
    updateDots();
  }

  function updateDots() {
    const idx = embla.selectedScrollSnap();
    dotBtns.forEach((btn, i) => btn.classList.toggle('embla__dot--selected', i === idx));
  }

  function init() {
    if (embla) return;
    embla = EmblaCarousel(viewportEl, {
      loop: false,
      align: 'start',
      dragFree: false,
    });
    viewportEl.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('pointerup', onPointerUp);
    embla.on('select', updateDots);
    buildDots();
  }

  function destroy() {
    if (!embla) return;
    viewportEl.removeEventListener('pointerdown', onPointerDown);
    document.removeEventListener('pointerup', onPointerUp);
    embla.destroy();
    embla = null;
    dotBtns = [];
    if (dotsEl) dotsEl.innerHTML = '';
  }

  function onPointerDown() { viewportEl.classList.add('is-dragging'); }
  function onPointerUp() { viewportEl.classList.remove('is-dragging'); }

  const mq = window.matchMedia('(max-width: 900px)');
  function onMQ(e) { e.matches ? init() : destroy(); }
  mq.addEventListener('change', onMQ);
  onMQ(mq);
})();

// ========= 3 PILARES — EMBLA DRAG-FREE (≤1100px) =========
(function () {
  if (typeof EmblaCarousel === 'undefined') return;

  const viewportEl = document.getElementById('pilaresEmbla');
  const dotsEl = document.getElementById('pilaresDots');
  if (!viewportEl) return;

  let embla = null;
  let dotBtns = [];

  function buildDots(count) {
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    dotBtns = Array.from({ length: count }, (_, i) => {
      const btn = document.createElement('button');
      btn.className = 'embla__dot';
      btn.setAttribute('aria-label', 'Pilar ' + (i + 1));
      btn.addEventListener('click', () => embla.scrollTo(i));
      dotsEl.appendChild(btn);
      return btn;
    });
    updateDots();
  }

  function updateDots() {
    const idx = embla.selectedScrollSnap();
    dotBtns.forEach((btn, i) => btn.classList.toggle('embla__dot--selected', i === idx));
  }

  function init() {
    if (embla) return;
    embla = EmblaCarousel(viewportEl, {
      dragFree: true,
      loop: false,
      align: 'start',
      slides: '.pilar-card',
    });
    viewportEl.addEventListener('pointerdown', onPD);
    document.addEventListener('pointerup', onPU);
    embla.on('select', updateDots);
    buildDots(embla.slideNodes().length);
  }

  function destroy() {
    if (!embla) return;
    viewportEl.removeEventListener('pointerdown', onPD);
    document.removeEventListener('pointerup', onPU);
    embla.destroy();
    embla = null;
    dotBtns = [];
    if (dotsEl) dotsEl.innerHTML = '';
  }

  function onPD() { viewportEl.classList.add('is-dragging'); }
  function onPU() { viewportEl.classList.remove('is-dragging'); }

  const mq = window.matchMedia('(max-width: 1100px)');
  function onMQ(e) { e.matches ? init() : destroy(); }
  mq.addEventListener('change', onMQ);
  onMQ(mq);
})();

// ========= ALICANTO ACCORDION =========
(function () {
  const items = document.querySelectorAll('.ali-acc-item');
  if (!items.length) return;
  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      items.forEach(function (it) { it.classList.remove('active'); });
      item.classList.add('active');
    });
  });
})();
