/* VIZUtire — JS */

// ========= LENIS SMOOTH SCROLL =========
const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
});
(function rafLoop(time) {
  lenis.raf(time);
  requestAnimationFrame(rafLoop);
})(0);

// ========= DOT REVEAL — coordenadas locales por sección =========
const dotSections = document.querySelectorAll('.hero, .scroll-story, .cta-section');
document.addEventListener('mousemove', e => {
  dotSections.forEach(sec => {
    const r = sec.getBoundingClientRect();
    sec.style.setProperty('--local-x', (e.clientX - r.left) + 'px');
    sec.style.setProperty('--local-y', (e.clientY - r.top)  + 'px');
  });
}, { passive: true });

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
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
let navOpen = false;

function closeMobileMenu() {
  navOpen = false;
  navLinks.classList.remove('mobile-open');
}

hamburger.addEventListener('click', () => {
  navOpen = !navOpen;
  navLinks.classList.toggle('mobile-open', navOpen);
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => { if (navOpen) closeMobileMenu(); });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navOpen) closeMobileMenu();
});

// ========= SCROLL REVEAL =========
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => observer.observe(el));

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

// ========= SMOOTH SCROLL =========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    lenis.scrollTo(target, { offset: -80 });
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
    const name = appleNavItems[idx].querySelector('.ani-name')?.textContent || '';
    const desc = appleNavItems[idx].querySelector('.ani-desc')?.textContent || '';
    overlay.innerHTML =
      `<div class="mob-ov-row">` +
        `<svg class="mob-ov-plus" width="16" height="16" viewBox="0 0 16 16" fill="none">` +
          `<path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>` +
        `</svg>` +
        `<span class="mob-ov-name">${name}</span>` +
      `</div>` +
      `<p class="mob-ov-desc">${desc}</p>`;
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

document.querySelectorAll('section[id]').forEach(s => sectionHighlightObs.observe(s));

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
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!window._captchaValid || !window._captchaValid()) return;

    const data = Object.fromEntries(new FormData(form));

    // Guardar datos básicos para pre-rellenar el formulario de captación
    localStorage.setItem('vizutire_prefill', JSON.stringify({
      nombre:  data.nombre  || '',
      empresa: data.empresa || '',
      correo:  data.email   || '',
      flota:   data.flota   || '',
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

// ========= MARCADORES DE FALLA — hover interactivo =========
(function () {
  const markers = document.querySelectorAll('.fault-marker[data-fault]');
  const cards   = document.querySelectorAll('.diag-info-card[data-card]');
  if (!markers.length || !cards.length) return;

  let hoverTimer = null;

  function activate(faultId) {
    markers.forEach(m => m.classList.toggle('fault-marker--active', m.dataset.fault === faultId));
    cards.forEach(c => c.classList.toggle('active', c.dataset.card === faultId));
  }

  // Mostrar primera tarjeta por defecto al cargar
  window.addEventListener('load', () => {
    if (markers[0]) activate(markers[0].dataset.fault);
  });

  markers.forEach(marker => {
    marker.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => activate(marker.dataset.fault), 80);
    });
    // Soporte táctil
    marker.addEventListener('touchstart', () => activate(marker.dataset.fault), { passive: true });
  });
})();

// ========= HERO SCANNER — aparece al terminar el vídeo =========
(function () {
  const video   = document.getElementById('heroVideo');
  const scanner = document.getElementById('heroScanner');
  if (!video || !scanner) return;
  video.addEventListener('ended', () => {
    scanner.classList.add('visible');
  });
})();