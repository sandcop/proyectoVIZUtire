/* VIZUtire — JS */

// ========= NAVBAR SCROLL =========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ========= HAMBURGER =========
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
let navOpen = false;

hamburger.addEventListener('click', () => {
  navOpen = !navOpen;
  if (navOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 70px; left: 0; right: 0;
      background: rgba(246,247,248,0.97);
      backdrop-filter: blur(16px);
      padding: 20px 24px;
      gap: 4px;
      border-bottom: 1px solid #ebecef;
      z-index: 99;
    `;
  } else {
    navLinks.style.display = 'none';
  }
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navOpen = false;
    navLinks.style.display = 'none';
  });
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
