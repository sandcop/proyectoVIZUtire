/* VIZUtire — JS */

// ========= DOT REVEAL =========
document.addEventListener('mousemove', e => {
  document.documentElement.style.setProperty('--dot-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--dot-y', e.clientY + 'px');
}, { passive: true });

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

function setActiveCard(index) {
  storyCards.forEach((card, i) => {
    card.classList.remove('active', 'past');
    if (i < index) card.classList.add('past');
    else if (i === index) card.classList.add('active');
  });
  appleNavItems.forEach((item, i) => item.classList.toggle('active', i === index));
}

function updateScrollStory() {
  if (!scrollStory || window.innerWidth < 900) return;
  const rect = scrollStory.getBoundingClientRect();
  const scrolled = -rect.top;
  const total = rect.height - window.innerHeight;
  if (total <= 0) return;
  const clamp = Math.max(0, Math.min(total, scrolled));
  const index = Math.min(Math.floor((clamp / total) * storyCards.length), storyCards.length - 1);
  setActiveCard(index);
}

window.addEventListener('scroll', updateScrollStory, { passive: true });
window.addEventListener('load', () => {
  setActiveCard(0);
  updateScrollStory();
});

appleNavItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      if (window.carouselGoTo) window.carouselGoTo(i);
      return;
    }
    if (!scrollStory) return;
    const total = scrollStory.offsetHeight - window.innerHeight;
    const segment = total / storyCards.length;
    window.scrollTo({ top: scrollStory.offsetTop + segment * i + segment * 0.5, behavior: 'smooth' });
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
    const offset = 80;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
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

// ========= FORMULARIO =========
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const data = Object.fromEntries(new FormData(form));
    const lead = {
      id: Date.now(),
      fecha: new Date().toISOString(),
      nombre:  data.nombre  || '',
      empresa: data.empresa || '',
      email:   data.email   || '',
      flota:   data.flota   || '',
      mensaje: data.mensaje || '',
      estado:  'nuevo',
      notas:   ''
    };
    const leads = JSON.parse(localStorage.getItem('vizutire_leads') || '[]');
    leads.unshift(lead);
    localStorage.setItem('vizutire_leads', JSON.stringify(leads));

    setTimeout(() => {
      btn.textContent = '¡Solicitud enviada! Te contactamos pronto.';
      btn.style.background = '#16a34a';
      form.reset();
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 5000);
    }, 1400);
  });
}
