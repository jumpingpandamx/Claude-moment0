// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile hamburger (basic toggle)
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');
hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  if (!open) {
    navLinks.style.flexDirection = 'column';
    navLinks.style.position      = 'absolute';
    navLinks.style.top           = '70px';
    navLinks.style.right         = '24px';
    navLinks.style.background    = '#111';
    navLinks.style.padding       = '20px 28px';
    navLinks.style.borderRadius  = '12px';
    navLinks.style.border        = '1px solid rgba(201,168,76,0.2)';
    navLinks.style.gap           = '20px';
  }
});

// Scroll-reveal on cards
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .stat, .tipo').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('animationend', () => {}, { once: true });

// Add visible class styles via JS (no extra CSS needed)
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .card.visible, .stat.visible, .tipo.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  </style>
`);
